import { ReciboEntity, ReciboRepository, ResponseApi } from "../.."



interface GetDetallesReciboUseCase{
    execute(options: Options): Promise<ResponseApi>
}

interface Options{
    id: string
}



export class GetdetallesRecibo implements GetDetallesReciboUseCase{

    constructor(
        private readonly ReciboRepository: ReciboRepository
    ){}
    async execute(options: Options): Promise<ResponseApi> {

        const { id } = options
        const resultado = await this.ReciboRepository.obtenerDetallesRecibo( id )
        return resultado
    }

}