import { UpdateLecturaDto,RegisterLecturaDto, LecturaEntity } from "..";
import { ResponseApi } from "../responseApi/responseApi";

export abstract class LecturaDatasource{

    abstract insertarLectura(registerLecturaDto: RegisterLecturaDto): Promise<ResponseApi>

    abstract obtenerLecturas(): Promise<ResponseApi>

    abstract obtenerDatosRegistroLectura(id_catastro: string): Promise<ResponseApi>

    abstract obtenerUsuariosLecturas(): Promise<ResponseApi>

    abstract obtenerLectura(id: string): Promise<ResponseApi>

    abstract obtenerLecturasCatastro(id_catastro: string): Promise<ResponseApi>
    
    abstract obtenerLecturasCatastroNoPagado(id_catastro: string): Promise<ResponseApi>

    abstract actualizarLectura(id: string, updateLecturaDto: UpdateLecturaDto): Promise<ResponseApi>

    abstract eliminarLectura(id: string): Promise<ResponseApi>
}