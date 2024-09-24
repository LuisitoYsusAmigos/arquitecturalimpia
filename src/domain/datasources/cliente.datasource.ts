import { UpdateClienteDto,RegisterClienteDto, ClienteEntity } from "..";
import { ResponseApi } from "../responseApi/responseApi";

export abstract class ClienteDatasource{

    abstract insertarCliente(registerClienteDto: RegisterClienteDto): Promise<ResponseApi>

    abstract obtenerClientes(): Promise<ResponseApi>

    abstract obtenerCliente(id: string): Promise<ResponseApi> 

    abstract actualizarCliente(id: string, updateClienteDto: UpdateClienteDto): Promise<ResponseApi>

    abstract eliminarCliente(id: string): Promise<ResponseApi>
}