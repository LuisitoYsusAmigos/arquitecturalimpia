import { UpdateLecturaReciboDto,RegisterLecturaReciboDto,ResponseApi, LecturaReciboDatasource, LecturaReciboRepository } from "../../domain";


export class LecturaReciboRepositoryImpl implements LecturaReciboRepository{
    constructor(
        private readonly LecturaReciboDatasource: LecturaReciboDatasource
    ){}
    
    insertarLecturaRecibo(registerLecturaReciboDto: RegisterLecturaReciboDto): Promise<ResponseApi> {
        return this.LecturaReciboDatasource.insertarLecturaRecibo( registerLecturaReciboDto )
    }
    
    obtenerLecturaRecibos(): Promise<ResponseApi> {
        return this.LecturaReciboDatasource.obtenerLecturaRecibos()
    }
    
    obtenerLecturaRecibo(id: string): Promise<ResponseApi> {
        return this.LecturaReciboDatasource.obtenerLecturaRecibo(id)
    }
 
    
    actualizarLecturaRecibo(id: string, updateLecturaReciboDto: UpdateLecturaReciboDto): Promise<ResponseApi> {
        return this.LecturaReciboDatasource.actualizarLecturaRecibo(id, updateLecturaReciboDto)
    }

    eliminarLecturaRecibo(id: string): Promise<ResponseApi> {
        return this.LecturaReciboDatasource.eliminarLecturaRecibo(id)
    }
    

}