import { UpdateLecturaDto,RegisterLecturaDto,ResponseApi, LecturaDatasource, LecturaRepository } from "../../domain";


export class LecturaRepositoryImpl implements LecturaRepository{
    constructor(
        private readonly LecturaDatasource: LecturaDatasource
    ){}
    
    insertarLectura(registerLecturaDto: RegisterLecturaDto): Promise<ResponseApi> {
        return this.LecturaDatasource.insertarLectura( registerLecturaDto )
    }
    
    obtenerLecturas(): Promise<ResponseApi> {
        return this.LecturaDatasource.obtenerLecturas()
    }

    obtenerDatosRegistroLectura(id_catastro:string): Promise<ResponseApi> {
        return this.LecturaDatasource.obtenerDatosRegistroLectura(id_catastro)
    }

    obtenerUsuariosLecturas(): Promise<ResponseApi> {
        return this.LecturaDatasource.obtenerUsuariosLecturas()
    }
    
    
    obtenerLectura(id: string): Promise<ResponseApi> {
        return this.LecturaDatasource.obtenerLectura(id)
    }

    obtenerLecturasCatastro(id_catastro: string): Promise<ResponseApi> {
        return this.LecturaDatasource.obtenerLecturasCatastro(id_catastro)
    }
    
    obtenerLecturasCatastroNoPagado(id_catastro: string): Promise<ResponseApi> {
        return this.LecturaDatasource.obtenerLecturasCatastro(id_catastro)
    }
    
    actualizarLectura(id: string, updateLecturaDto: UpdateLecturaDto): Promise<ResponseApi> {
        return this.LecturaDatasource.actualizarLectura(id, updateLecturaDto)
    }

    eliminarLectura(id: string): Promise<ResponseApi> {
        return this.LecturaDatasource.eliminarLectura(id)
    }
    

}