import { UpdateLecturaReciboDto,RegisterLecturaReciboDto, LecturaReciboEntity } from "..";
import { ResponseApi } from "../responseApi/responseApi";

export abstract class LecturaReciboDatasource{

    abstract insertarLecturaRecibo(registerLecturaReciboDto: RegisterLecturaReciboDto): Promise<ResponseApi>

    abstract obtenerLecturaRecibos(): Promise<ResponseApi>

    abstract obtenerLecturaRecibo(id: string): Promise<ResponseApi> 

    abstract actualizarLecturaRecibo(id: string, updateLecturaReciboDto: UpdateLecturaReciboDto): Promise<ResponseApi>

    abstract eliminarLecturaRecibo(id: string): Promise<ResponseApi>
}