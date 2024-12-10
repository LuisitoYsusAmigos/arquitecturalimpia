import { Database } from "../../data/mysql";
import { UpdateEgresoDto,RegisterEgresoDto, ResponseApi, EgresoDatasource } from "../../domain";


export class EgresoDatasourceImpl implements EgresoDatasource {
    async insertarEgreso(registerEgresoDto: RegisterEgresoDto): Promise<ResponseApi> {
        try {
            Database.insertar("INSERT INTO egreso set ?", [registerEgresoDto])
            return ResponseApi.success(true, 'el Egreso se registro correctamente')
        } catch (error) {
            return ResponseApi.error('el Egreso no se pudo registrar')
        }
        
    }

    async obtenerEgresos(): Promise<ResponseApi> {
        const Egresoes = await Database.listar(
            "SELECT * FROM egreso"
        )
        return ResponseApi.success(Egresoes, 'Listado de Egreso exitoso')
    }


    async obtenerEgreso(id: string): Promise<ResponseApi> {
        try {
            //console.log(id)
            //const anio: string = id.substring(0, 4); // Los primeros 4 caracteres son el año
            //const mes: string = id.substring(4, 6); // Los últimos 2 caracteres son el mes
            //console.log(anio)
            //console.log(mes)
            const Egreso = await Database.editar("SELECT * FROM egreso WHERE id = ?", id)
            if (Egreso.length <= 0) return ResponseApi.error('la Egreso no existe')
            return ResponseApi.success(Egreso, 'Egreso recuperado exitosamente')
        } catch (error) {
            return ResponseApi.error('La Egreso no se pudo encontrar')
        }
    }

    async obtenerMes(id: string): Promise<ResponseApi> {
        try {
            const [anio, mes] = id.split("-"); // Separar por el guión
            console.log(id)
            /*
            const anio: string = id.substring(0, 4); // Los primeros 4 caracteres son el año
            const mes: string = id.substring(4, 6); // Los último   s 2 caracteres son el mes
            */
            console.log(anio)
            console.log(mes)
            //`/egreso/detalle/index.html?mes_anio=${encodeURIComponent(inputMes)}`
            //const query =`SELECT * FROM egreso WHERE YEAR(fecha) = ${(anio)} AND MONTH(fecha) = = ${(mes)};`
            const Egreso = await Database.listar(`SELECT * FROM egreso WHERE YEAR(fecha) = ${(anio)} AND MONTH(fecha) =  ${(mes)};`)
            //console.log(query)
            if (Egreso.length <= 0) return ResponseApi.error('la Egreso no existe')
            return ResponseApi.success(Egreso, 'Egreso recuperado exitosamente')
        } catch (error) {
            return ResponseApi.error('La Egreso no se pudo encontrar')
        }
    }

    async  actualizarEgreso(id: string, updateEgresoDto: UpdateEgresoDto): Promise<ResponseApi> {
        try {
            
            const Egreso = await Database.verificar("SELECT * FROM egreso WHERE id = ?", id)
            if( Egreso.length <= 0 ) return ResponseApi.error('El Egreso no existe')
            /*
            const resultado = await Database.actualizar("UPDATE Egreso set ? WHERE id = ?", 
            [
                {
                    
                    "nombres": registerusuarioDto.nombres,
                    "apellidos": registerusuarioDto.apellidos,
                    "edad":registerusuarioDto.edad
                }
                , id
            ])
            */
            const resultado = await Database.actualizar("UPDATE egreso set ? WHERE id = ?", [updateEgresoDto , id])
            if( !resultado ) return ResponseApi.error('No existe el Egreso a actualizar')
            return ResponseApi.success(true, "La Egreso se actualizo exitosamente")
        } catch (error) {
            return ResponseApi.error("El Egreso no se pudo actualizar")
        }
    }

    async eliminarEgreso(id: string): Promise<ResponseApi> {
        try {
            const resultado = await Database.eliminar("DELETE FROM egreso WHERE id = ?", id)
            if( !resultado ) return ResponseApi.error("No existe la Egreso a eliminar")
            return ResponseApi.success(true, 'Egreso eliminado exitosamente')
        } catch (error) {
            return ResponseApi.error('Egreso no se pudo eliminar')
        }
        
    }


}