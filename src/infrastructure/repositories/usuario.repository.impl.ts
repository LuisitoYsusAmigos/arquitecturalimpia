import { UpdateUsuarioDto,RegisterUsuarioDto,ResponseApi, UsuarioDatasource, UsuarioRepository } from "../../domain";




export class UsuarioRepositoryImpl implements UsuarioRepository{
    constructor(
        private readonly usuarioDatasource: UsuarioDatasource
    ){}
    
    insertarUsuario(registerUsuarioDto: RegisterUsuarioDto): Promise<ResponseApi> {
        return this.usuarioDatasource.insertarUsuario( registerUsuarioDto )
    }
    
    obtenerUsuarios(): Promise<ResponseApi> {
        return this.usuarioDatasource.obtenerUsuarios()
    }
    
    obtenerUsuario(id: string): Promise<ResponseApi> {
        return this.usuarioDatasource.obtenerUsuario(id)
    }
    
    actualizarUsuario(id: string, updateUsuarioDto: UpdateUsuarioDto): Promise<ResponseApi> {
        return this.usuarioDatasource.actualizarUsuario(id, updateUsuarioDto)
    }

    eliminarUsuario(id: string): Promise<ResponseApi> {
        return this.usuarioDatasource.eliminarUsuario(id)
    }
    

}