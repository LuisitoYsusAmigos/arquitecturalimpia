import { TarifaRepository, RegisterTarifaDto, ResponseApi, } from "../.."




interface UpdateTarifaUseCase{
    execute(options: Options, registerTarifaDto: RegisterTarifaDto ): Promise<ResponseApi>
}

interface Options{
    id: string
}

export class UpdateTarifa implements UpdateTarifaUseCase{

    constructor(
        private readonly TarifaRepository: TarifaRepository
    ){}

    execute(options: Options, registerTarifaDto: RegisterTarifaDto): Promise<ResponseApi> {
        const { id } = options
        const resultado = this.TarifaRepository.actualizarTarifa(id, registerTarifaDto)
        return resultado
    }

}