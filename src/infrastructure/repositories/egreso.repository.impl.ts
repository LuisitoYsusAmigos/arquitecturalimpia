import { UpdateEgresoDto,RegisterEgresoDto,ResponseApi, EgresoDatasource, EgresoRepository } from "../../domain";


export class EgresoRepositoryImpl implements EgresoRepository{
    constructor(
        private readonly EgresoDatasource: EgresoRepository
    ){}
    
    insertarEgreso(registerEgresoDto: RegisterEgresoDto): Promise<ResponseApi> {
        return this.EgresoDatasource.insertarEgreso( registerEgresoDto )
    }
    
    obtenerEgresos(): Promise<ResponseApi> {
        return this.EgresoDatasource.obtenerEgresos()
    }
    
    obtenerEgreso(id: string): Promise<ResponseApi> {
        return this.EgresoDatasource.obtenerEgreso(id)
    }

    obtenerMes(id: string): Promise<ResponseApi> {
        return this.EgresoDatasource.obtenerMes(id)
    }
    
    actualizarEgreso(id: string, updateEgresoDto: UpdateEgresoDto): Promise<ResponseApi> {
        return this.EgresoDatasource.actualizarEgreso(id, updateEgresoDto)
    }

    eliminarEgreso(id: string): Promise<ResponseApi> {
        return this.EgresoDatasource.eliminarEgreso(id)
    }
    

}