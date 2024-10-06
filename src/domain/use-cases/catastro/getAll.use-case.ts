import { ResponseApi, CatastroEntity, CatastroRepository } from "../.."




interface GetAllCatastrosUseCase{
    execute(): Promise<ResponseApi>
}

export class GetAllCatastros implements GetAllCatastrosUseCase{

    constructor(
        private readonly catastroRepository: CatastroRepository
    ){}

    
    async execute(): Promise<ResponseApi> {

        const resultado = await this.catastroRepository.obtenerCatastros()
        return resultado
    }

}