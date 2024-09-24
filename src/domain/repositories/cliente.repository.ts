
import { RegisterClienteDto, ClienteEntity,ResponseApi } from "..";


export abstract class ClienteRepository{

    abstract insertarCliente(registerClienteDto: RegisterClienteDto): Promise<ResponseApi>

    abstract obtenerClientes(): Promise<ResponseApi>

    abstract obtenerCliente(id: string): Promise<ResponseApi> 

    abstract actualizarCliente(id: string, registerClienteDto: RegisterClienteDto): Promise<ResponseApi>

    abstract eliminarCliente(id: string): Promise<ResponseApi>
}