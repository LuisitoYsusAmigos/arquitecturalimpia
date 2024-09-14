import { Database } from "../../data/mysql";
import { UpdatePersonaDto,RegisterPersonaDto, ResponseApi, PersonaDatasource } from "../../domain";


export class PersonaDatasourceImpl implements PersonaDatasource {
    async insertarPersona(registerPersonaDto: RegisterPersonaDto): Promise<ResponseApi> {
        try {
            Database.insertar("INSERT INTO persona set ?", [registerPersonaDto])
            return ResponseApi.success(true, 'la persona se registro correctamente')
        } catch (error) {
            return ResponseApi.error('La persona no se pudo registrar')
        }
        
    }

    async obtenerPersonas(): Promise<ResponseApi> {
        const productos = await Database.listar(
            "SELECT * FROM persona"
        )
        return ResponseApi.success(productos, 'Listado de productos exitoso')
    }

    async obtenerPersona(id: string): Promise<ResponseApi> {
        try {
            const persona = await Database.editar("SELECT * FROM persona WHERE id = ?", id)
            if (persona.length <= 0) return ResponseApi.error('la persona no existe')
            return ResponseApi.success(persona, 'Persona recuperado exitosamente')
        } catch (error) {
            return ResponseApi.error('La persona no se pudo encontrar')
        }
    }

    async  actualizarPersona(id: string, updatePersonaDto: UpdatePersonaDto): Promise<ResponseApi> {
        try {
            //console.log("Aqui esta el id!!!!!!!!!!!!!!!!!")
            //console.log(registerPersonaDto.id)
            const persona = await Database.verificar("SELECT * FROM persona WHERE id = ?", id)
            if( persona.length <= 0 ) return ResponseApi.error('El usuario no existe')
            /*
            const resultado = await Database.actualizar("UPDATE persona set ? WHERE id = ?", 
            [
                {
                    
                    "nombres": registerPersonaDto.nombres,
                    "apellidos": registerPersonaDto.apellidos,
                    "edad":registerPersonaDto.edad
                }
                , id
            ])
            */
            const resultado = await Database.actualizar("UPDATE persona set ? WHERE id = ?", [updatePersonaDto , id])
            if( !resultado ) return ResponseApi.error('No existe la persona a actualizar')
            return ResponseApi.success(true, "La persona se actualizo exitosamente")
        } catch (error) {
            return ResponseApi.error("La persona no se pudo actualizar")
        }
    }

    async eliminarPersona(id: string): Promise<ResponseApi> {
        try {
            const resultado = await Database.eliminar("DELETE FROM persona WHERE id = ?", id)
            if( !resultado ) return ResponseApi.error("No existe la persona a eliminar")
            return ResponseApi.success(true, 'Persona eliminado exitosamente')
        } catch (error) {
            return ResponseApi.error('La persona no se pudo eliminar')
        }
        
    }


}