import { EgresoRepository, UpdateEgresoDto, ResponseApi, } from "../.."




interface UpdateEgresoUseCase{
    execute(options: Options, registerEgresoDto: UpdateEgresoDto ): Promise<ResponseApi>
}

interface Options{
    id: string
}

export class UpdateEgreso implements UpdateEgresoUseCase{

    constructor(
        private readonly EgresoRepository: EgresoRepository
    ){}

    execute(options: Options, updateEgresoDto: UpdateEgresoDto): Promise<ResponseApi> {
        const { id } = options
        const resultado = this.EgresoRepository.actualizarEgreso(id, updateEgresoDto)
        return resultado
    }

}