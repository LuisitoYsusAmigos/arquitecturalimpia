//import { CryptoAdapter } from "../../config";
import { Autenticacion, Database } from "../../data/mysql";
import { AuthDatasource, RegisterUsuarioDto, ResponseApi } from "../../domain";


export class AuthDatasourceImpl implements AuthDatasource {

    async login(ci: string, password: string): Promise<ResponseApi> {
        // const codificador = new CryptoAdapter('Prueba')
        const usuario = await Autenticacion.VerificarUsuario('SELECT ci FROM usuario WHERE ci = ?',
            (ci))
        if (usuario.length <= 0) return ResponseApi.error('El usuario no existe')
        const usuarioPassword = await Autenticacion.VerificarUsuarioPassword('SELECT id, ci, nombre, apellidos FROM usuario WHERE ci = ? and password = ?',
            (ci), (password))
        if (usuarioPassword.length <= 0) return ResponseApi.error('La contraseña es incorrecta')
        return ResponseApi.success(usuarioPassword, 'El usuario existe')
    }
    register(userDto: RegisterUsuarioDto): Promise<ResponseApi> {
        throw new Error("Method not implemented.");
    }
}