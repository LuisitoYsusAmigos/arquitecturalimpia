export class RegisterAuthDto{
    private constructor(
        public ci: string,
        public password: string
    ){}

    static create( object: {[key: string]: any}): [string?, RegisterAuthDto?]{

        let { ci, password} = object

        if( !ci ) return ['El ci es requerido', undefined]
        if( !password ) ['La contraseña es requerida', undefined]
        
        return [undefined, new RegisterAuthDto(ci, password)]
    }
}