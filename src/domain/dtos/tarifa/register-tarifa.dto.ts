export class RegisterTarifaDto{
    private constructor(
        //public id: number,
        public rango: string,
        public costo: string,
        public fecha: string,
        public id_usuario: number,

    ){}

    static create( object: {[key: string]: any}): [string?, RegisterTarifaDto?]{

        const {
            
            rango,
            costo,
            fecha,
            id_usuario,
        } = object
        if( !rango ) return ['el rango  es obligatorio', undefined]  
        if( !costo ) return ['El costo es obligatorio', undefined]
        if( !fecha ) return ['La fecha es necesaria', undefined]
        if( !id_usuario ) return ['la fecha es obligatoria', undefined]  

        
        return [undefined, new RegisterTarifaDto(
            
            rango,
            costo,
            fecha,
            id_usuario
        )]
    }
}