import { TarifaEntity, TarifaRepository, ResponseApi } from "../.."



interface GetTarifaUseCase{
    execute(options: Options): Promise<ResponseApi>
}

interface Options{
    id: string
}



export class GetTarifa implements GetTarifaUseCase{

    constructor(
        private readonly TarifaRepository: TarifaRepository
    ){}
    async execute(options: Options): Promise<ResponseApi> {

        const { id } = options
        const resultado = await this.TarifaRepository.obtenerTarifa( id )
        return resultado
    }

}