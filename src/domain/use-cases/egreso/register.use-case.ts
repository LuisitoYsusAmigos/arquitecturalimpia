import { RegisterEgresoDto, ResponseApi, EgresoRepository } from "../..";



interface RegisterEgresoUseCase{
    execute( registerEgresoDto: RegisterEgresoDto ): Promise<ResponseApi>
}

export class RegisterEgreso implements RegisterEgresoUseCase{

    constructor(
        private readonly EgresoRepository: EgresoRepository
    ){}

    async execute(registerEgresoDto: RegisterEgresoDto): Promise<ResponseApi> {
        const resultado = await this.EgresoRepository.insertarEgreso(registerEgresoDto)
        return resultado;
    }
}