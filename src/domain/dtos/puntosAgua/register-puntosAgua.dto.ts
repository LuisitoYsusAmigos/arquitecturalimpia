export class RegisterPuntosAguaDto{
    private constructor(
        public id: number,
        public pileta_patio: boolean,
        public lavanderia: boolean,
        public lava_platos: boolean,
        public inodoro: boolean,
        public ducha: boolean,
        public lava_manos: boolean,
        public tina: boolean,
        public otros: boolean,
        public observaciones: string
    ){}

    static create( object: {[key: string]: any}): [string?, RegisterPuntosAguaDto?]{
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
        let {
            id,
            pileta_patio,
            lavanderia,
            lava_platos,
            inodoro,
            ducha,
            lava_manos,
            tina,
            otros,
            observaciones
        } = object
        if( pileta_patio===undefined ) return ['la pileta_patio  es obligatoria', undefined]  
        if(pileta_patio!=0){pileta_patio=1}
        if( lavanderia===undefined ) return ['El lavanderia del usuario es obligatorio', undefined]
        if(lavanderia!=0){lavanderia=1}
        if( lava_platos===undefined ) return ['EL lava_platos tiene un nombre demasiado largo', undefined]
        if(lava_platos!=0){lava_platos=1}
        if( inodoro===undefined ) return ['La inodoro es necesaria', undefined]
        if(inodoro!=0){inodoro=1}
        if( ducha===undefined ) return ['Los ducha son demasiado largos', undefined]
        if(ducha!=0){ducha=1}
        if( lava_manos===undefined ) return ['la lava_manos es obligatoria', undefined]  
        if(lava_manos!=0){lava_manos=1}
        if(tina===undefined) return['la tina es obligatoria', undefined]
        if(tina!=0){tina=1}
        if( otros===undefined ) return ['la otros es obligatoria', undefined]
        if(otros!=0){otros=1}
        if( !observaciones) return ['la observaciones es obligatoria', undefined] 
        if( observaciones.length>= 255) return ['la observaciones es muy larga', undefined] 


        
        return [undefined, new RegisterPuntosAguaDto(
            id,
            pileta_patio,
            lavanderia,
            lava_platos,
            inodoro,
            ducha,
            lava_manos,
            tina,
            otros,
            observaciones
        )]
    }
}