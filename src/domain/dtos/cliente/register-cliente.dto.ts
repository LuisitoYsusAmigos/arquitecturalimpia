export class RegisterClienteDto{
    private constructor(
        
        public ci: string,
        public nombre: string,
        public apellidos: string,
        public fecha_nacimiento: string,
        public cel: string,
        
    ){}

    static create( object: {[key: string]: any}): [string?, RegisterClienteDto?]{

        const {
            
            ci,
            nombre,
            apellidos,
            fecha_nacimiento,
            cel,
            id_usuario
        } = object
        if( !ci ) return ['el ci  es obligatorio', undefined]  
        if( !nombre ) return ['El nombre del usuario es obligatorio', undefined]
        if( nombre.length >= 40 ) return ['EL usuario tiene un nombre demasiado largo', undefined]
        if( !apellidos ) return ['Los apellidos son necesarios', undefined]
        if( apellidos.length >= 40 ) return ['Los apellidos son demasiado largos', undefined]
        if( !fecha_nacimiento ) return ['la fecha es obligatoria', undefined]  
        if( !cel ) return ['el celular es obligatorio', undefined]  
        if( cel.length >= 10 ) return ['El celular son demasiado largos', undefined]
        
        return [undefined, new RegisterClienteDto(
            
            ci,
            nombre,
            apellidos,
            fecha_nacimiento,
            cel,
            
        )]
    }
}