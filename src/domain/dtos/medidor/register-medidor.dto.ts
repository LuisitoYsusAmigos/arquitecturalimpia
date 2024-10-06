export class RegisterMedidorDto{
    private constructor(
        public id: string,
        public numero_medidor: number,
        public diametro_tuberia: number,
        public marca_medidor: string,
        public lectura_actual_medidor: number,
        public tipo_medidor: string,
        public localizacion_caja: string,
        public estado_medidor: boolean
    ){}

    static create( object: {[key: string]: any}): [string?, RegisterMedidorDto?]{

        let {
            id,
            numero_medidor,
            diametro_tuberia,
            marca_medidor,
            lectura_actual_medidor,
            tipo_medidor,
            localizacion_caja,
            estado_medidor 
        } = object
        if( !numero_medidor ) return ['la numero_medidor  es obligatoria', undefined]  
        if( !diametro_tuberia ) return ['la diametro_tuberia  es obligatoria', undefined]  
        if( !marca_medidor ) return ['la marcaMedi_mor  es obligatoria', undefined]  
        if( !lectura_actual_medidor ) return ['la lectura_actual_medidor  es obligatoria', undefined]  
        if( !tipo_medidor ) return ['la tipo_medidor  es obligatoria', undefined]  
        if( !localizacion_caja ) return ['la localiza_cioncaja  es obligatoria', undefined]  
        if( estado_medidor===undefined ) return ['la estado_medidor  es obligatorio', undefined] 
        if(estado_medidor!=0){estado_medidor=1}

        
        return [undefined, new RegisterMedidorDto(
            id,
            numero_medidor,
            diametro_tuberia,
            marca_medidor,
            lectura_actual_medidor,
            tipo_medidor,
            localizacion_caja,
            estado_medidor 
        )]
    }
}