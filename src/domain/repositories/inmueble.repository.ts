
import { RegisterInmuebleDto, InmuebleEntity,ResponseApi } from "..";


export abstract class InmuebleRepository{

    abstract insertarInmueble(registerInmuebleDto: RegisterInmuebleDto): Promise<ResponseApi>

    abstract obtenerInmuebles(): Promise<ResponseApi>

    abstract obtenerInmueble(id: string): Promise<ResponseApi> 

    abstract actualizarInmueble(id: string, registerInmuebleDto: RegisterInmuebleDto): Promise<ResponseApi>

    abstract eliminarInmueble(id: string): Promise<ResponseApi>

    
}