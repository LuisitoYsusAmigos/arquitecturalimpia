import { Database } from "../../data/mysql";
import { UpdateUbicacionDto,RegisterUbicacionDto, ResponseApi, UbicacionDatasource } from "../../domain";


export class UbicacionDatasourceImpl implements UbicacionDatasource {
    async insertarUbicacion(registerUbicacionDto: RegisterUbicacionDto): Promise<ResponseApi> {
        try {
            Database.insertar("INSERT INTO ubicacion set ?", [registerUbicacionDto])
            return ResponseApi.success(true, 'la ubicacion se registro correctamente')
        } catch (error) {
            return ResponseApi.error('La ubicacion no se pudo registrar')
        }
        
    }

    async obtenerUbicaciones(): Promise<ResponseApi> {
        const usuarios = await Database.listar(
            "SELECT * FROM ubicacion"
        )
        return ResponseApi.success(usuarios, 'Listado de ubicaciones exitoso')
    }

    async obtenerUbicacion(id: string): Promise<ResponseApi> {
        try {
            const ubicacion = await Database.editar("SELECT * FROM ubicacion WHERE id = ?", id)
            if (ubicacion.length <= 0) return ResponseApi.error('la ubicacion no existe')
            return ResponseApi.success(ubicacion, 'ubicacion recuperado exitosamente')
        } catch (error) {
            return ResponseApi.error('La ubicacion no se pudo encontrar')
        }
    }

    async  actualizarUbicacion(id: string, updateUbicacionDto: UpdateUbicacionDto): Promise<ResponseApi> {
        try {
            //console.log("Aqui esta el id!!!!!!!!!!!!!!!!!")
            //console.log(registerusuarioDto.id)
            const ubicacion = await Database.verificar("SELECT * FROM ubicacion WHERE id = ?", id)
            if( ubicacion.length <= 0 ) return ResponseApi.error('El ubicacion no existe')
            /*
            const resultado = await Database.actualizar("UPDATE ubicacion set ? WHERE id = ?", 
            [
                {
                    
                    "nombres": registerusuarioDto.nombres,
                    "apellidos": registerusuarioDto.apellidos,
                    "edad":registerusuarioDto.edad
                }
                , id
            ])
            */
            const resultado = await Database.actualizar("UPDATE ubicacion set ? WHERE id = ?", [updateUbicacionDto , id])
            if( !resultado ) return ResponseApi.error('No existe la ubicacion a actualizar')
            return ResponseApi.success(true, "La ubicacion se actualizo exitosamente")
        } catch (error) {
            return ResponseApi.error("La ubicacion no se pudo actualizar")
        }
    }

    async eliminarUbicacion(id: string): Promise<ResponseApi> {
        try {
            const resultado = await Database.eliminar("DELETE FROM ubicacion WHERE id = ?", id)
            if( !resultado ) return ResponseApi.error("No existe la ubicacion a eliminar")
            return ResponseApi.success(true, 'ubicacion eliminado exitosamente')
        } catch (error) {
            return ResponseApi.error('La ubicacion no se pudo eliminar')
        }
        
    }


}