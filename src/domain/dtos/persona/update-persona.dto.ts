export class UpdatePersonaDto{
    private constructor(
        
        public nombres: string,
        public apellidos: string,
        public edad: number
    ){}

    static create( object: {[key: string]: any}): [string?, UpdatePersonaDto?]{

        const {
            nombres,
            apellidos,
            edad
        } = object

        if( !nombres ) return ['El nombre del usuario es obligatorio', undefined]
        if( nombres.length >= 50 ) return ['EL usuario tiene un nombre demasiado largo', undefined]
        if( !apellidos ) return ['Los apellidos son necesarios', undefined]
        if( apellidos.length >= 50 ) return ['Los apellidos son demasiado largos', undefined]
        if( !edad ) return ['la edad es obligatorio', undefined]  

        
        return [undefined, new UpdatePersonaDto(
            nombres,
            apellidos,
            edad
        )]
    }
}