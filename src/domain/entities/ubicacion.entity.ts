export class UbicacionEntity{
    constructor(
        public id: number,
        public localidad: string,
        public municipio: string,
        public provincia: string,
        public zona: string,
        public calle: string,
        public material_via: string,
        public material_acera:string
    ){}
}

