import { ResponseApi, InmuebleEntity, InmuebleRepository } from "../.."




interface GetAllInmueblesUseCase{
    execute(): Promise<ResponseApi>
}

export class GetAllInmuebles implements GetAllInmueblesUseCase{

    constructor(
        private readonly inmuebleRepository: InmuebleRepository
    ){}

    
    async execute(): Promise<ResponseApi> {

        const resultado = await this.inmuebleRepository.obtenerInmuebles()
        return resultado
    }

}