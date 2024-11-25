import { Request, Response } from "express";
import { GetAllLecturas, RegisterLecturaDto, LecturaRepository, RegisterLectura, GetLectura, UpdateLectura, DeleteLectura, GetAllUsuariosLecturas, GetLecturasCatastro,GetLecturasCatastroNoPagado,GetDatosRegistroLectura  } from "../../domain";




export class LecturaController {

    constructor(
        private readonly LecturaRepository: LecturaRepository
    ) { }

    obtenerLecturas = (req: Request, res: Response) => {
        new GetAllLecturas(this.LecturaRepository)
            .execute()
            .then(data => res.json(data))
            .catch(err => res.status(500).json({ err }))
    }

    obtenerDatosRegistroLectura = (req: Request, res: Response) => {
        new GetDatosRegistroLectura( this.LecturaRepository )
            .execute({id_catastro: req.params.id})
            .then( data => res.json( data ))
            .catch( err => res.status(500).json({ err }))
    }

    obtenerUsuariosLecturas = (req: Request, res: Response) => {
        new GetAllUsuariosLecturas(this.LecturaRepository)
            .execute()
            .then(data => res.json(data))
            .catch(err => res.status(500).json({ err }))
    }
    

    registrarLectura = (req: Request, res: Response) => {
        console.log(req.body)
        const [error, registerLecturaDto] = RegisterLecturaDto.create(req.body)
        if (error) return res.status(400).json({ error })

        new RegisterLectura(this.LecturaRepository)
            .execute(registerLecturaDto!)
            .then(data => {
                console.log(data)
                res.json(data)
            })
            .catch(err => res.status(500).json({ err }))
    }


    obtenerLectura = (req: Request, res: Response) => {
        new GetLectura( this.LecturaRepository )
            .execute({id: req.params.id})
            .then( data => res.json( data ))
            .catch( err => res.status(500).json({ err }))
    }

    obtenerLecturasCatastro = (req: Request, res: Response) => {
        new GetLecturasCatastroNoPagado( this.LecturaRepository )
            .execute({id_catastro: req.params.id})
            .then( data => res.json( data ))
            .catch( err => res.status(500).json({ err }))
    }

    obtenerLecturasCatastroNoPagado = (req: Request, res: Response) => {
        new GetLecturasCatastro( this.LecturaRepository )
            .execute({id_catastro: req.params.id})
            .then( data => res.json( data ))
            .catch( err => res.status(500).json({ err }))
    }
    
  
    actualizarLectura = (req: Request, res: Response) => {
        const [error, registerLecturaDto] = RegisterLecturaDto.create( req.body )
        if( error ) return res.status(400).json({ error })

        new UpdateLectura( this.LecturaRepository )
            .execute({id: req.params.id}, registerLecturaDto!)
            .then( data => res.json( data ))
            .catch( err => res.status(500).json({ err }))
    }
    eliminarLectura = (req: Request, res: Response) => {
        new DeleteLectura( this.LecturaRepository )
            .execute({id: req.params.id})
            .then( data => res.json( data ))
            .catch( err => res.status(500).json({ err }))
    }
    
}