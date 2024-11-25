export class RegisterLecturaReciboDto{
    private constructor(
        public id_lectura: number,
        public id_recibo: number,
    ){}

    static create( object: {[key: string]: any}): [string?, RegisterLecturaReciboDto?]{

        const {
            id_recibo,
            id_lectura
        } = object
        if( !id_recibo ) return ['el id_recibo  es obligatorio', undefined]  
        if( !id_lectura ) return ['el id_lectura  es obligatorio', undefined]  
        
        return [undefined, new RegisterLecturaReciboDto(
            id_lectura,
            id_recibo
        )]
    }
}