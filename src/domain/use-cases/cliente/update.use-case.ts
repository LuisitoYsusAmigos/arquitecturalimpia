import { ClienteRepository, RegisterClienteDto, ResponseApi, } from "../.."




interface UpdateClienteUseCase{
    execute(options: Options, registerClienteDto: RegisterClienteDto ): Promise<ResponseApi>
}

interface Options{
    id: string
}

export class UpdateCliente implements UpdateClienteUseCase{

    constructor(
        private readonly clienteRepository: ClienteRepository
    ){}

    execute(options: Options, registerClienteDto: RegisterClienteDto): Promise<ResponseApi> {
        const { id } = options
        const resultado = this.clienteRepository.actualizarCliente(id, registerClienteDto)
        return resultado
    }

}