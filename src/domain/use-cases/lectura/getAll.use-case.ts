import { ResponseApi, LecturaEntity, LecturaRepository } from "../.."




interface GetAllLecturasUseCase{
    execute(): Promise<ResponseApi>
}

export class GetAllLecturas implements GetAllLecturasUseCase{

    constructor(
        private readonly lecturaRepository: LecturaRepository
    ){}

    
    async execute(): Promise<ResponseApi> {

        const resultado = await this.lecturaRepository.obtenerLecturas()
        return resultado
    }

}