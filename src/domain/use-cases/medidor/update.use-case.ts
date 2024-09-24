import { MedidorRepository, UpdateMedidorDto, ResponseApi, } from "../.."




interface UpdateMedidorUseCase{
    execute(options: Options, registerMedidorDto: UpdateMedidorDto ): Promise<ResponseApi>
}

interface Options{
    id: string
}

export class UpdateMedidor implements UpdateMedidorUseCase{

    constructor(
        private readonly medidorRepository: MedidorRepository
    ){}

    execute(options: Options, updateMedidorDto: UpdateMedidorDto): Promise<ResponseApi> {
        const { id } = options
        const resultado = this.medidorRepository.actualizarMedidor(id, updateMedidorDto)
        return resultado
    }

}