import { ReciboEntity, ReciboRepository, ResponseApi } from "../.."



interface GetReciboUseCase{
    execute(options: Options): Promise<ResponseApi>
}

interface Options{
    id: string
}



export class GetRecibo implements GetReciboUseCase{

    constructor(
        private readonly ReciboRepository: ReciboRepository
    ){}
    async execute(options: Options): Promise<ResponseApi> {

        const { id } = options
        const resultado = await this.ReciboRepository.obtenerRecibo( id )
        return resultado
    }

}