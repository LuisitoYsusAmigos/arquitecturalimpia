import { MedidorRepository, ResponseApi } from "../.."





interface DeleteMedidorUseCase{
    execute(options: Options): Promise<ResponseApi>
}

interface Options{
    id: string
}

export class DeleteMedidor implements DeleteMedidorUseCase{

    constructor(
        private readonly medidorRepository: MedidorRepository
    ){}

    async execute(options: Options): Promise<ResponseApi>{
        const { id } = options
        const resultado = await this.medidorRepository.eliminarMedidor(id)
        return resultado
    }

}