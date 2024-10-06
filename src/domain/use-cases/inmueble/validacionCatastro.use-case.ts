import { InmuebleRepository, ResponseApi } from "../.."
//import { validacionCatastro } from "../inmueble/validacion/validacionCatastro.use-case"




interface DeleteInmuebleUseCase{
    execute(options: Options): Promise<ResponseApi>
}

interface Options{
    id: string
}

export class DeleteInmueble implements DeleteInmuebleUseCase{

    constructor(
        private readonly inmuebleRepository: InmuebleRepository
    ){}

    async execute(options: Options): Promise<ResponseApi>{
        
        const { id } = options
        
        const resultado = await this.inmuebleRepository.eliminarInmueble(id)
        return resultado
    }

}