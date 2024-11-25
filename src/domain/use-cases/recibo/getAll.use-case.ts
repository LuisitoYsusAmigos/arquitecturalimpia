import { ResponseApi, ReciboEntity, ReciboRepository } from "../.."




interface GetAllRecibosUseCase {
    execute(): Promise<ResponseApi>
}

export class GetAllRecibos implements GetAllRecibosUseCase {

    constructor(
        private readonly ReciboRepository: ReciboRepository
    ) { }


    async execute(): Promise<ResponseApi> {

        const resultado = await this.ReciboRepository.obtenerRecibos()
        return resultado
    }

}