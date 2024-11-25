export class UpdateTarifaDto{
    private constructor(
        public id: number,
        public rango: string,
        public costo: string,
        public fecha: string,
        public id_usuario: number,

    ){}

    static create( object: {[key: string]: any}): [string?, UpdateTarifaDto?]{

        const {
            id,
            rango,
            costo,
            fecha,
            id_usuario,
        } = object
        if( !rango ) return ['el ci  es obligatorio', undefined]  
        if( !costo ) return ['El nombre del usuario es obligatorio', undefined]
        if( !fecha ) return ['Los apellidos son necesarios', undefined]
       if( !id_usuario ) return ['la fecha es obligatoria', undefined]  

        
        return [undefined, new UpdateTarifaDto(
            id,
            rango,
            costo,
            fecha,
            id_usuario
        )]
    }
}