
import { RegisterUsuarioDto, UsuarioEntity,ResponseApi } from "..";


export abstract class UsuarioRepository{

    abstract insertarUsuario(registerUsuarioDto: RegisterUsuarioDto): Promise<ResponseApi>

    abstract obtenerUsuarios(): Promise<ResponseApi>

    abstract obtenerUsuario(id: string): Promise<ResponseApi> 

    abstract actualizarUsuario(id: string, registerUsuarioDto: RegisterUsuarioDto): Promise<ResponseApi>

    abstract eliminarUsuario(id: string): Promise<ResponseApi>
}