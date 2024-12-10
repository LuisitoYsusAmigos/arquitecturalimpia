import { EgresoEntity, EgresoRepository, ResponseApi } from "../.."



interface GetMonthUseCase{
    execute(options: Options): Promise<ResponseApi>
}

interface Options{
    id: string
}



export class GetMonth implements GetMonthUseCase{

    constructor(
        private readonly EgresoRepository: EgresoRepository
    ){}
    async execute(options: Options): Promise<ResponseApi> {

        const { id } = options
        const resultado = await this.EgresoRepository.obtenerMes( id )
        return resultado
    }

}