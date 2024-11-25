import { ReciboRepository, ResponseApi } from "../.."





interface DeleteReciboUseCase{
    execute(options: Options): Promise<ResponseApi>
}

interface Options{
    id: string
}

export class DeleteRecibo implements DeleteReciboUseCase{

    constructor(
        private readonly ReciboRepository: ReciboRepository
    ){}

    async execute(options: Options): Promise<ResponseApi>{
        const { id } = options
        const resultado = await this.ReciboRepository.eliminarRecibo(id)
        return resultado
    }

}