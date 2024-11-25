import { ResponseApi, LecturaEntity, LecturaRepository } from "../.."




interface GetAllUsuariosLecturasUseCase{
    execute(): Promise<ResponseApi>
}

export class GetAllUsuariosLecturas implements GetAllUsuariosLecturasUseCase{

    constructor(
        private readonly lecturaRepository: LecturaRepository
    ){}

    
    async execute(): Promise<ResponseApi> {

        const resultado = await this.lecturaRepository.obtenerUsuariosLecturas()
        return resultado
    }

}