import { LecturaRepository, ResponseApi } from "../.."





interface DeleteLecturaUseCase{
    execute(options: Options): Promise<ResponseApi>
}

interface Options{
    id: string
}

export class DeleteLectura implements DeleteLecturaUseCase{

    constructor(
        private readonly lecturaRepository: LecturaRepository
    ){}

    async execute(options: Options): Promise<ResponseApi>{
        const { id } = options
        const resultado = await this.lecturaRepository.eliminarLectura(id)
        return resultado
    }

}