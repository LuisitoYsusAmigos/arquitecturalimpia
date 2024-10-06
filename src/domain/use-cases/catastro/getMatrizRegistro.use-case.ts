import { ResponseApi, CatastroEntity, CatastroRepository } from "../.."




interface GetMatrizRegistroUseCase{
    execute(): Promise<ResponseApi>
}

export class GetMatrizRegistro implements GetMatrizRegistroUseCase{

    constructor(
        private readonly catastroRepository: CatastroRepository
    ){}

    
    async execute(): Promise<ResponseApi> {

        const resultado = await this.catastroRepository.obtenerMatrizRegistro()
        return resultado
    }

}