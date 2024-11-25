import { LecturaReciboRepository, RegisterLecturaReciboDto, ResponseApi, } from "../.."




interface UpdateLecturaReciboUseCase{
    execute(options: Options, registerLecturaReciboDto: RegisterLecturaReciboDto ): Promise<ResponseApi>
}

interface Options{
    id: string,

}

export class UpdateLecturaRecibo implements UpdateLecturaReciboUseCase{

    constructor(
        private readonly LecturaReciboRepository: LecturaReciboRepository
    ){}

    execute(options: Options, registerLecturaReciboDto: RegisterLecturaReciboDto): Promise<ResponseApi> {
        const { id } = options
        const resultado = this.LecturaReciboRepository.actualizarLecturaRecibo(id, registerLecturaReciboDto)
        return resultado
    }

}