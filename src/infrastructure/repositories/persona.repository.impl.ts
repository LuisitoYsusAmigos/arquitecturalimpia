import { UpdatePersonaDto,RegisterPersonaDto,ResponseApi, PersonaDatasource, PersonaRepository } from "../../domain";



export class PersonaRepositoryImpl implements PersonaRepository{
    constructor(
        private readonly personaDatasource: PersonaDatasource
    ){}
    
    insertarPersona(registerPersonaDto: RegisterPersonaDto): Promise<ResponseApi> {
        return this.personaDatasource.insertarPersona( registerPersonaDto )
    }
    
    obtenerPersonas(): Promise<ResponseApi> {
        return this.personaDatasource.obtenerPersonas()
    }
    
    obtenerPersona(id: string): Promise<ResponseApi> {
        return this.personaDatasource.obtenerPersona(id)
    }
    
    actualizarPersona(id: string, updatePersonaDto: UpdatePersonaDto): Promise<ResponseApi> {
        return this.personaDatasource.actualizarPersona(id, updatePersonaDto)
    }
    eliminarPersona(id: string): Promise<ResponseApi> {
        return this.personaDatasource.eliminarPersona(id)
    }
    

}