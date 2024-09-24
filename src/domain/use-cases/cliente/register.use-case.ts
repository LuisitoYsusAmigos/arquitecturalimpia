import { RegisterClienteDto, ResponseApi, ClienteRepository } from "../..";



interface RegisterClienteUseCase{
    execute( registerClienteDto: RegisterClienteDto ): Promise<ResponseApi>
}

export class RegisterCliente implements RegisterClienteUseCase{

    constructor(
        private readonly clienteRepository: ClienteRepository
    ){}

    async execute(registerClienteDto: RegisterClienteDto): Promise<ResponseApi> {
        const resultado = await this.clienteRepository.insertarCliente(registerClienteDto)
        return resultado;
    }
}