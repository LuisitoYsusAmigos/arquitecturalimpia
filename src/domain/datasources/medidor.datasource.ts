import { UpdateMedidorDto,RegisterMedidorDto, MedidorEntity  } from "..";
import { ResponseApi } from "../responseApi/responseApi";

export abstract class MedidorDatasource{

    abstract insertarMedidor(registerMedidorDto: RegisterMedidorDto): Promise<ResponseApi>

    abstract obtenerMedidores(): Promise<ResponseApi>

    abstract obtenerMedidor(id: string): Promise<ResponseApi> 

    abstract actualizarMedidor(id: string, updateMedidorDto: UpdateMedidorDto): Promise<ResponseApi>

    abstract eliminarMedidor(id: string): Promise<ResponseApi>
}