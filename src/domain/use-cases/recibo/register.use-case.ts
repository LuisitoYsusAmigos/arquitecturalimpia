import { RegisterReciboDto, ResponseApi, ReciboRepository } from "../..";



interface RegisterReciboUseCase{
    execute( RegisterReciboDto: RegisterReciboDto ): Promise<ResponseApi>
}

export class RegisterRecibo implements RegisterReciboUseCase{

    constructor(
        private readonly ReciboRepository: ReciboRepository
    ){}

    async execute(RegisterReciboDto: RegisterReciboDto): Promise<ResponseApi> {
        const resultado = await this.ReciboRepository.insertarRecibo(RegisterReciboDto)
        return resultado;
    }
}