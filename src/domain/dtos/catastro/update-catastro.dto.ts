export class UpdateCatastroDto{
    private constructor(
        public id: string,
        public codigoUsuario: string,
        public categriasuscripcion: string,
        public idCliente: string,
        public idUbicacion: number,
        public idInmueble: number,
        public idMedidor: number,
        public idPuntosdeAgua: number
    ){}

    static create( object: {[key: string]: any}): [string?, UpdateCatastroDto?]{
        const {
            id,
            codigoUsuario,
            categriasuscripcion,
            idCliente,
            idUbicacion,
            idInmueble,
            idMedidor,
            idPuntosdeAgua,
        } = object
        if(!codigoUsuario) return ['la codigoUsuario  es obligatoria', undefined]  
        if(!categriasuscripcion) return ['la categriasuscripcion  es obligatoria', undefined]
        if( categriasuscripcion.length >= 50 ) return ['EL categriasuscripcion es demasiado largo', undefined]
        if(!idCliente) return ['la codigoUsuario  es obligatoria', undefined]  
        if(!idUbicacion) return ['la idUbicacion  es obligatoria', undefined]
        if(!idInmueble) return ['la idInmueble  es obligatoria', undefined]
        if(!idMedidor) return ['la idMedidor  es obligatoria', undefined]
        if(!idPuntosdeAgua) return ['la idPuntosdeAgua  es obligatoria', undefined]
        

        
        return [undefined, new UpdateCatastroDto(
            id,
            codigoUsuario,
            categriasuscripcion,
            idCliente,
            idUbicacion,
            idInmueble,
            idMedidor,
            idPuntosdeAgua,
        )]
    }
}