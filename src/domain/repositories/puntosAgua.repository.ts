
import { RegisterPuntosAguaDto, PuntosAguaEntity,ResponseApi } from "..";


export abstract class PuntosAguaRepository{

    abstract insertarPuntosAgua(registerPuntosAguaDto: RegisterPuntosAguaDto): Promise<ResponseApi>

    abstract obtenerPuntosAguas(): Promise<ResponseApi>

    abstract obtenerPuntosAgua(id: string): Promise<ResponseApi> 

    abstract actualizarPuntosAgua(id: string, registerPuntosAguaDto: RegisterPuntosAguaDto): Promise<ResponseApi>

    abstract eliminarPuntosAgua(id: string): Promise<ResponseApi>
}