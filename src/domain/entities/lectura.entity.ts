export class LecturaEntity{
    constructor(
        public id: number,
        public fecha: string,
        public lectura_anterior: number,
        public lectura_actual: number,
        public consumo_m3: number,
        public consumo_bs: number,
        public pagado: boolean,
        public id_tarifa: number,
        public id_catastro: number,
        public id_usuario: number,
    ){}
}