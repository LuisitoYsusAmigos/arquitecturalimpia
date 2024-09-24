import { ResponseApi, UbicacionEntity, UbicacionRepository } from "../.."




interface GetAllUbicacionesUseCase{
    execute(): Promise<ResponseApi>
}

export class GetAllUbicaciones implements GetAllUbicacionesUseCase{

    constructor(
        private readonly ubicacionRepository: UbicacionRepository
    ){}

    
    async execute(): Promise<ResponseApi> {

        const resultado = await this.ubicacionRepository.obtenerUbicaciones()
        return resultado
    }

}