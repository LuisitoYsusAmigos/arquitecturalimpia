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

        const {
            id,
            n_familia,
            n_persona,
            n_habitaciones,
            servicio_de_agua,
            servicio_alcantarillado,
            servicio_recojo_basura
        } = object
        if( !n_familia ) return ['la n_familia  es obligatoria', undefined]  
        if( !n_persona ) return ['la n_persona  es obligatoria', undefined]  
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