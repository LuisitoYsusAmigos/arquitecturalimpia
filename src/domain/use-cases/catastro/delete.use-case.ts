import { CatastroRepository, ResponseApi } from "../.."





interface DeleteCatastroUseCase{
    execute(options: Options): Promise<ResponseApi>
}

interface Options{
    id: string
}

export class DeleteCatastro implements DeleteCatastroUseCase{

    constructor(
        private readonly catastroRepository: CatastroRepository
    ){}

    async execute(options: Options): Promise<ResponseApi>{
        const { id } = options
        const resultado = await this.catastroRepository.eliminarCatastro(id)
        return resultado
    }

}