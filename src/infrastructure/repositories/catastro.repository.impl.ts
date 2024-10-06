import { UpdateCatastroDto,RegisterCatastroDto,ResponseApi, CatastroDatasource, CatastroRepository } from "../../domain";


export class CatastroRepositoryImpl implements CatastroRepository{
    constructor(
        private readonly catastroDatasource: CatastroDatasource
    ){}
    
    insertarCatastro(registerCatastroDto: RegisterCatastroDto): Promise<ResponseApi> {
        return this.catastroDatasource.insertarCatastro( registerCatastroDto )
    }
    
    obtenerCatastros(): Promise<ResponseApi> {
        return this.catastroDatasource.obtenerCatastros()
    }
    obtenerResumenCatastro(): Promise<ResponseApi> {
        return this.catastroDatasource.obtenerResumenCatastro()
    }
    obtenerIdsRegistro(): Promise<ResponseApi> {
        return this.catastroDatasource.obtenerIdsRegistro()
    }
    
    obtenerCatastro(id: string): Promise<ResponseApi> {
        return this.catastroDatasource.obtenerCatastro(id)
    }
    obtenerMatrizRegistro(): Promise<ResponseApi> {
        return this.catastroDatasource.obtenerMatrizRegistro()
    }

    actualizarCatastro(id: string, registerCatastroDto: RegisterCatastroDto): Promise<ResponseApi> {
        return this.catastroDatasource.actualizarCatastro(id, registerCatastroDto)
    }

    eliminarCatastro(id: string): Promise<ResponseApi> {
        return this.catastroDatasource.eliminarCatastro(id)
    }
    

}