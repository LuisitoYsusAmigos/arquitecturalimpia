import { LecturaEntity, LecturaRepository, ResponseApi } from "../.."



interface GetLecturasCatastroNopagadoUseCase{
    execute(options: Options): Promise<ResponseApi>
}

interface Options{
    id_catastro: string
}



export class GetLecturasCatastroNoPagado implements GetLecturasCatastroNopagadoUseCase{

    constructor(
        private readonly LecturaRepository: LecturaRepository
    ){}
    async execute(options: Options): Promise<ResponseApi> {

        const { id_catastro } = options
        const resultado = await this.LecturaRepository.obtenerLecturasCatastroNoPagado( id_catastro )
        return resultado
    }

}