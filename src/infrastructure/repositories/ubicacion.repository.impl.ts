import { UpdateUbicacionDto,RegisterUbicacionDto,ResponseApi, UbicacionDatasource, UbicacionRepository } from "../../domain";


export class UbicacionRepositoryImpl implements UbicacionRepository{
    constructor(
        private readonly ubicacionDatasource: UbicacionRepository
    ){}
    
    insertarUbicacion(registerUbicacionDto: RegisterUbicacionDto): Promise<ResponseApi> {
        return this.ubicacionDatasource.insertarUbicacion( registerUbicacionDto )
    }
    
    obtenerUbicaciones(): Promise<ResponseApi> {
        return this.ubicacionDatasource.obtenerUbicaciones()
    }
    
    obtenerUbicacion(id: string): Promise<ResponseApi> {
        return this.ubicacionDatasource.obtenerUbicacion(id)
    }
    
    actualizarUbicacion(id: string, updateUbicacionDto: UpdateUbicacionDto): Promise<ResponseApi> {
        return this.ubicacionDatasource.actualizarUbicacion(id, updateUbicacionDto)
    }

    eliminarUbicacion(id: string): Promise<ResponseApi> {
        return this.ubicacionDatasource.eliminarUbicacion(id)
    }
    

}