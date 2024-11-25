import { LecturaEntity, LecturaRepository, ResponseApi } from "../.."



interface GetLecturasCatastroUseCase{
    execute(options: Options): Promise<ResponseApi>
}

interface Options{
    id_catastro: string
}



export class GetLecturasCatastro implements GetLecturasCatastroUseCase{

    constructor(
        private readonly LecturaRepository: LecturaRepository
    ){}
    async execute(options: Options): Promise<ResponseApi> {

        const { id_catastro } = options
        const resultado = await this.LecturaRepository.obtenerLecturasCatastro( id_catastro )
        return resultado
    }

}