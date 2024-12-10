export class EgresoEntity{
    constructor(
        public id: number,
        public fecha: string,
        public monto: number,
        public detalle: string,
        public valor: boolean,
        public id_usuario: number,

    ){}


}


