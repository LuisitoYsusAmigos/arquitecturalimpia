import { RegisterUbicacionDto, ResponseApi, UbicacionRepository } from "../..";


interface UpdateUbicacionUseCase{
    execute(options: Options, registerClienteDto: RegisterUbicacionDto ): Promise<ResponseApi>
}

interface Options{
    id: string
}

export class UpdateUbicacion implements UpdateUbicacionUseCase{

    constructor(
        private readonly UbicacionRepository: UbicacionRepository
    ){}

    execute(options: Options, RegisterUbicacionDto: RegisterUbicacionDto): Promise<ResponseApi> {
        const { id } = options
        const resultado = this.UbicacionRepository.actualizarUbicacion(id, RegisterUbicacionDto)
        return resultado
    }

}