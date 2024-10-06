
import { RegisterCatastroDto,UpdateCatastroDto, CatastroEntity,ResponseApi } from "..";


export abstract class CatastroRepository{

    abstract insertarCatastro(registerCatastroDto: RegisterCatastroDto): Promise<ResponseApi>

    abstract obtenerCatastros(): Promise<ResponseApi>

    abstract obtenerCatastro(id: string): Promise<ResponseApi> 

    abstract actualizarCatastro(id: string, registerCatastroDto: RegisterCatastroDto): Promise<ResponseApi>

    abstract eliminarCatastro(id: string): Promise<ResponseApi>

    abstract obtenerMatrizRegistro(): Promise<ResponseApi>

    abstract obtenerIdsRegistro(): Promise<ResponseApi>

    abstract obtenerResumenCatastro(): Promise<ResponseApi>
    
    
    
}