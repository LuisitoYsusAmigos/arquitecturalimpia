import { RegisterInmuebleDto, ResponseApi, InmuebleRepository, DeleteInmueble } from "../..";



interface RegisterInmuebleUseCase{
    execute( RegisterInmuebleDto: RegisterInmuebleDto ): Promise<ResponseApi>
}

export class RegisterInmueble implements RegisterInmuebleUseCase{

    constructor(
        private readonly InmuebleRepository: InmuebleRepository
    ){}

    async execute(RegisterInmuebleDto: RegisterInmuebleDto): Promise<ResponseApi> {
        let mensaje="No se pudo realizar la insercion";
        try {
            //llamar a caso de uso validar catastro
            /*
            const aux = await new DeleteInmueble(this.InmuebleRepository).execute({id: "5000"});
            mensaje="dios es real"
            if(!aux.status) throw new Error("eliminacion de 500")
            */
            const resultado = await this.InmuebleRepository.insertarInmueble(RegisterInmuebleDto)
            return resultado;
        } catch (error) {
            return ResponseApi.error(String(mensaje))
        }
    }
}