import { UpdateTarifaDto,RegisterTarifaDto,ResponseApi, TarifaDatasource, TarifaRepository } from "../../domain";


export class TarifaRepositoryImpl implements TarifaRepository{
    constructor(
        private readonly TarifaDatasource: TarifaDatasource
    ){}
    
    insertarTarifa(registerTarifaDto: RegisterTarifaDto): Promise<ResponseApi> {
        return this.TarifaDatasource.insertarTarifa( registerTarifaDto )
    }
    
    obtenerTarifas(): Promise<ResponseApi> {
        return this.TarifaDatasource.obtenerTarifas()
    }
    
    obtenerTarifa(id: string): Promise<ResponseApi> {
        return this.TarifaDatasource.obtenerTarifa(id)
    }
    
    actualizarTarifa(id: string, updateTarifaDto: UpdateTarifaDto): Promise<ResponseApi> {
        return this.TarifaDatasource.actualizarTarifa(id, updateTarifaDto)
    }

    eliminarTarifa(id: string): Promise<ResponseApi> {
        return this.TarifaDatasource.eliminarTarifa(id)
    }
    

}