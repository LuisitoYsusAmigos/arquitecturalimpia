import { Database } from "../../data/mysql";
import { UpdateMedidorDto,RegisterMedidorDto, ResponseApi, MedidorDatasource } from "../../domain";


export class MedidorDatasourceImpl implements MedidorDatasource {
    async insertarMedidor(registerMedidorDto: RegisterMedidorDto): Promise<ResponseApi> {
        try {
            Database.insertar("INSERT INTO medidor set ?", [registerMedidorDto])
            return ResponseApi.success(true, 'el medidor se registro correctamente')
        } catch (error) {
            return ResponseApi.error('el medidor no se pudo registrar')
        }
        
    }

    async obtenerMedidores(): Promise<ResponseApi> {
        const medidores = await Database.listar(
            "SELECT * FROM medidor"
        )
        return ResponseApi.success(medidores, 'Listado de medidor exitoso')
    }

    async obtenerMedidor(id: string): Promise<ResponseApi> {
        try {
            const medidor = await Database.editar("SELECT * FROM medidor WHERE id = ?", id)
            if (medidor.length <= 0) return ResponseApi.error('la medidor no existe')
            return ResponseApi.success(medidor, 'medidor recuperado exitosamente')
        } catch (error) {
            return ResponseApi.error('La medidor no se pudo encontrar')
        }
    }

    async  actualizarMedidor(id: string, updateMedidorDto: UpdateMedidorDto): Promise<ResponseApi> {
        try {
            
            const medidor = await Database.verificar("SELECT * FROM medidor WHERE id = ?", id)
            if( medidor.length <= 0 ) return ResponseApi.error('El medidor no existe')
            /*
            const resultado = await Database.actualizar("UPDATE Medidor set ? WHERE id = ?", 
            [
                {
                    
                    "nombres": registerusuarioDto.nombres,
                    "apellidos": registerusuarioDto.apellidos,
                    "edad":registerusuarioDto.edad
                }
                , id
            ])
            */
            const resultado = await Database.actualizar("UPDATE medidor set ? WHERE id = ?", [updateMedidorDto , id])
            if( !resultado ) return ResponseApi.error('No existe el medidor a actualizar')
            return ResponseApi.success(true, "La medidor se actualizo exitosamente")
        } catch (error) {
            return ResponseApi.error("El medidor no se pudo actualizar")
        }
    }

    async eliminarMedidor(id: string): Promise<ResponseApi> {
        try {
            const resultado = await Database.eliminar("DELETE FROM medidor WHERE id = ?", id)
            if( !resultado ) return ResponseApi.error("No existe la medidor a eliminar")
            return ResponseApi.success(true, 'medidor eliminado exitosamente')
        } catch (error) {
            return ResponseApi.error('medidor no se pudo eliminar')
        }
        
    }


}