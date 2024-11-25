import { RegisterClienteDto, ResponseApi, ClienteRepository, DeleteCliente } from "../..";



interface RegisterClienteUseCase{
    execute( registerClienteDto: RegisterClienteDto ): Promise<ResponseApi>
}

export class RegisterCliente implements RegisterClienteUseCase{

    constructor(
        private readonly clienteRepository: ClienteRepository
    ){}

    async execute(registerClienteDto: RegisterClienteDto): Promise<ResponseApi> {
        /* explicacion de Fer
        const prueba = await new DeleteCliente( this.clienteRepository).execute({id: '1000'})
        console.log()
        if (!prueba.status) return prueba
        console.log(prueba)
        throw new Error()
        */
        const resultado = await this.clienteRepository.insertarCliente(registerClienteDto)
        return resultado;
    }
}