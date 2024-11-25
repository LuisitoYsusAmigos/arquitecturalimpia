import { Database } from "../../data/mysql";
import { UpdateLecturaReciboDto,RegisterLecturaReciboDto, ResponseApi, LecturaReciboDatasource } from "../../domain";


export class LecturaReciboDatasourceImpl implements LecturaReciboDatasource {
    async insertarLecturaRecibo(registerLecturaReciboDto: RegisterLecturaReciboDto): Promise<ResponseApi> {
        try {
            Database.insertar("INSERT INTO lectura_recibo set ?", [registerLecturaReciboDto])
            return ResponseApi.success(true, 'la LecturaRecibo se registro correctamente')
        } catch (error) {
            return ResponseApi.error('La LecturaRecibo no se pudo registrar')
        }
        
    }

    async obtenerLecturaRecibos(): Promise<ResponseApi> {
        const LecturaRecibos = await Database.listar(
            "SELECT * FROM lectura_recibo"
        )
        return ResponseApi.success(LecturaRecibos, 'Listado de LecturaRecibos exitoso')
    }

    async obtenerLecturaRecibo(id: string): Promise<ResponseApi> {
        try {
            const LecturaRecibo = await Database.editar("SELECT * FROM lectura_recibo WHERE id = ?", id)
            if (LecturaRecibo.length <= 0) return ResponseApi.error('la LecturaRecibo no existe')
            return ResponseApi.success(LecturaRecibo, 'LecturaRecibo recuperado exitosamente')
        } catch (error) {
            return ResponseApi.error('La LecturaRecibo no se pudo encontrar')
        }
    }

    async  actualizarLecturaRecibo(id: string, updateLecturaReciboDto: UpdateLecturaReciboDto): Promise<ResponseApi> {
        try {
            //console.log("Aqui esta el id!!!!!!!!!!!!!!!!!")
            //console.log(registerLecturaReciboDto.id)
            const LecturaRecibo = await Database.verificar("SELECT * FROM lectura_recibo WHERE id = ?", id)
            if( LecturaRecibo.length <= 0 ) return ResponseApi.error('El LecturaRecibo no existe')
            /*
            const resultado = await Database.actualizar("UPDATE LecturaRecibo set ? WHERE id = ?", 
            [
                {
                    
                    "nombres": registerLecturaReciboDto.nombres,
                    "apellidos": registerLecturaReciboDto.apellidos,
                    "edad":registerLecturaReciboDto.edad
                }
                , id
            ])
            */
            const resultado = await Database.actualizar("UPDATE lectura_recibo set ? WHERE id = ?", [updateLecturaReciboDto , id])
            if( !resultado ) return ResponseApi.error('No existe la LecturaRecibo a actualizar')
            return ResponseApi.success(true, "La LecturaRecibo se actualizo exitosamente")
        } catch (error) {
            return ResponseApi.error("La LecturaRecibo no se pudo actualizar")
        }
    }

    async eliminarLecturaRecibo(id: string): Promise<ResponseApi> {
        try {
            const resultado = await Database.eliminar("DELETE FROM lectura_recibo WHERE id = ?", id)
            if( !resultado ) return ResponseApi.error("No existe la LecturaRecibo a eliminar")
            return ResponseApi.success(true, 'LecturaRecibo eliminado exitosamente')
        } catch (error) {
            return ResponseApi.error('La LecturaRecibo no se pudo eliminar')
        }
        
    }


}