
import { RegisterPersonaDto, PersonaEntity,ResponseApi } from "..";


export abstract class PersonaRepository{

    abstract insertarPersona(registerPersonaDto: RegisterPersonaDto): Promise<ResponseApi>

    abstract obtenerPersonas(): Promise<ResponseApi>

    abstract obtenerPersona(id: string): Promise<ResponseApi> 

    abstract actualizarPersona(id: string, registerUsuarioDto: RegisterPersonaDto): Promise<ResponseApi>

    abstract eliminarPersona(id: string): Promise<ResponseApi>
}