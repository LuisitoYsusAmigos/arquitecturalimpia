export class RegisterPersonaDto{
    private constructor(
        public id: number,
        public nombres: string,
        public apellidos: string,
        public edad: number
    ){}

    static create( object: {[key: string]: any}): [string?, RegisterPersonaDto?]{

        const {
            id,
            nombres,
            apellidos,
            edad
        } = object

        if( !nombres ) return ['El nombre del usuario es obligatorio', undefined]
        if( nombres.length >= 50 ) return ['EL usuario tiene un nombre demasiado largo', undefined]
        if( !apellidos ) return ['Los apellidos son necesarios', undefined]
        if( apellidos.length >= 50 ) return ['Los apellidos son demasiado largos', undefined]
        if( !edad ) return ['la edad es obligatorio', undefined]  

        
        return [undefined, new RegisterPersonaDto(
            id,
            nombres,
            apellidos,
            edad
        )]
    }
}