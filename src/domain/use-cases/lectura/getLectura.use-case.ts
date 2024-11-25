import { LecturaEntity, LecturaRepository, ResponseApi } from "../.."



interface GetLecturaUseCase{
    execute(options: Options): Promise<ResponseApi>
}

interface Options{
    id: string
}



export class GetLectura implements GetLecturaUseCase{

    constructor(
        private readonly LecturaRepository: LecturaRepository
    ){}
    async execute(options: Options): Promise<ResponseApi> {

        const { id } = options
        const resultado = await this.LecturaRepository.obtenerLectura( id )
        return resultado
    }

}