import { LecturaReciboRepository, ResponseApi } from "../.."





interface DeleteLecturaReciboUseCase{
    execute(options: Options): Promise<ResponseApi>
}

interface Options{
    id: string
}

export class DeleteLecturaRecibo implements DeleteLecturaReciboUseCase{

    constructor(
        private readonly lecturaReciboRepository: LecturaReciboRepository
    ){}

    async execute(options: Options): Promise<ResponseApi>{
        const { id } = options
        const resultado = await this.lecturaReciboRepository.eliminarLecturaRecibo(id)
        return resultado
    }

}