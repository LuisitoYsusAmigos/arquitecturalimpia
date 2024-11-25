import { TarifaRepository, ResponseApi } from "../.."





interface DeleteTarifaUseCase{
    execute(options: Options): Promise<ResponseApi>
}

interface Options{
    id: string
}

export class DeleteTarifa implements DeleteTarifaUseCase{

    constructor(
        private readonly TarifaRepository: TarifaRepository
    ){}

    async execute(options: Options): Promise<ResponseApi>{
        const { id } = options
        const resultado = await this.TarifaRepository.eliminarTarifa(id)
        return resultado
    }

}