import { UpdateMedidorDto,RegisterMedidorDto,ResponseApi, MedidorDatasource, MedidorRepository } from "../../domain";


export class MedidorRepositoryImpl implements MedidorRepository{
    constructor(
        private readonly medidorDatasource: MedidorRepository
    ){}
    
    insertarMedidor(registerMedidorDto: RegisterMedidorDto): Promise<ResponseApi> {
        return this.medidorDatasource.insertarMedidor( registerMedidorDto )
    }
    
    obtenerMedidores(): Promise<ResponseApi> {
        return this.medidorDatasource.obtenerMedidores()
    }
    
    obtenerMedidor(id: string): Promise<ResponseApi> {
        return this.medidorDatasource.obtenerMedidor(id)
    }
    
    actualizarMedidor(id: string, updateMedidorDto: UpdateMedidorDto): Promise<ResponseApi> {
        return this.medidorDatasource.actualizarMedidor(id, updateMedidorDto)
    }

    eliminarMedidor(id: string): Promise<ResponseApi> {
        return this.medidorDatasource.eliminarMedidor(id)
    }
    

}