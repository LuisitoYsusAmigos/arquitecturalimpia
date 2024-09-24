import { RegisterMedidorDto, ResponseApi, MedidorRepository } from "../..";



interface RegisterMedidorUseCase{
    execute( registerMedidorDto: RegisterMedidorDto ): Promise<ResponseApi>
}

export class RegisterMedidor implements RegisterMedidorUseCase{

    constructor(
        private readonly medidorRepository: MedidorRepository
    ){}

    async execute(registerMedidorDto: RegisterMedidorDto): Promise<ResponseApi> {
        const resultado = await this.medidorRepository.insertarMedidor(registerMedidorDto)
        return resultado;
    }
}