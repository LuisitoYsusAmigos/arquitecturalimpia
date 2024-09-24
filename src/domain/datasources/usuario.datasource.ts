import { UpdateUsuarioDto,RegisterUsuarioDto, UsuarioEntity } from "..";
import { ResponseApi } from "../responseApi/responseApi";

export abstract class UsuarioDatasource{

    abstract insertarUsuario(registerUsuarioDto: RegisterUsuarioDto): Promise<ResponseApi>

    abstract obtenerUsuarios(): Promise<ResponseApi>

    abstract obtenerUsuario(id: string): Promise<ResponseApi> 

    abstract actualizarUsuario(id: string, updateUsuarioDto: UpdateUsuarioDto): Promise<ResponseApi>

    abstract eliminarUsuario(id: string): Promise<ResponseApi>
}