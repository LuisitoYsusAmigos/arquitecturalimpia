import { ClienteEntity, ClienteRepository, ResponseApi } from "../.."



interface GetClienteUseCase{
    execute(options: Options): Promise<ResponseApi>
}

interface Options{
    id: string
}



export class GetCliente implements GetClienteUseCase{

    constructor(
        private readonly ClienteRepository: ClienteRepository
    ){}
    async execute(options: Options): Promise<ResponseApi> {

        const { id } = options
        const resultado = await this.ClienteRepository.obtenerCliente( id )
        return resultado
    }

}