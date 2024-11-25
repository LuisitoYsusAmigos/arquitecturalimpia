import { RegisterLecturaDto, ResponseApi, LecturaRepository } from "../..";



interface RegisterLecturaUseCase{
    execute( registerLecturaDto: RegisterLecturaDto ): Promise<ResponseApi>
}

export class RegisterLectura implements RegisterLecturaUseCase{

    constructor(
        private readonly LecturaRepository: LecturaRepository
    ){}

    async execute(registerLecturaDto: RegisterLecturaDto): Promise<ResponseApi> {
        const resultado = await this.LecturaRepository.insertarLectura(registerLecturaDto)
        return resultado;
    }
}