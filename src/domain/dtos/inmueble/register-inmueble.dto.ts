export class RegisterInmuebleDto{
    private constructor(
        public id: number,
        public n_familia: number,
        public n_persona: number,
        public n_habitaciones: number,
        public servicio_de_agua: boolean,
        public servicio_alcantarillado: boolean,
        public servicio_recojo_basura: boolean
    ){}

    static create( object: {[key: string]: any}): [string?, RegisterInmuebleDto?]{

        let {
            id,
            n_familia,
            n_persona,
            n_habitaciones,
            servicio_de_agua,
            servicio_alcantarillado,
            servicio_recojo_basura
        } = object
        if(servicio_de_agua!=0){servicio_de_agua=1}
        if(servicio_alcantarillado!=0){servicio_alcantarillado=1}
        if(servicio_recojo_basura!=0){servicio_recojo_basura=1}
        //if(typeof n_familia!="string")n_familia=1
        if( !n_habitaciones ) return ['la n_habitaciones  es obligatoria', undefined]  
        if( servicio_de_agua===undefined ) return ['la servicio_de_agua  es obligatoria', undefined]  
        if( servicio_alcantarillado===undefined ) return ['la servicio_alcantarillado  es obligatoria', undefined]  
        if( servicio_recojo_basura===undefined ) return ['la servicio_recojo_basura  es obligatoria', undefined]  

        
        return [undefined, new RegisterInmuebleDto(
            id,
            n_familia,
            n_persona,
            n_habitaciones,
            servicio_de_agua,
            servicio_alcantarillado,
            servicio_recojo_basura 
        )]
    }
}