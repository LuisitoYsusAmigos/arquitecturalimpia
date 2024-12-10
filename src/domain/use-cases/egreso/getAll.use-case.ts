import { ResponseApi, EgresoEntity, EgresoRepository } from "../.."




interface GetAllEgresosUseCase{
    execute(): Promise<ResponseApi>
}

export class GetAllEgresos implements GetAllEgresosUseCase{

    constructor(
        private readonly EgresoRepository: EgresoRepository
    ){}

    
    async execute(): Promise<ResponseApi> {

        const resultado = await this.EgresoRepository.obtenerEgresos()
        return resultado
    }

}