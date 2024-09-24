import { UpdateInmuebleDto,RegisterInmuebleDto,ResponseApi, InmuebleDatasource, InmuebleRepository } from "../../domain";


export class InmuebleRepositoryImpl implements InmuebleRepository{
    constructor(
        private readonly inmuebleDatasource: InmuebleRepository
    ){}
    
    insertarInmueble(registerInmuebleDto: UpdateInmuebleDto): Promise<ResponseApi> {
        return this.inmuebleDatasource.insertarInmueble( registerInmuebleDto )
    }
    
    obtenerInmuebles(): Promise<ResponseApi> {
        return this.inmuebleDatasource.obtenerInmuebles()
    }
    
    obtenerInmueble(id: string): Promise<ResponseApi> {
        return this.inmuebleDatasource.obtenerInmueble(id)
    }
    
    actualizarInmueble(id: string, updateInmuebleDto: UpdateInmuebleDto): Promise<ResponseApi> {
        return this.inmuebleDatasource.actualizarInmueble(id, updateInmuebleDto)
    }

    eliminarInmueble(id: string): Promise<ResponseApi> {
        return this.inmuebleDatasource.eliminarInmueble(id)
    }
/*
    validacionCatastro(id: string): Promise<ResponseApi> {
        return this.inmuebleDatasource.validacionCatastro(id)
    }
        */
    

}