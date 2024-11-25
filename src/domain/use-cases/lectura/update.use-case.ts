import { LecturaRepository, RegisterLecturaDto, ResponseApi, } from "../.."




interface UpdateLecturaUseCase{
    execute(options: Options, registerLecturaDto: RegisterLecturaDto ): Promise<ResponseApi>
}

interface Options{
    id: string
}

export class UpdateLectura implements UpdateLecturaUseCase{

    constructor(
        private readonly LecturaRepository: LecturaRepository
    ){}

    execute(options: Options, registerLecturaDto: RegisterLecturaDto): Promise<ResponseApi> {
        const { id } = options
        const resultado = this.LecturaRepository.actualizarLectura(id, registerLecturaDto)
        return resultado
    }

}