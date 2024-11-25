import { ReciboRepository, RegisterReciboDto, ResponseApi, } from "../.."




interface UpdateReciboUseCase{
    execute(options: Options, registerReciboDto: RegisterReciboDto ): Promise<ResponseApi>
}

interface Options{
    id: string
}

export class UpdateRecibo implements UpdateReciboUseCase{

    constructor(
        private readonly ReciboRepository: ReciboRepository
    ){}

    execute(options: Options, registerReciboDto: RegisterReciboDto): Promise<ResponseApi> {
        const { id } = options
        const resultado = this.ReciboRepository.actualizarRecibo(id, registerReciboDto)
        return resultado
    }

}