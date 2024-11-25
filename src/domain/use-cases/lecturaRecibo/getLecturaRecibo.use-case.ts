import { LecturaReciboEntity, LecturaReciboRepository, ResponseApi } from "../.."



interface GetLecturaReciboUseCase{
    execute(options: Options): Promise<ResponseApi>
}

interface Options{
    id: string,
}



export class GetLecturaRecibo implements GetLecturaReciboUseCase{

    constructor(
        private readonly LecturaReciboRepository: LecturaReciboRepository
    ){}
    async execute(options: Options): Promise<ResponseApi> {

        const { id } = options
        const resultado = await this.LecturaReciboRepository.obtenerLecturaRecibo( id )
        return resultado
    }

}