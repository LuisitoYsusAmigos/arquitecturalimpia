import { PersonaEntity, PersonaRepository, ResponseApi } from "../.."



interface GetPersonaUseCase{
    execute(options: Options): Promise<ResponseApi>
}

interface Options{
    id: string
}



export class GetPersona implements GetPersonaUseCase{

    constructor(
        private readonly personaRepository: PersonaRepository
    ){}
    async execute(options: Options): Promise<ResponseApi> {

        const { id } = options
        const resultado = await this.personaRepository.obtenerPersona( id )
        return resultado
    }

}