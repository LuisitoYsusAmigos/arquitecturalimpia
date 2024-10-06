import { UpdatePuntosAguaDto,RegisterPuntosAguaDto,ResponseApi, PuntosAguaDatasource, PuntosAguaRepository } from "../../domain";




export class PuntosAguaRepositoryImpl implements PuntosAguaRepository{
    constructor(
        private readonly puntosAguaDatasource: PuntosAguaDatasource
    ){}
    
    insertarPuntosAgua(registerPuntosAguaDto: RegisterPuntosAguaDto): Promise<ResponseApi> {
        return this.puntosAguaDatasource.insertarPuntosAgua( registerPuntosAguaDto )
    }
    
    obtenerPuntosAguas(): Promise<ResponseApi> {
        return this.puntosAguaDatasource.obtenerPuntosAguas()
    }
    
    obtenerPuntosAgua(id: string): Promise<ResponseApi> {
        return this.puntosAguaDatasource.obtenerPuntosAgua(id)
    }
    
    actualizarPuntosAgua(id: string, updatePuntosAguaDto: UpdatePuntosAguaDto): Promise<ResponseApi> {
        return this.puntosAguaDatasource.actualizarPuntosAgua(id, updatePuntosAguaDto)
    }

    eliminarPuntosAgua(id: string): Promise<ResponseApi> {
        return this.puntosAguaDatasource.eliminarPuntosAgua(id)
    }
    

}