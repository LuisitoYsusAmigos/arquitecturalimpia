import { EgresoEntity, EgresoRepository, ResponseApi } from "../.."



interface GetEgresoUseCase{
    execute(options: Options): Promise<ResponseApi>
}

interface Options{
    id: string
}



export class GetEgreso implements GetEgresoUseCase{

    constructor(
        private readonly EgresoRepository: EgresoRepository
    ){}
    async execute(options: Options): Promise<ResponseApi> {

        const { id } = options
        const resultado = await this.EgresoRepository.obtenerEgreso( id )
        return resultado
    }

}