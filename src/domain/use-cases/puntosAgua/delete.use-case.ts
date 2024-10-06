import { PuntosAguaRepository, ResponseApi } from "../.."





interface DeletePuntosAguaUseCase{
    execute(options: Options): Promise<ResponseApi>
}

interface Options{
    id: string
}

export class DeletePuntosAgua implements DeletePuntosAguaUseCase{

    constructor(
        private readonly puntosAguaRepository: PuntosAguaRepository
    ){}

    async execute(options: Options): Promise<ResponseApi>{
        const { id } = options
        const resultado = await this.puntosAguaRepository.eliminarPuntosAgua(id)
        return resultado
    }

}