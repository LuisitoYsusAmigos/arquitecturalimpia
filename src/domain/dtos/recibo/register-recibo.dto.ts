export class RegisterReciboDto{
    private constructor(
        //public id: number,
        public monto_total: string,
        public fecha: string,
        public id_usuario: number,

    ){}

    static create( object: {[key: string]: any}): [string?, RegisterReciboDto?]{

        const {
            
            
            monto_total,
            id_usuario,
            fecha
        } = object
        if( !monto_total ) return ['el monto_total  es obligatorio', undefined]  
        if( !id_usuario ) return ['el usuario es obligatoria', undefined]  
        if( !fecha ) return ['el fecha es obligatoria', undefined]  

        
        return [undefined, new RegisterReciboDto(
            monto_total,
            fecha,
            id_usuario
        )]
    }
}