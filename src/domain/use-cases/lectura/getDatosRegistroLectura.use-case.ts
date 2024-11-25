import { ResponseApi, LecturaEntity, LecturaRepository } from "../.."




interface GetDatosRegistroLecturaUseCase{
    execute(options: Options): Promise<ResponseApi>
}
interface Options{
    id_catastro: string
}

export class GetDatosRegistroLectura implements GetDatosRegistroLecturaUseCase{

    constructor(
        private readonly lecturaRepository: LecturaRepository
    ){}

    
    async execute(options: Options): Promise<ResponseApi> {
        const { id_catastro } = options
        const resultado = await this.lecturaRepository.obtenerDatosRegistroLectura(id_catastro)
        return resultado
    }

}
//id_catastro: string