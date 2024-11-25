import { Request, Response } from "express";
import { GetAllLecturaRecibos, RegisterLecturaReciboDto, LecturaReciboRepository, RegisterLecturaRecibo, GetLecturaRecibo, UpdateLecturaRecibo, DeleteLecturaRecibo  } from "../../domain";




export class LecturaReciboController {

    constructor(
        private readonly LecturaReciboRepository: LecturaReciboRepository
    ) { }

    obtenerLecturaRecibos = (req: Request, res: Response) => {
        new GetAllLecturaRecibos(this.LecturaReciboRepository)
            .execute()
            .then(data => res.json(data))
            .catch(err => res.status(500).json({ err }))
    }

    registrarLecturaRecibo = (req: Request, res: Response) => {
        console.log(req.body)
        const [error, registerLecturaReciboDto] = RegisterLecturaReciboDto.create(req.body)
        if (error) return res.status(400).json({ error })

        new RegisterLecturaRecibo(this.LecturaReciboRepository)
            .execute(registerLecturaReciboDto!)
            .then(data => {
                console.log(data)
                res.json(data)
            })
            .catch(err => res.status(500).json({ err }))
    }


    obtenerLecturaRecibo = (req: Request, res: Response) => {
        new GetLecturaRecibo( this.LecturaReciboRepository )
            .execute({id: req.params.id})
            .then( data => res.json( data ))
            .catch( err => res.status(500).json({ err }))
    }

  
    actualizarLecturaRecibo = (req: Request, res: Response) => {
        const [error, registerLecturaReciboDto] = RegisterLecturaReciboDto.create( req.body )
        if( error ) return res.status(400).json({ error })

        new UpdateLecturaRecibo( this.LecturaReciboRepository )
            .execute({id: req.params.id}, registerLecturaReciboDto!)
            .then( data => res.json( data ))
            .catch( err => res.status(500).json({ err }))
    }
    eliminarLecturaRecibo = (req: Request, res: Response) => {
        new DeleteLecturaRecibo( this.LecturaReciboRepository )
            .execute({id: req.params.id})
            .then( data => res.json( data ))
            .catch( err => res.status(500).json({ err }))
    }
    
}