import { PuntosAguaRepository, UpdatePuntosAguaDto, ResponseApi, } from "../.."




interface UpdatePuntosAguaUseCase{
    execute(options: Options, updatePuntosAguaDto: UpdatePuntosAguaDto ): Promise<ResponseApi>
}

interface Options{
    id: string
}

export class UpdatePuntosAgua implements UpdatePuntosAguaUseCase{

    constructor(
        private readonly puntosAguaRepository: PuntosAguaRepository
    ){}

    execute(options: Options, updatePuntosAguaDto: UpdatePuntosAguaDto): Promise<ResponseApi> {
        const { id } = options
        const resultado = this.puntosAguaRepository.actualizarPuntosAgua(id, updatePuntosAguaDto)
        return resultado
    }

}