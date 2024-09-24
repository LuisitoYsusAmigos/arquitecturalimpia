import { ResponseApi, MedidorEntity, MedidorRepository } from "../.."




interface GetAllMedidoresUseCase{
    execute(): Promise<ResponseApi>
}

export class GetAllMedidores implements GetAllMedidoresUseCase{

    constructor(
        private readonly medidorRepository: MedidorRepository
    ){}

    
    async execute(): Promise<ResponseApi> {

        const resultado = await this.medidorRepository.obtenerMedidores()
        return resultado
    }

}