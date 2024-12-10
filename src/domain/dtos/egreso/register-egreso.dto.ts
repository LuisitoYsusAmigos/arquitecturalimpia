export class RegisterEgresoDto{
    private constructor(
        //public id: number,
        public fecha: string,
        public monto: number,
        public detalle: string,
        public valor: boolean,
        public id_usuario: number,
    ){}

    static create( object: {[key: string]: any}): [string?, RegisterEgresoDto?]{

        let {
           // id,
            fecha,
            monto,
            detalle,
            valor,
            id_usuario
        } = object
        if( !fecha ) return ['la fecha  es obligatoria', undefined]  
        if( !monto ) return ['la monto  es obligatoria', undefined]  
        if( !detalle ) return ['la detalle  es obligatoria', undefined]  
        if( !valor ) return ['la valor  es obligatoria', undefined]  
        if( !id_usuario ) return ['la id_usuario  es obligatoria', undefined]  


        
        return [undefined, new RegisterEgresoDto(
           // id,
            fecha,
            monto,
            detalle,
            valor,
            id_usuario
        )]
    }
}