import { UpdateInmuebleDto,RegisterInmuebleDto, InmuebleEntity  } from "..";
import { ResponseApi } from "../responseApi/responseApi";

export abstract class InmuebleDatasource{

    abstract insertarInmueble(registerInmuebleDto: RegisterInmuebleDto): Promise<ResponseApi>

    abstract obtenerInmuebles(): Promise<ResponseApi>

    abstract obtenerInmueble(id: string): Promise<ResponseApi> 

    abstract actualizarInmueble(id: string, updateInmuebleDto: UpdateInmuebleDto): Promise<ResponseApi>

    abstract eliminarInmueble(id: string): Promise<ResponseApi>

    abstract validacionCatastro(id: string): Promise<ResponseApi>
    
}