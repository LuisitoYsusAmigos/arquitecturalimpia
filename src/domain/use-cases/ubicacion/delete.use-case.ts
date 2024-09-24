import { UbicacionRepository, ResponseApi } from "../.."





interface DeleteUbicacionUseCase{
    execute(options: Options): Promise<ResponseApi>
}

interface Options{
    id: string
}

export class DeleteUbicacion implements DeleteUbicacionUseCase{

    constructor(
        private readonly ubicacionRepository: UbicacionRepository
    ){}

    async execute(options: Options): Promise<ResponseApi>{
        const { id } = options
        const resultado = await this.ubicacionRepository.eliminarUbicacion(id)
        return resultado
    }

}