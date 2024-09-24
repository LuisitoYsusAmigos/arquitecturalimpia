import { ResponseApi, UsuarioEntity, UsuarioRepository } from "../.."




interface GetAllUsuariosUseCase{
    execute(): Promise<ResponseApi>
}

export class GetAllUsuarios implements GetAllUsuariosUseCase{

    constructor(
        private readonly usuarioRepository: UsuarioRepository
    ){}

    
    async execute(): Promise<ResponseApi> {

        const resultado = await this.usuarioRepository.obtenerUsuarios()
        return resultado
    }

}