import { RegisterLecturaReciboDto, ResponseApi, LecturaReciboRepository } from "../..";



interface RegisterLecturaReciboUseCase{
    execute( registerLecturaReciboDto: RegisterLecturaReciboDto ): Promise<ResponseApi>
}

export class RegisterLecturaRecibo implements RegisterLecturaReciboUseCase{

    constructor(
        private readonly LecturaReciboRepository: LecturaReciboRepository
    ){}

    async execute(registerLecturaReciboDto: RegisterLecturaReciboDto): Promise<ResponseApi> {
        const resultado = await this.LecturaReciboRepository.insertarLecturaRecibo(registerLecturaReciboDto)
        return resultado;
    }
}