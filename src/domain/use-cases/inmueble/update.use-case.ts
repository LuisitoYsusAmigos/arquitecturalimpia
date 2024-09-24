import { RegisterInmuebleDto, ResponseApi, InmuebleRepository } from "../..";


interface UpdateInmuebleUseCase{
    execute(options: Options, registerClienteDto: RegisterInmuebleDto ): Promise<ResponseApi>
}

interface Options{
    id: string
}

export class UpdateInmueble implements UpdateInmuebleUseCase{

    constructor(
        private readonly InmuebleRepository: InmuebleRepository
    ){}

    execute(options: Options, RegisterInmuebleDto: RegisterInmuebleDto): Promise<ResponseApi> {
        const { id } = options
        const resultado = this.InmuebleRepository.actualizarInmueble(id, RegisterInmuebleDto)
        return resultado
    }

}