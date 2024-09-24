import { Database } from "../../data/mysql";
import { UpdateUsuarioDto,RegisterUsuarioDto, ResponseApi, UsuarioDatasource } from "../../domain";


export class UsuarioDatasourceImpl implements UsuarioDatasource {
    async insertarUsuario(registerUsuarioDto: RegisterUsuarioDto): Promise<ResponseApi> {
        try {
            Database.insertar("INSERT INTO usuario set ?", [registerUsuarioDto])
            return ResponseApi.success(true, 'la usuario se registro correctamente')
        } catch (error) {
            return ResponseApi.error('La usuario no se pudo registrar')
        }
        
    }

    async obtenerUsuarios(): Promise<ResponseApi> {
        const usuarios = await Database.listar(
            "SELECT * FROM usuario"
        )
        return ResponseApi.success(usuarios, 'Listado de usuarios exitoso')
    }

    async obtenerUsuario(id: string): Promise<ResponseApi> {
        try {
            const usuario = await Database.editar("SELECT * FROM usuario WHERE id = ?", id)
            if (usuario.length <= 0) return ResponseApi.error('la usuario no existe')
            return ResponseApi.success(usuario, 'usuario recuperado exitosamente')
        } catch (error) {
            return ResponseApi.error('La usuario no se pudo encontrar')
        }
    }

    async  actualizarUsuario(id: string, updateUsuarioDto: UpdateUsuarioDto): Promise<ResponseApi> {
        try {
            //console.log("Aqui esta el id!!!!!!!!!!!!!!!!!")
            //console.log(registerusuarioDto.id)
            const usuario = await Database.verificar("SELECT * FROM usuario WHERE id = ?", id)
            if( usuario.length <= 0 ) return ResponseApi.error('El usuario no existe')
            /*
            const resultado = await Database.actualizar("UPDATE usuario set ? WHERE id = ?", 
            [
                {
                    
                    "nombres": registerusuarioDto.nombres,
                    "apellidos": registerusuarioDto.apellidos,
                    "edad":registerusuarioDto.edad
                }
                , id
            ])
            */
            const resultado = await Database.actualizar("UPDATE usuario set ? WHERE id = ?", [updateUsuarioDto , id])
            if( !resultado ) return ResponseApi.error('No existe la usuario a actualizar')
            return ResponseApi.success(true, "La usuario se actualizo exitosamente")
        } catch (error) {
            return ResponseApi.error("La usuario no se pudo actualizar")
        }
    }

    async eliminarUsuario(id: string): Promise<ResponseApi> {
        try {
            const resultado = await Database.eliminar("DELETE FROM usuario WHERE id = ?", id)
            if( !resultado ) return ResponseApi.error("No existe la usuario a eliminar")
            return ResponseApi.success(true, 'usuario eliminado exitosamente')
        } catch (error) {
            return ResponseApi.error('La usuario no se pudo eliminar')
        }
        
    }


}