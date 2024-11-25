import { UpdateTarifaDto,RegisterTarifaDto, TarifaEntity } from "..";
import { ResponseApi } from "../responseApi/responseApi";

export abstract class TarifaDatasource{

    abstract insertarTarifa(registerTarifaDto: RegisterTarifaDto): Promise<ResponseApi>

    abstract obtenerTarifas(): Promise<ResponseApi>

    abstract obtenerTarifa(id: string): Promise<ResponseApi> 

    abstract actualizarTarifa(id: string, updateTarifaDto: UpdateTarifaDto): Promise<ResponseApi>

    abstract eliminarTarifa(id: string): Promise<ResponseApi>
}