export class RegisterUsuarioDto{
    private constructor(
        public id: number,
        public password: string,
        public ci: string,
        public nombre: string,
        public apellidos: string,
        public fecha_nacimiento: string,
        public cel: string
    ){}

    static create( object: {[key: string]: any}): [string?, RegisterUsuarioDto?]{

        const {
            id,
            ci,
            password,
            nombre,
            apellidos,
            fecha_nacimiento,
            cel
        } = object
        if( !ci ) return ['el ci  es obligatorio', undefined]  
        if( !nombre ) return ['El nombre del usuario es obligatorio', undefined]
        if( nombre.length >= 40 ) return ['EL usuario tiene un nombre demasiado largo', undefined]
        if( !apellidos ) return ['Los apellidos son necesarios', undefined]
        if( apellidos.length >= 40 ) return ['Los apellidos son demasiado largos', undefined]
        if( !fecha_nacimiento ) return ['la fecha es obligatoria', undefined]  
        if( !cel ) return ['el celular es obligatorio', undefined]  
        if( !password ) return ['el password es obligatorio', undefined]  
        
        return [undefined, new RegisterUsuarioDto(
            id,
            password,
            ci,
            nombre,
            apellidos,
            fecha_nacimiento,
            cel
        )]
    }
}