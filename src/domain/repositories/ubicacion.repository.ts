
import { RegisterUbicacionDto, UbicacionEntity,ResponseApi } from "..";


export abstract class UbicacionRepository{

    abstract insertarUbicacion(registerUbicacionDto: RegisterUbicacionDto): Promise<ResponseApi>

    abstract obtenerUbicaciones(): Promise<ResponseApi>

    abstract obtenerUbicacion(id: string): Promise<ResponseApi> 

    abstract actualizarUbicacion(id: string, registerUbicacionDto: RegisterUbicacionDto): Promise<ResponseApi>

    abstract eliminarUbicacion(id: string): Promise<ResponseApi>
}