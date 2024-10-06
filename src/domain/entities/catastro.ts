export class CatastroEntity{
    constructor(
        public id: string,
        public codigo_usuario: string,
        public categoria_suscripcion: string,
        public id_cliente: string,
        public id_ubicacion: number,
        public id_inmueble: number,
        public id_medidor: number,
        public id_puntos_agua: number
    ){}


}


