
import { RegisterTarifaDto, TarifaEntity,ResponseApi } from "..";


export abstract class TarifaRepository{

    abstract insertarTarifa(registerTarifaDto: RegisterTarifaDto): Promise<ResponseApi>

    abstract obtenerTarifas(): Promise<ResponseApi>

    abstract obtenerTarifa(id: string): Promise<ResponseApi> 

    abstract actualizarTarifa(id: string, registerTarifaDto: RegisterTarifaDto): Promise<ResponseApi>

    abstract eliminarTarifa(id: string): Promise<ResponseApi>
}