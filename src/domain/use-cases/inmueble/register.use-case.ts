import { RegisterInmuebleDto, ResponseApi, InmuebleRepository } from "../..";



interface RegisterInmuebleUseCase{
    execute( RegisterInmuebleDto: RegisterInmuebleDto ): Promise<ResponseApi>
}

export class RegisterInmueble implements RegisterInmuebleUseCase{

    constructor(
        private readonly InmuebleRepository: InmuebleRepository
    ){}

    async execute(RegisterInmuebleDto: RegisterInmuebleDto): Promise<ResponseApi> {
        const resultado = await this.InmuebleRepository.insertarInmueble(RegisterInmuebleDto)
        return resultado;
    }
}