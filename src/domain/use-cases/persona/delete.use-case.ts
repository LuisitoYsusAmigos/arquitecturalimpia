import { PersonaRepository, ResponseApi } from "../.."





interface DeletePersonaUseCase{
    execute(options: Options): Promise<ResponseApi>
}

interface Options{
    id: string
}

export class DeletePersona implements DeletePersonaUseCase{

    constructor(
        private readonly personaRepository: PersonaRepository
    ){}

    async execute(options: Options): Promise<ResponseApi>{
        const { id } = options
        const resultado = await this.personaRepository.eliminarPersona(id)
        return resultado
    }

}