import { ResponseApi, ClienteEntity, ClienteRepository } from "../.."




interface GetAllClientesUseCase{
    execute(): Promise<ResponseApi>
}

export class GetAllClientes implements GetAllClientesUseCase{

    constructor(
        private readonly clienteRepository: ClienteRepository
    ){}

    
    async execute(): Promise<ResponseApi> {

        const resultado = await this.clienteRepository.obtenerClientes()
        return resultado
    }

}