
import { RegisterLecturaDto, LecturaEntity,ResponseApi } from "..";


export abstract class LecturaRepository{

    abstract insertarLectura(registerLecturaDto: RegisterLecturaDto): Promise<ResponseApi>

    abstract obtenerLecturas(): Promise<ResponseApi>

    abstract obtenerDatosRegistroLectura(id_catastro: string): Promise<ResponseApi>

    abstract obtenerLectura(id: string): Promise<ResponseApi> 

    abstract obtenerLecturasCatastro(id_catastro: string): Promise<ResponseApi>
    
    abstract obtenerLecturasCatastroNoPagado(id_catastro: string): Promise<ResponseApi>

    abstract obtenerUsuariosLecturas(): Promise<ResponseApi>  

    abstract actualizarLectura(id: string, registerLecturaDto: RegisterLecturaDto): Promise<ResponseApi>

    abstract eliminarLectura(id: string): Promise<ResponseApi>
}