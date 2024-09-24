import { UpdateUbicacionDto,RegisterUbicacionDto, UbicacionEntity } from "..";
import { ResponseApi } from "../responseApi/responseApi";

export abstract class UbicacionDatasource{

    abstract insertarUbicacion(registerUbicacionDto: RegisterUbicacionDto): Promise<ResponseApi>

    abstract obtenerUbicaciones(): Promise<ResponseApi>

    abstract obtenerUbicacion(id: string): Promise<ResponseApi> 

    abstract actualizarUbicacion(id: string, updateUbicacionDto: UpdateUbicacionDto): Promise<ResponseApi>

    abstract eliminarUbicacion(id: string): Promise<ResponseApi>
}