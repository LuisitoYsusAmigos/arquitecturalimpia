import { Database } from "../../data/mysql";
import { UpdateInmuebleDto,RegisterInmuebleDto, ResponseApi, InmuebleDatasource } from "../../domain";


export class InmuebleDatasourceImpl implements InmuebleDatasource {
    async insertarInmueble(registerInmuebleDto: RegisterInmuebleDto): Promise<ResponseApi> {
        try {
            console.log("informacion pertinente: ",registerInmuebleDto)
            //registerInmuebleDto.servicio_recojo_basura=1
            //console.log("infomracion cambiada: ", registerInmuebleDto.servicio_recojo_basura)
            Database.insertar("INSERT INTO inmueble set ?", [registerInmuebleDto])

            return ResponseApi.success(true, 'la inmueble se registro correctamente')
        } catch (error) {
            return ResponseApi.error('La inmueble no se pudo registrar')
        }
        
    }

    async obtenerInmuebles(): Promise<ResponseApi> {
        const usuarios = await Database.listar(
            "SELECT * FROM inmueble"
        )
        return ResponseApi.success(usuarios, 'Listado de inmueblees exitoso')
    }

    async obtenerInmueble(id: string): Promise<ResponseApi> {
        try {
            const inmueble = await Database.editar("SELECT * FROM inmueble WHERE id = ?", id)
            if (inmueble.length <= 0) return ResponseApi.error('la inmueble no existe')
            return ResponseApi.success(inmueble, 'inmueble recuperado exitosamente')
        } catch (error) {
            return ResponseApi.error('La inmueble no se pudo encontrar')
        }
    }

    async  actualizarInmueble(id: string, updateInmuebleDto: UpdateInmuebleDto): Promise<ResponseApi> {
        try {
            //console.log("Aqui esta el id!!!!!!!!!!!!!!!!!")
            //console.log(registerusuarioDto.id)
            const inmueble = await Database.verificar("SELECT * FROM inmueble WHERE id = ?", id)
            if( inmueble.length <= 0 ) return ResponseApi.error('El inmueble no existe')
            /*
            const resultado = await Database.actualizar("UPDATE inmueble set ? WHERE id = ?", 
            [
                {
                    
                    "nombres": registerusuarioDto.nombres,
                    "apellidos": registerusuarioDto.apellidos,
                    "edad":registerusuarioDto.edad
                }
                , id
            ])
            */
            const resultado = await Database.actualizar("UPDATE inmueble set ? WHERE id = ?", [updateInmuebleDto , id])
            if( !resultado ) return ResponseApi.error('No existe la inmueble a actualizar')
            return ResponseApi.success(true, "La inmueble se actualizo exitosamente")
        } catch (error) {
            return ResponseApi.error("La inmueble no se pudo actualizar")
        }
    }

    async eliminarInmueble(id: string): Promise<ResponseApi> {
        try {       
            const resultado = await Database.eliminar("DELETE FROM inmueble WHERE id = ?", id)
            if( !resultado ) return ResponseApi.error("No existe la inmueble a eliminar")
            return ResponseApi.success(true, 'inmueble eliminado exitosamente')
        } catch (error) {
            return ResponseApi.error('La inmueble no se pudo eliminar')
        }
        
    }
    async validacionCatastro(id: string): Promise<ResponseApi> {
        try {
            const catrastro = await Database.editar("select * from catastro where id_inmueble=?", id)
            if (catrastro.length > 0) return ResponseApi.error('el inmubele esta en el catastro')
            return ResponseApi.success(catrastro, 'inmueble puede eliminarse')
        } catch (error) {
            return ResponseApi.error('algo salio mal con el inmueble: '+id)
        }
    }


}