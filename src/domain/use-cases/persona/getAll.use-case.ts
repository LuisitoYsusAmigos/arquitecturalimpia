import { ResponseApi, PersonaEntity, PersonaRepository } from "../.."




interface GetAllPersonasUseCase{
    execute(): Promise<ResponseApi>
}

export class GetAllPersonas implements GetAllPersonasUseCase{

    constructor(
        private readonly personaRepository: PersonaRepository
    ){}

    
    async execute(): Promise<ResponseApi> {

        const resultado = await this.personaRepository.obtenerPersonas()
        //const resultado = await this.PersonaRepository.
        //const resultado = await this.usuarioRepository.obtenerUsuarios()
        return resultado
    }

}