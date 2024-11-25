import { RegisterTarifaDto, ResponseApi, TarifaRepository } from "../..";



interface RegisterTarifaUseCase{
    execute( registerTarifaDto: RegisterTarifaDto ): Promise<ResponseApi>
}

export class RegisterTarifa implements RegisterTarifaUseCase{

    constructor(
        private readonly TarifaRepository: TarifaRepository
    ){}

    async execute(registerTarifaDto: RegisterTarifaDto): Promise<ResponseApi> {
        const resultado = await this.TarifaRepository.insertarTarifa(registerTarifaDto)
        return resultado;
    }
}