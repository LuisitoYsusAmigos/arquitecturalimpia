export class UsuarioEntity{
    constructor(
        public id: number,
        public ci: string,
        public nombre: string,
        public apellidos: string,
        public fecha_nacimiento: string,
        public cel: string
    ){}
}