import { PuntosAguaEntity, PuntosAguaRepository, ResponseApi } from "../.."



interface GetPuntosAguaUseCase{
    execute(options: Options): Promise<ResponseApi>
}

interface Options{
    id: string
}



export class GetPuntosAgua implements GetPuntosAguaUseCase{

    constructor(
        private readonly puntosAguaRepository: PuntosAguaRepository
    ){}
    async execute(options: Options): Promise<ResponseApi> {

        const { id } = options
        const resultado = await this.puntosAguaRepository.obtenerPuntosAgua( id )
        return resultado
    }

}