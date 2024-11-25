export class UpdateReciboDto{
    private constructor(
        public id: number,
        public monto_total: string,
        public id_usuario: number,
        public fecha: string,

    ){}

    static create( object: {[key: string]: any}): [string?, UpdateReciboDto?]{

        const {
            
            id,
            monto_total,
            id_usuario,
            fecha
        } = object
        if( !id ) return ['el id  es obligatorio', undefined]  
        if( !monto_total ) return ['el monto_total  es obligatorio', undefined]  
        if( !id_usuario ) return ['el usuario es obligatoria', undefined]  
        if( !fecha ) return ['el fecha es obligatoria', undefined]  
        
        return [undefined, new UpdateReciboDto(
            id,
            monto_total,
            id_usuario,
            fecha
        )]
    }
}