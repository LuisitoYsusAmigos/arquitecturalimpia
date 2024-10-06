import { CatastroEntity, CatastroRepository, ResponseApi } from "../.."



interface GetCatastroUseCase{
    execute(options: Options): Promise<ResponseApi>
}

interface Options{
    id: string
}



export class GetCatastro implements GetCatastroUseCase{

    constructor(
        private readonly CatastroRepository: CatastroRepository
    ){}
    async execute(options: Options): Promise<ResponseApi> {

        const { id } = options
        const resultado = await this.CatastroRepository.obtenerCatastro( id )
        return resultado
    }

}