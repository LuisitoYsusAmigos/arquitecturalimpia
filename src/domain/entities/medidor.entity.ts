export class MedidorEntity{
    constructor(
        public id: string,
        public numero_medidor: number,
        public diametro_tuberia: number,
        public marca_medidor: string,
        public lectura_actual_medidor: number,
        public tipo_medidor: string,
        public localizacion_caja: string,
        public estado_medidor: boolean
    ){}


}


