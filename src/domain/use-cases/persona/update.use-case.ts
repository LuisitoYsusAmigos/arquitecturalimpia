import { PersonaRepository, RegisterPersonaDto, ResponseApi, } from "../.."




interface UpdatePersonaUseCase{
    execute(options: Options, registerPersonaDto: RegisterPersonaDto ): Promise<ResponseApi>
}

interface Options{
    id: string
}

export class UpdatePersona implements UpdatePersonaUseCase{

    constructor(
        private readonly personaRepository: PersonaRepository
    ){}

    execute(options: Options, registerPersonaDto: RegisterPersonaDto): Promise<ResponseApi> {
        const { id } = options
        const resultado = this.personaRepository.actualizarPersona(id, registerPersonaDto)
        return resultado
    }

}