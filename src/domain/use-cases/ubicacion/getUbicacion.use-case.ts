import { UbicacionEntity, UbicacionRepository, ResponseApi } from "../.."



interface GetUbicacionUseCase{
    execute(options: Options): Promise<ResponseApi>
}

interface Options{
    id: string
}



export class GetUbicacion implements GetUbicacionUseCase{

    constructor(
        private readonly UbicacionRepository: UbicacionRepository
    ){}
    async execute(options: Options): Promise<ResponseApi> {

        const { id } = options
        const resultado = await this.UbicacionRepository.obtenerUbicacion( id )
        return resultado
    }

}