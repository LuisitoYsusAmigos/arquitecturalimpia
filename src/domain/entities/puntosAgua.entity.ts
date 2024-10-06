export class PuntosAguaEntity{
    constructor(
        public id: number,
        public pileta_patio: boolean,
        public lavanderia: boolean,
        public lava_platos: boolean,
        public inodoro: boolean,
        public ducha: boolean,
        public lava_manos: boolean,
        public tina: boolean,
        public otros: boolean,
        public observaciones: string
    ){}
}

