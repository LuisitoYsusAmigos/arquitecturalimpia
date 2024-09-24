import { Request, Response } from "express";
import { GetAllUbicaciones, RegisterUbicacionDto, UbicacionRepository, RegisterUbicacion, GetUbicacion, UpdateUbicacion, DeleteUbicacion  } from "../../domain";




export class UbicacionController {

    constructor(
        private readonly ubicacionRepository: UbicacionRepository
    ) { }

    obtenerubicaciones = (req: Request, res: Response) => {
        new GetAllUbicaciones(this.ubicacionRepository)
            .execute()
            .then(data => res.json(data))
            .catch(err => res.status(500).json({ err }))
    }

    registrarUbicacion = (req: Request, res: Response) => {
        console.log(req.body)
        const [error, registerUbicacionDto] = RegisterUbicacionDto.create(req.body)
        if (error) return res.status(400).json({ error })

        new RegisterUbicacion(this.ubicacionRepository)
            .execute(registerUbicacionDto!)
            .then(data => {
                console.log(data)
                res.json(data)
            })
            .catch(err => res.status(500).json({ err }))
    }


    obtenerUbicacion = (req: Request, res: Response) => {
        new GetUbicacion( this.ubicacionRepository )
            .execute({id: req.params.id})
            .then( data => res.json( data ))
            .catch( err => res.status(500).json({ err }))
    }

  
    actualizarUbicacion = (req: Request, res: Response) => {
        const [error, registerUbicacionDto] = RegisterUbicacionDto.create( req.body )
        if( error ) return res.status(400).json({ error })

        new UpdateUbicacion( this.ubicacionRepository )
            .execute({id: req.params.id}, registerUbicacionDto!)
            .then( data => res.json( data ))
            .catch( err => res.status(500).json({ err }))
    }
    eliminarUbicacion = (req: Request, res: Response) => {
        new DeleteUbicacion( this.ubicacionRepository )
            .execute({id: req.params.id})
            .then( data => res.json( data ))
            .catch( err => res.status(500).json({ err }))
    }
    
}