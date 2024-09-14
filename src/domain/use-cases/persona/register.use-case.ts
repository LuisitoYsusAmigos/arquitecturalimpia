import { RegisterPersonaDto, ResponseApi, PersonaRepository } from "../..";



interface RegisterPersonaUseCase{
    execute( registerPersonaDto: RegisterPersonaDto ): Promise<ResponseApi>
}

export class RegisterPersona implements RegisterPersonaUseCase{

    constructor(
        private readonly personaRepository: PersonaRepository
    ){}

    async execute(registerPersonaDto: RegisterPersonaDto): Promise<ResponseApi> {
        const resultado = await this.personaRepository.insertarPersona(registerPersonaDto)
        return resultado;
    }
}