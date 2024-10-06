import { RegisterCatastroDto, ResponseApi, CatastroRepository } from "../..";



interface RegisterCatastroUseCase{
    execute( registerCatastroDto: RegisterCatastroDto ): Promise<ResponseApi>
}

export class RegisterCatastro implements RegisterCatastroUseCase{

    constructor(
        private readonly CatastroRepository: CatastroRepository
    ){}

    async execute(registerCatastroDto: RegisterCatastroDto): Promise<ResponseApi> {
        const resultado = await this.CatastroRepository.insertarCatastro(registerCatastroDto)
        return resultado;
    }
}