
import { RegisterLecturaReciboDto, LecturaReciboEntity,ResponseApi } from "..";


export abstract class LecturaReciboRepository{

    abstract insertarLecturaRecibo(registerLecturaReciboDto: RegisterLecturaReciboDto): Promise<ResponseApi>

    abstract obtenerLecturaRecibos(): Promise<ResponseApi>

    abstract obtenerLecturaRecibo(id: string): Promise<ResponseApi> 

    abstract actualizarLecturaRecibo(id: string, registerLecturaReciboDto: RegisterLecturaReciboDto): Promise<ResponseApi>

    abstract eliminarLecturaRecibo(id: string): Promise<ResponseApi>
}