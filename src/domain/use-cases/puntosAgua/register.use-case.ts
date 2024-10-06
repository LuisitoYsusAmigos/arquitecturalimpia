import { RegisterPuntosAguaDto, ResponseApi, PuntosAguaRepository } from "../..";



interface RegisterPuntosAguaUseCase{
    execute( registerPuntosAguaDto: RegisterPuntosAguaDto ): Promise<ResponseApi>
}

export class RegisterPuntosAgua implements RegisterPuntosAguaUseCase{

    constructor(
        private readonly puntosAguaRepository: PuntosAguaRepository
    ){}

    async execute(registerPuntosAguaDto: RegisterPuntosAguaDto): Promise<ResponseApi> {
        const resultado = await this.puntosAguaRepository.insertarPuntosAgua(registerPuntosAguaDto)
        return resultado;
    }
}