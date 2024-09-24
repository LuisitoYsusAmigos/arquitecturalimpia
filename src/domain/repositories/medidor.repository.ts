
import { RegisterMedidorDto, MedidorEntity,ResponseApi } from "..";


export abstract class MedidorRepository{

    abstract insertarMedidor(registerMedidorDto: RegisterMedidorDto): Promise<ResponseApi>

    abstract obtenerMedidores(): Promise<ResponseApi>

    abstract obtenerMedidor(id: string): Promise<ResponseApi> 

    abstract actualizarMedidor(id: string, registerMedidorDto: RegisterMedidorDto): Promise<ResponseApi>

    abstract eliminarMedidor(id: string): Promise<ResponseApi>

    
}