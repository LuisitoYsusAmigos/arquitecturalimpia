import { RegisterUsuarioDto, ResponseApi, UsuarioRepository } from "../..";



interface RegisterUsuarioUseCase{
    execute( registerUsuarioDto: RegisterUsuarioDto ): Promise<ResponseApi>
}

export class RegisterUsuario implements RegisterUsuarioUseCase{

    constructor(
        private readonly usuarioRepository: UsuarioRepository
    ){}

    async execute(registerUsuarioDto: RegisterUsuarioDto): Promise<ResponseApi> {
        const resultado = await this.usuarioRepository.insertarUsuario(registerUsuarioDto)
        return resultado;
    }
}