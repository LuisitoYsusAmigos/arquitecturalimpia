import { CatastroRepository, RegisterCatastroDto, ResponseApi, UpdateCatastroDto} from "../.."




interface UpdateCatastroUseCase{
    execute(options: Options, registerCatastroDto: RegisterCatastroDto ): Promise<ResponseApi>
}

interface Options{
    id: string
}

export class UpdateCatastro implements UpdateCatastroUseCase{

    constructor(
        private readonly CatastroRepository: CatastroRepository
    ){}

    execute(options: Options, registerCatastroDto: RegisterCatastroDto): Promise<ResponseApi> {
        const { id } = options
        const resultado = this.CatastroRepository.actualizarCatastro(id, registerCatastroDto)
        return resultado
    }

}