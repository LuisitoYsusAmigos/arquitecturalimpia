import { UsuarioRepository, RegisterUsuarioDto, ResponseApi, } from "../.."




interface UpdateUsuarioUseCase{
    execute(options: Options, registerUsuarioDto: RegisterUsuarioDto ): Promise<ResponseApi>
}

interface Options{
    id: string
}

export class UpdateUsuario implements UpdateUsuarioUseCase{

    constructor(
        private readonly usuarioRepository: UsuarioRepository
    ){}

    execute(options: Options, registerUsuarioDto: RegisterUsuarioDto): Promise<ResponseApi> {
        const { id } = options
        const resultado = this.usuarioRepository.actualizarUsuario(id, registerUsuarioDto)
        return resultado
    }

}