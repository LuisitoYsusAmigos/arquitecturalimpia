import { UpdateClienteDto,RegisterClienteDto,ResponseApi, ClienteDatasource, ClienteRepository } from "../../domain";


export class ClienteRepositoryImpl implements ClienteRepository{
    constructor(
        private readonly clienteDatasource: ClienteDatasource
    ){}
    
    insertarCliente(registerClienteDto: RegisterClienteDto): Promise<ResponseApi> {
        return this.clienteDatasource.insertarCliente( registerClienteDto )
    }
    
    obtenerClientes(): Promise<ResponseApi> {
        return this.clienteDatasource.obtenerClientes()
    }
    
    obtenerCliente(id: string): Promise<ResponseApi> {
        return this.clienteDatasource.obtenerCliente(id)
    }
    
    actualizarCliente(id: string, updateClienteDto: UpdateClienteDto): Promise<ResponseApi> {
        return this.clienteDatasource.actualizarCliente(id, updateClienteDto)
    }

    eliminarCliente(id: string): Promise<ResponseApi> {
        return this.clienteDatasource.eliminarCliente(id)
    }
    

}