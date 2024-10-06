import { UpdatePuntosAguaDto,RegisterPuntosAguaDto, PuntosAguaEntity  } from "..";
import { ResponseApi } from "../responseApi/responseApi";

export abstract class PuntosAguaDatasource{

    abstract insertarPuntosAgua(registerPuntosAguaDto: RegisterPuntosAguaDto): Promise<ResponseApi>

    abstract obtenerPuntosAguas(): Promise<ResponseApi>

    abstract obtenerPuntosAgua(id: string): Promise<ResponseApi> 

    abstract actualizarPuntosAgua(id: string, updatePuntosAguaDto: UpdatePuntosAguaDto): Promise<ResponseApi>

    abstract eliminarPuntosAgua(id: string): Promise<ResponseApi>
}