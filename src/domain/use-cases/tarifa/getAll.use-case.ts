import { ResponseApi, TarifaEntity, TarifaRepository } from "../.."




interface GetAllTarifasUseCase{
    execute(): Promise<ResponseApi>
}

export class GetAllTarifas implements GetAllTarifasUseCase{

    constructor(
        private readonly TarifaRepository: TarifaRepository
    ){}

    
    async execute(): Promise<ResponseApi> {

        const resultado = await this.TarifaRepository.obtenerTarifas()
        return resultado
    }

}