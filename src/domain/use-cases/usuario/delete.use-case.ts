import { UsuarioRepository, ResponseApi } from "../.."





interface DeleteUsuarioUseCase{
    execute(options: Options): Promise<ResponseApi>
}

interface Options{
    id: string
}

export class DeleteUsuario implements DeleteUsuarioUseCase{

    constructor(
        private readonly usuarioRepository: UsuarioRepository
    ){}

    async execute(options: Options): Promise<ResponseApi>{
        const { id } = options
        const resultado = await this.usuarioRepository.eliminarUsuario(id)
        return resultado
    }

}