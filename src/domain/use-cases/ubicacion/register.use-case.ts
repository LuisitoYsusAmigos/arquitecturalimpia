import { RegisterUbicacionDto, ResponseApi, UbicacionRepository } from "../..";



interface RegisterUbicacionUseCase{
    execute( RegisterUbicacionDto: RegisterUbicacionDto ): Promise<ResponseApi>
}

export class RegisterUbicacion implements RegisterUbicacionUseCase{

    constructor(
        private readonly UbicacionRepository: UbicacionRepository
    ){}

    async execute(RegisterUbicacionDto: RegisterUbicacionDto): Promise<ResponseApi> {
        const resultado = await this.UbicacionRepository.insertarUbicacion(RegisterUbicacionDto)
        return resultado;
    }
}