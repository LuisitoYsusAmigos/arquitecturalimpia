import { ResponseApi, LecturaReciboEntity, LecturaReciboRepository } from "../.."




interface GetAllLecturaRecibosUseCase{
    execute(): Promise<ResponseApi>
}

export class GetAllLecturaRecibos implements GetAllLecturaRecibosUseCase{

    constructor(
        private readonly lecturaReciboRepository: LecturaReciboRepository
    ){}

    
    async execute(): Promise<ResponseApi> {

        const resultado = await this.lecturaReciboRepository.obtenerLecturaRecibos()
        return resultado
    }

}