export class RegisterCatastroDto{
    private constructor(
        public id: string,
        public codigo_usuario: string,
        public categoria_suscripcion: string,
        public id_cliente: string,
        public id_ubicacion: number,
        public id_inmueble: number,
        public id_medidor: number,
        public id_puntos_agua: number
    ){}

    static create( object: {[key: string]: any}): [string?, RegisterCatastroDto?]{
        const {
            id,
            codigo_usuario,
            categoria_suscripcion,
            id_cliente,
            id_ubicacion,
            id_inmueble,
            id_medidor,
            id_puntos_agua
        } = object
        if(!codigo_usuario) return ['la codigoUsuario  es obligatoria', undefined]  
        
        if(!categoria_suscripcion) return ['la categriasuscripcion  es obligatoria', undefined]
        if( categoria_suscripcion.length >= 50 ) return ['EL categriasuscripcion es demasiado largo', undefined]
        if(!id_cliente) return ['la codigoUsuario  es obligatoria', undefined]  
        if(!id_ubicacion) return ['la idUbicacion  es obligatoria', undefined]
        if(!id_inmueble) return ['la idInmueble  es obligatoria', undefined]
        if(!id_medidor) return ['la idMedidor  es obligatoria', undefined]
        if(!id_puntos_agua) return ['la idPuntosdeAgua  es obligatoria', undefined]
        

        
        return [undefined, new RegisterCatastroDto(
            id,
            codigo_usuario,
            categoria_suscripcion,
            id_cliente,
            id_ubicacion,
            id_inmueble,
            id_medidor,
            id_puntos_agua
        )]
    }
}