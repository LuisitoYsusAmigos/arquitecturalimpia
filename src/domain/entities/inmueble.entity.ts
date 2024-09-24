export class InmuebleEntity{
    constructor(
        public id: number,
        public n_familia: number,
        public n_persona: number,
        public n_habitaciones: number,
        public servicio_de_agua: boolean,
        public servicio_alcantarillado: boolean,
        public servicio_recojo_basura: boolean
    ){}
}


