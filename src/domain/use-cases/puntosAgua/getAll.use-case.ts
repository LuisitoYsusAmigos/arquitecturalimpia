import { ResponseApi, PuntosAguaEntity, PuntosAguaRepository } from "../.."




interface GetAllPuntosAguasUseCase{
    execute(): Promise<ResponseApi>
}

export class GetAllPuntosAguas implements GetAllPuntosAguasUseCase{

    constructor(
        private readonly puntosAguaRepository: PuntosAguaRepository
    ){}

    
    async execute(): Promise<ResponseApi> {

        const resultado = await this.puntosAguaRepository.obtenerPuntosAguas()
        return resultado
    }

}