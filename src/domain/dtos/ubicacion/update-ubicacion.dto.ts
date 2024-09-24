export class UpdateUbicacionDto{
    private constructor(
        public id: number,
        public localidad: string,
        public municipio: string,
        public provincia: string,
        public zona: string,
        public calle: string,
        public material_via: string,
        public material_acera:string
    ){}

    static create( object: {[key: string]: any}): [string?, UpdateUbicacionDto?]{
/*
    id INTEGER PRIMARY KEY AUTO_INCREMENT ,
     VARCHAR(40) NOT NULL,
     VARCHAR(40) NOT NULL,
     VARCHAR(40) NOT NULL,
     VARCHAR(40) NOT NULL,
     VARCHAR(40) NOT NULL,
     VARCHAR(15) NOT NULL,
     VARCHAR(15) NOT NULL

*/
        const {
            id,
            localidad,
            municipio,
            provincia,
            zona,
            calle,
            material_via,
            material_acera
        } = object
        if( !localidad ) return ['la localidad  es obligatoria', undefined]  
        if( !municipio ) return ['El municipio del usuario es obligatorio', undefined]
        if( municipio.length >= 40 ) return ['EL usuario tiene un nombre demasiado largo', undefined]
        if( !provincia ) return ['La privincia es necesaria', undefined]
        if( provincia.length >= 40 ) return ['Los apellidos son demasiado largos', undefined]
        if( !zona ) return ['la zona es obligatoria', undefined]  
        if(zona.length>=40) return['la zona es obligatoria', undefined]
        if( !calle ) return ['la calle es obligatoria', undefined]  
        if(calle.length>=40) return ["la calle es demasiado larga", undefined]
        if( !material_via ) return ['la material via es obligatoria', undefined] 
        if(material_via.length>=15) return ["el calle es demasiado larga", undefined] 
        if( !material_acera ) return ['la material via es obligatoria', undefined] 
        if(material_acera.length>=15) return ["el calle es demasiado larga", undefined] 

        
        return [undefined, new UpdateUbicacionDto(
            id,
            localidad,
            municipio,
            provincia,
            zona,
            calle,
            material_via,
            material_acera
        )]
    }
}