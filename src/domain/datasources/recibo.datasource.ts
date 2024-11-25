import { UpdateReciboDto,RegisterReciboDto, ReciboEntity } from "..";
import { ResponseApi } from "../responseApi/responseApi";

export abstract class ReciboDatasource{

    abstract insertarRecibo(registerReciboDto: RegisterReciboDto): Promise<ResponseApi>

    abstract obtenerRecibos(): Promise<ResponseApi>

    abstract obtenerReciboIdMax(): Promise<ResponseApi>

    abstract obtenerRecibo(id: string): Promise<ResponseApi>
    
    abstract obtenerDetallesRecibo(id: string): Promise<ResponseApi>  

    abstract actualizarRecibo(id: string, updateReciboDto: UpdateReciboDto): Promise<ResponseApi>

    abstract eliminarRecibo(id: string): Promise<ResponseApi>
}