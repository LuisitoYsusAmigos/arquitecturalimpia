import { Request, Response } from "express";
import { GetAllRecibos, RegisterReciboDto, ReciboRepository, RegisterRecibo, GetRecibo, UpdateRecibo, DeleteRecibo, GetReciboIdMax, GetdetallesRecibo  } from "../../domain";




export class ReciboController {

    constructor(
        private readonly ReciboRepository: ReciboRepository
    ) { }

    obtenerRecibos = (req: Request, res: Response) => {
        new GetAllRecibos(this.ReciboRepository)
            .execute()
            .then(data => res.json(data))
            .catch(err => res.status(500).json({ err }))
    }
    obtenerReciboIdMax = (req: Request, res: Response) => {
        new GetReciboIdMax(this.ReciboRepository)
            .execute()
            .then(data => res.json(data))
            .catch(err => res.status(500).json({ err }))
    }

    registrarRecibo = (req: Request, res: Response) => {
        console.log(req.body)
        const [error, registerReciboDto] = RegisterReciboDto.create(req.body)
        if (error) return res.status(400).json({ error })

        new RegisterRecibo(this.ReciboRepository)
            .execute(registerReciboDto!)
            .then(data => {
                console.log(data)
                res.json(data)
            })
            .catch(err => res.status(500).json({ err }))
    }


    obtenerRecibo = (req: Request, res: Response) => {
        new GetRecibo( this.ReciboRepository )
            .execute({id: req.params.id})
            .then( data => res.json( data ))
            .catch( err => res.status(500).json({ err }))
    }

    obtenerDetallesRecibo = (req: Request, res: Response) => {
        new GetdetallesRecibo( this.ReciboRepository )
            .execute({id: req.params.id})
            .then( data => res.json( data ))
            .catch( err => res.status(500).json({ err }))
    }


  
    actualizarRecibo = (req: Request, res: Response) => {
        const [error, registerReciboDto] = RegisterReciboDto.create( req.body )
        if( error ) return res.status(400).json({ error })

        new UpdateRecibo( this.ReciboRepository )
            .execute({id: req.params.id}, registerReciboDto!)
            .then( data => res.json( data ))
            .catch( err => res.status(500).json({ err }))
    }
    eliminarRecibo = (req: Request, res: Response) => {
        new DeleteRecibo( this.ReciboRepository )
            .execute({id: req.params.id})
            .then( data => res.json( data ))
            .catch( err => res.status(500).json({ err }))
    }
    
}