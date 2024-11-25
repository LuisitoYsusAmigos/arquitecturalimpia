
import { RegisterReciboDto, ReciboEntity,ResponseApi } from "..";


export abstract class ReciboRepository{

    abstract insertarRecibo(registerReciboDto: RegisterReciboDto): Promise<ResponseApi>

    abstract obtenerRecibos(): Promise<ResponseApi>

    abstract obtenerReciboIdMax(): Promise<ResponseApi>

    abstract obtenerRecibo(id: string): Promise<ResponseApi> 

    abstract obtenerDetallesRecibo(id: string): Promise<ResponseApi> 

    abstract actualizarRecibo(id: string, registerReciboDto: RegisterReciboDto): Promise<ResponseApi>

    abstract eliminarRecibo(id: string): Promise<ResponseApi>
}