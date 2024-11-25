import { ClienteRepository, ResponseApi } from "../.."





interface DeleteClienteUseCase{
    execute(options: Options): Promise<ResponseApi>
}

interface Options{
    id: string
}

export class DeleteCliente implements DeleteClienteUseCase{

    constructor(
        private readonly clienteRepository: ClienteRepository
    ){}

    async execute(options: Options): Promise<ResponseApi>{
        const { id } = options

        //await new GetAllClientes(this.clienteRepository).execute(id)

        const resultado = await this.clienteRepository.eliminarCliente(id)
        return resultado
    }

}