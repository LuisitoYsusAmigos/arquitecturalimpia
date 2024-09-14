import { UpdatePersonaDto,RegisterPersonaDto, PersonaEntity } from "..";
import { ResponseApi } from "../responseApi/responseApi";

export abstract class PersonaDatasource{

    abstract insertarPersona(registerPersonaDto: RegisterPersonaDto): Promise<ResponseApi>

    abstract obtenerPersonas(): Promise<ResponseApi>

    abstract obtenerPersona(id: string): Promise<ResponseApi> 

    abstract actualizarPersona(id: string, updatePersonaDto: UpdatePersonaDto): Promise<ResponseApi>

    abstract eliminarPersona(id: string): Promise<ResponseApi>
}