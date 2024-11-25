import { Database } from "../../data/mysql";
import { UpdateLecturaDto,RegisterLecturaDto, ResponseApi, LecturaDatasource } from "../../domain";


export class LecturaDatasourceImpl implements LecturaDatasource {
    async insertarLectura(registerLecturaDto: RegisterLecturaDto): Promise<ResponseApi> {
        try {
            Database.insertar("INSERT INTO lectura set ?", [registerLecturaDto])
            return ResponseApi.success(true, 'la Lectura se registro correctamente')
        } catch (error) {
            return ResponseApi.error('La Lectura no se pudo registrar')
        }
        
    }

    async obtenerLecturas(): Promise<ResponseApi> {
        const Lecturas = await Database.listar(
            "SELECT * FROM lectura where id_catastro=1"
        )
        return ResponseApi.success(Lecturas, 'Listado de Lecturas exitoso')
    }

    async obtenerDatosRegistroLectura(id_catastro:string): Promise<ResponseApi> {
        const Lecturas = await Database.listarId(
            "SELECT COALESCE(l.lectura_actual, m.lectura_actual_medidor) AS lectura_actual, t.id AS tarifa_id, t.rango, t.costo FROM catastro c LEFT JOIN lectura l ON c.id = l.id_catastro AND l.id = (SELECT MAX(id) FROM lectura WHERE id_catastro = c.id) JOIN medidor m ON c.id_medidor = m.id LEFT JOIN tarifa t ON t.id = (SELECT MAX(id) FROM tarifa) WHERE c.id = ? LIMIT 1;",id_catastro
        )
        return ResponseApi.success(Lecturas, 'Listado de Lecturas exitoso')
    }

    async obtenerUsuariosLecturas(): Promise<ResponseApi> {
        const Lecturas = await Database.listar(
            " SELECT c.id AS id_catastro, cl.nombre AS nombre_cliente, cl.apellidos AS apellido_cliente, cl.ci AS ci_cliente, m.numero_medidor AS codigo_medidor FROM catastro c JOIN cliente cl ON c.id_cliente = cl.id JOIN medidor m ON c.id_medidor = m.id;"
        )
        return ResponseApi.success(Lecturas, 'Listado de Lecturas exitoso')
    }

    async obtenerLectura(id: string): Promise<ResponseApi> {
        try {
            const Lectura = await Database.listarId("SELECT * FROM lectura WHERE id = ?", id)
            if (Lectura.length <= 0) return ResponseApi.error('la Lectura no existe')
            return ResponseApi.success(Lectura, 'Lectura recuperado exitosamente')
        } catch (error) {
            return ResponseApi.error('La Lectura no se pudo encontrar')
        }
    }

    async obtenerLecturasCatastro(id_catastro: string): Promise<ResponseApi> {
        try {
            const Lectura = await Database.editar("SELECT * FROM lectura WHERE id_catastro= ?", id_catastro)
            if (Lectura.length <= 0) return ResponseApi.error('la Lectura no existe')
            return ResponseApi.success(Lectura, 'Lectura recuperado exitosamente')
        } catch (error) {
            return ResponseApi.error('La Lectura no se pudo encontrar')
        }
    }

    async obtenerLecturasCatastroNoPagado(id_catastro: string): Promise<ResponseApi> {
        try {
            const Lectura = await Database.editar("SELECT * FROM lectura WHERE id_catastro= ? AND pagado = 0;", id_catastro)
            if (Lectura.length <= 0) return ResponseApi.error('la Lectura no existe')
            return ResponseApi.success(Lectura, 'Lectura recuperado exitosamente')
        } catch (error) {
            return ResponseApi.error('La Lectura no se pudo encontrar')
        }
    }

    async  actualizarLectura(id: string, updateLecturaDto: UpdateLecturaDto): Promise<ResponseApi> {
        try {
            //console.log("Aqui esta el id!!!!!!!!!!!!!!!!!")
            //console.log(registerLecturaDto.id)
            const Lectura = await Database.verificar("SELECT * FROM lectura WHERE id = ?", id)
            if( Lectura.length <= 0 ) return ResponseApi.error('El Lectura no existe')
            /*
            const resultado = await Database.actualizar("UPDATE Lectura set ? WHERE id = ?", 
            [
                {
                    
                    "nombres": registerLecturaDto.nombres,
                    "apellidos": registerLecturaDto.apellidos,
                    "edad":registerLecturaDto.edad
                }
                , id
            ])
            */
            const resultado = await Database.actualizar("UPDATE lectura set ? WHERE id = ?", [updateLecturaDto , id])
            if( !resultado ) return ResponseApi.error('No existe la Lectura a actualizar')
            return ResponseApi.success(true, "La Lectura se actualizo exitosamente")
        } catch (error) {
            return ResponseApi.error("La Lectura no se pudo actualizar")
        }
    }

    async eliminarLectura(id: string): Promise<ResponseApi> {
        try {
            const resultado = await Database.eliminar("DELETE FROM lectura WHERE id = ?", id)
            if( !resultado ) return ResponseApi.error("No existe la Lectura a eliminar")
            return ResponseApi.success(true, 'Lectura eliminado exitosamente')
        } catch (error) {
            return ResponseApi.error('La Lectura no se pudo eliminar')
        }
        
    }


}