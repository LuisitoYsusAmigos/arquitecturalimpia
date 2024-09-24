import { MedidorEntity, MedidorRepository, ResponseApi } from "../.."



interface GetMedidorUseCase{
    execute(options: Options): Promise<ResponseApi>
}

interface Options{
    id: string
}



export class GetMedidor implements GetMedidorUseCase{

    constructor(
        private readonly medidorRepository: MedidorRepository
    ){}
    async execute(options: Options): Promise<ResponseApi> {

        const { id } = options
        const resultado = await this.medidorRepository.obtenerMedidor( id )
        return resultado
    }

}