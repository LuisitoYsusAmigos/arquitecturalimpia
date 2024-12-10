import { UpdateEgresoDto,RegisterEgresoDto, EgresoEntity  } from "..";
import { ResponseApi } from "../responseApi/responseApi";

export abstract class EgresoDatasource{

    abstract insertarEgreso(registerEgresoDto: RegisterEgresoDto): Promise<ResponseApi>

    abstract obtenerEgresos(): Promise<ResponseApi>

    abstract obtenerEgreso(id: string): Promise<ResponseApi> 
    
    abstract obtenerMes(id:string): Promise<ResponseApi> 

    abstract actualizarEgreso(id: string, updateEgresoDto: UpdateEgresoDto): Promise<ResponseApi>

    abstract eliminarEgreso(id: string): Promise<ResponseApi>
}