import { ResponseApi, CatastroEntity, CatastroRepository } from "../.."




interface GetAllIdRegistroUseCase{
    execute(): Promise<ResponseApi>
}

export class GetAllIdRegistro implements GetAllIdRegistroUseCase{

    constructor(
        private readonly catastroRepository: CatastroRepository
    ){}

    
    async execute(): Promise<ResponseApi> {

        const resultado = await this.catastroRepository.obtenerIdsRegistro()
        return resultado
    }

}