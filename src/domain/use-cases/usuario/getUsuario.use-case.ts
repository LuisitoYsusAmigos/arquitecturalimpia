import { UsuarioEntity, UsuarioRepository, ResponseApi } from "../.."



interface GetUsuarioUseCase{
    execute(options: Options): Promise<ResponseApi>
}

interface Options{
    id: string
}



export class GetUsuario implements GetUsuarioUseCase{

    constructor(
        private readonly UsuarioRepository: UsuarioRepository
    ){}
    async execute(options: Options): Promise<ResponseApi> {

        const { id } = options
        const resultado = await this.UsuarioRepository.obtenerUsuario( id )
        return resultado
    }

}