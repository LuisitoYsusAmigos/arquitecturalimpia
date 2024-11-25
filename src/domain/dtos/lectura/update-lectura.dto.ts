export class UpdateLecturaDto{
    private constructor(
        public id: number,
        public fecha: string,
        public lectura_anterior: number,
        public lectura_actual: number,
        public consumo_m3: number,
        public consumo_bs: number,
        public pagado: boolean,
        public id_tarifa: number,
        public id_catastro: number,
        public id_usuario: number,
    ){}

    static create( object: {[key: string]: any}): [string?, UpdateLecturaDto?]{

        const {
            id,
            fecha,
            lectura_anterior,
            lectura_actual,
            consumo_m3,
            consumo_bs,
            pagado,
            id_tarifa,
            id_catastro,
            id_usuario
        } = object
        if( !fecha ) return ['la fecha  es obligatorio', undefined]  
        if( !lectura_anterior ) return ['La Lectura anterior es obligatorio', undefined]
       // if( nombre.length >= 40 ) return ['EL Lectura tiene un nombre demasiado largo', undefined]
        if( !lectura_actual ) return ['La lectura_actual es necesaria', undefined]
        //if( apellidos.length >= 40 ) return ['Los apellidos son demasiado largos', undefined]
        if( !consumo_m3 ) return ['el consumo_m3 es obligatoria', undefined]  
        if( !consumo_bs ) return ['el consumo_bs es obligatorio', undefined]  
        if( !pagado ) return ['el pagado es obligatorio', undefined]  
        if( !id_tarifa ) return ['el pagado es obligatorio', undefined]  
        if( !id_catastro ) return ['el pagado es obligatorio', undefined]  
        if( !id_usuario ) return ['el pagado es obligatorio', undefined]  
        
        return [undefined, new UpdateLecturaDto(
            id,
            fecha,
            lectura_anterior,
            lectura_actual,
            consumo_m3,
            consumo_bs,
            pagado,
            id_tarifa,
            id_catastro,
            id_usuario
        )]
    }
}