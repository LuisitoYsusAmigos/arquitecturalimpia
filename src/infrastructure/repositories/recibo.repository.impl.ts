import { UpdateReciboDto,RegisterReciboDto,ResponseApi, ReciboDatasource, ReciboRepository } from "../../domain";


export class ReciboRepositoryImpl implements ReciboRepository{
    constructor(
        private readonly ReciboDatasource: ReciboDatasource
    ){}
    
    insertarRecibo(registerReciboDto: RegisterReciboDto): Promise<ResponseApi> {
        return this.ReciboDatasource.insertarRecibo( registerReciboDto )
    }
    
    obtenerRecibos(): Promise<ResponseApi> {
        return this.ReciboDatasource.obtenerRecibos()
    }

    obtenerReciboIdMax(): Promise<ResponseApi> {
        return this.ReciboDatasource.obtenerReciboIdMax()
    }
    
    obtenerRecibo(id: string): Promise<ResponseApi> {
        return this.ReciboDatasource.obtenerRecibo(id)
    }
    
    obtenerDetallesRecibo(id: string): Promise<ResponseApi> {
        return this.ReciboDatasource.obtenerDetallesRecibo(id)
    }
    actualizarRecibo(id: string, updateReciboDto: UpdateReciboDto): Promise<ResponseApi> {
        return this.ReciboDatasource.actualizarRecibo(id, updateReciboDto)
    }

    eliminarRecibo(id: string): Promise<ResponseApi> {
        return this.ReciboDatasource.eliminarRecibo(id)
    }
    

}