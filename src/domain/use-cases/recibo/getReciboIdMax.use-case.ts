import { ResponseApi, ReciboEntity, ReciboRepository } from "../.."




interface GetReciboIdMaxUseCase {
    execute(): Promise<ResponseApi>
}

export class GetReciboIdMax implements GetReciboIdMaxUseCase {

    constructor(
        private readonly ReciboRepository: ReciboRepository
    ) { }


    async execute(): Promise<ResponseApi> {

        const resultado = await this.ReciboRepository.obtenerReciboIdMax()
        return resultado
    }

}