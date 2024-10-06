import { ResponseApi, CatastroEntity, CatastroRepository } from "../.."




interface GetResumenCatastroUseCase{
    execute(): Promise<ResponseApi>
}

export class GetResumenCatastro implements GetResumenCatastroUseCase{

    constructor(
        private readonly catastroRepository: CatastroRepository
    ){}

    
    async execute(): Promise<ResponseApi> {

        const resultado = await this.catastroRepository.obtenerResumenCatastro()
        return resultado
    }

}