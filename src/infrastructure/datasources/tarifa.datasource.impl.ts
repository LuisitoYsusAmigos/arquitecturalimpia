import { Database } from "../../data/mysql";
import { UpdateTarifaDto,RegisterTarifaDto, ResponseApi, TarifaDatasource } from "../../domain";


export class TarifaDatasourceImpl implements TarifaDatasource {
    async insertarTarifa(registerTarifaDto: RegisterTarifaDto): Promise<ResponseApi> {
        try {
            Database.insertar("INSERT INTO tarifa set ?", [registerTarifaDto])
            return ResponseApi.success(true, 'la Tarifa se registro correctamente')
        } catch (error) {
            return ResponseApi.error('La Tarifa no se pudo registrar')
        }
        
    }

    async obtenerTarifas(): Promise<ResponseApi> {
        const Tarifas = await Database.listar(
            "SELECT * FROM tarifa ORDER BY id DESC"
        )
        return ResponseApi.success(Tarifas, 'Listado de Tarifas exitoso')
    }

    async obtenerTarifa(id: string): Promise<ResponseApi> {
        try {
            const Tarifa = await Database.editar("SELECT * FROM tarifa WHERE id = ?", id)
            if (Tarifa.length <= 0) return ResponseApi.error('la Tarifa no existe')
            return ResponseApi.success(Tarifa, 'Tarifa recuperado exitosamente')
        } catch (error) {
            return ResponseApi.error('La Tarifa no se pudo encontrar')
        }
    }

    async  actualizarTarifa(id: string, updateTarifaDto: UpdateTarifaDto): Promise<ResponseApi> {
        try {
            //console.log("Aqui esta el id!!!!!!!!!!!!!!!!!")
            //console.log(registerTarifaDto.id)
            const Tarifa = await Database.verificar("SELECT * FROM tarifa WHERE id = ?", id)
            if( Tarifa.length <= 0 ) return ResponseApi.error('El Tarifa no existe')
            /*
            const resultado = await Database.actualizar("UPDATE Tarifa set ? WHERE id = ?", 
            [
                {
                    
                    "nombres": registerTarifaDto.nombres,
                    "apellidos": registerTarifaDto.apellidos,
                    "edad":registerTarifaDto.edad
                }
                , id
            ])
            */
            const resultado = await Database.actualizar("UPDATE tarifa set ? WHERE id = ?", [updateTarifaDto , id])
            if( !resultado ) return ResponseApi.error('No existe la Tarifa a actualizar')
            return ResponseApi.success(true, "La Tarifa se actualizo exitosamente")
        } catch (error) {
            return ResponseApi.error("La Tarifa no se pudo actualizar")
        }
    }

    async eliminarTarifa(id: string): Promise<ResponseApi> {
        try {
            const resultado = await Database.eliminar("DELETE FROM tarifa WHERE id = ?", id)
            if( !resultado ) return ResponseApi.error("No existe la Tarifa a eliminar")
            return ResponseApi.success(true, 'Tarifa eliminado exitosamente')
        } catch (error) {
            return ResponseApi.error('La Tarifa no se pudo eliminar')
        }
        
    }


}