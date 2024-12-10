import { Request, Response } from "express";
import { GetAllEgresos, RegisterEgresoDto, UpdateEgresoDto,EgresoRepository, RegisterEgreso, GetEgreso, UpdateEgreso, DeleteEgreso, GetMonth  } from "../../domain";




export class EgresoController {

    constructor(
        private readonly EgresoRepository: EgresoRepository
    ) { }

    obtenerEgresos = (req: Request, res: Response) => {
        new GetAllEgresos(this.EgresoRepository)
            .execute()
            .then(data => res.json(data))
            .catch(err => res.status(500).json({ err }))
    }

    registrarEgreso = (req: Request, res: Response) => {
        console.log(req.body)
        const [error, registerEgresoDto] = RegisterEgresoDto.create(req.body)
        if (error) return res.status(400).json({ error })

        new RegisterEgreso(this.EgresoRepository)
            .execute(registerEgresoDto!)
            .then(data => {
                console.log(data)
                res.json(data)
            })
            .catch(err => res.status(500).json({ err }))
    }

//
    obtenerEgreso = (req: Request, res: Response) => {
        new GetEgreso( this.EgresoRepository )
            .execute({id: req.params.id})
            .then( data => res.json( data ))
            .catch( err => res.status(500).json({ err }))
    }

    obtenerMes = (req: Request, res: Response) => {
        new GetMonth( this.EgresoRepository )
            .execute({id: req.params.id})
            .then( data => res.json( data ))
            .catch( err => res.status(500).json({ err }))
    }

  
    actualizarEgreso = (req: Request, res: Response) => {
        const [error, updateEgresoDto] = UpdateEgresoDto.create( req.body )
        if( error ) return res.status(400).json({ error })

        new UpdateEgreso( this.EgresoRepository )
            .execute({id: req.params.id}, updateEgresoDto!)
            .then( data => res.json( data ))
            .catch( err => res.status(500).json({ err }))
    }
    eliminarEgreso = (req: Request, res: Response) => {
        new DeleteEgreso( this.EgresoRepository )
            .execute({id: req.params.id})
            .then( data => res.json( data ))
            .catch( err => res.status(500).json({ err }))
    }
    
}