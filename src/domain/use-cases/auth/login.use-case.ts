import { AuthRepository, ResponseApi } from "../.."
import { JwtAdapter } from "../../../config"

interface LoginUseCase{
    execute(options: Options): Promise<ResponseApi>
}

interface Options{
    ci: string,
    password: string
}

export class Login implements LoginUseCase{
    constructor(
        private readonly authRepository: AuthRepository
    ){}

    async execute(options: Options): Promise<ResponseApi>{
        const { ci, password } = options
        const respuesta = await this.authRepository.login(ci, password)
        if( !respuesta.status ) return respuesta

        const usuario = respuesta.value
        const token = await JwtAdapter.generateToken({
            id: usuario.ci,
            nombre: usuario.nombre,
            apellidos: usuario.apellidos
        })
    
        if( !token ) return ResponseApi.error('No se pudo generar el token de autenticacion')

        return ResponseApi.success({
            token: token,
            datosUsuario: usuario
        }, 'Usuario validado exitosamente')
    }

}