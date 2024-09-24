import { InmuebleEntity, InmuebleRepository, ResponseApi } from "../.."



interface GetInmuebleUseCase{
    execute(options: Options): Promise<ResponseApi>
}

interface Options{
    id: string
}



export class GetInmueble implements GetInmuebleUseCase{

    constructor(
        private readonly InmuebleRepository: InmuebleRepository
    ){}
    async execute(options: Options): Promise<ResponseApi> {

        const { id } = options
        const resultado = await this.InmuebleRepository.obtenerInmueble( id )
        return resultado
    }

}