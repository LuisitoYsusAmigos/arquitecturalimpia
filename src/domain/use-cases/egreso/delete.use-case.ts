import { EgresoRepository, ResponseApi } from "../.."





interface DeleteEgresoUseCase{
    execute(options: Options): Promise<ResponseApi>
}

interface Options{
    id: string
}

export class DeleteEgreso implements DeleteEgresoUseCase{

    constructor(
        private readonly EgresoRepository: EgresoRepository
    ){}

    async execute(options: Options): Promise<ResponseApi>{
        const { id } = options
        const resultado = await this.EgresoRepository.eliminarEgreso(id)
        return resultado
    }

}