import { Database } from "../../data/mysql";
import { UpdatePuntosAguaDto,RegisterPuntosAguaDto, ResponseApi, PuntosAguaDatasource } from "../../domain";


export class PuntosAguaDatasourceImpl implements PuntosAguaDatasource {
    async insertarPuntosAgua(registerPuntosAguaDto: RegisterPuntosAguaDto): Promise<ResponseApi> {
        try {
            Database.insertar("INSERT INTO puntos_agua set ?", [registerPuntosAguaDto])
            return ResponseApi.success(true, 'la PuntosAgua se registro correctamente')
        } catch (error) {
            return ResponseApi.error('La PuntosAgua no se pudo registrar')
        }
        
    }

    async obtenerPuntosAguas(): Promise<ResponseApi> {
        const PuntosAguas = await Database.listar(
            "SELECT * FROM puntos_agua"
        )
        return ResponseApi.success(PuntosAguas, 'Listado de puntos_agua exitoso')
    }

    async obtenerPuntosAgua(id: string): Promise<ResponseApi> {
        try {
            const PuntosAgua = await Database.editar("SELECT * FROM puntos_agua WHERE id = ?", id)
            if (PuntosAgua.length <= 0) return ResponseApi.error('la puntos_agua no existe')
            return ResponseApi.success(PuntosAgua, 'puntos_agua recuperado exitosamente')
        } catch (error) {
            return ResponseApi.error('La puntos_agua no se pudo encontrar')
        }
    }

    async  actualizarPuntosAgua(id: string, updatePuntosAguaDto: UpdatePuntosAguaDto): Promise<ResponseApi> {
        try {
            //console.log("Aqui esta el id!!!!!!!!!!!!!!!!!")
            //console.log(registerPuntosAguaDto.id)
            const PuntosAgua = await Database.verificar("SELECT * FROM puntos_agua WHERE id = ?", id)
            if( PuntosAgua.length <= 0 ) return ResponseApi.error('El puntos_agua no existe')
            /*
            const resultado = await Database.actualizar("UPDATE PuntosAgua set ? WHERE id = ?", 
            [
                {
                    
                    "nombres": registerPuntosAguaDto.nombres,
                    "apellidos": registerPuntosAguaDto.apellidos,
                    "edad":registerPuntosAguaDto.edad
                }
                , id
            ])
            */
            const resultado = await Database.actualizar("UPDATE puntos_agua set ? WHERE id = ?", [updatePuntosAguaDto , id])
            if( !resultado ) return ResponseApi.error('No existe la puntos_agua a actualizar')
            return ResponseApi.success(true, "La puntos_agua se actualizo exitosamente")
        } catch (error) {
            return ResponseApi.error("La puntos_agua no se pudo actualizar")
        }
    }

    async eliminarPuntosAgua(id: string): Promise<ResponseApi> {
        try {
            const resultado = await Database.eliminar("DELETE FROM puntos_agua WHERE id = ?", id)
            if( !resultado ) return ResponseApi.error("No existe la puntos_agua a eliminar")
            return ResponseApi.success(true, 'puntos_agua eliminado exitosamente')
        } catch (error) {
            return ResponseApi.error('La puntos_agua no se pudo eliminar')
        }
        
    }


}