
import { RegisterEgresoDto, EgresoEntity,ResponseApi } from "..";


export abstract class EgresoRepository{

    abstract insertarEgreso(registerEgresoDto: RegisterEgresoDto): Promise<ResponseApi>

    abstract obtenerEgresos(): Promise<ResponseApi>

    abstract obtenerEgreso(id: string): Promise<ResponseApi> 

    abstract obtenerMes(id:string): Promise<ResponseApi> 

    abstract actualizarEgreso(id: string, registerEgresoDto: RegisterEgresoDto): Promise<ResponseApi>

    abstract eliminarEgreso(id: string): Promise<ResponseApi>

    
}