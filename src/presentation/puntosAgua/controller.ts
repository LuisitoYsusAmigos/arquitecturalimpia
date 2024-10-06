import { Request, Response } from "express";
import { GetAllPuntosAguas, RegisterPuntosAguaDto, PuntosAguaRepository, RegisterPuntosAgua, GetPuntosAgua, UpdatePuntosAgua, DeletePuntosAgua  } from "../../domain";




export class PuntosAguaController {

    constructor(
        private readonly puntosAguaRepository: PuntosAguaRepository
    ) { }

    obtenerPuntosAguas = (req: Request, res: Response) => {
        new GetAllPuntosAguas(this.puntosAguaRepository)
            .execute()
            .then(data => res.json(data))
            .catch(err => res.status(500).json({ err }))
    }

    registrarPuntosAgua = (req: Request, res: Response) => {
        console.log(req.body)
        const [error, registerPuntosAguaDto] = RegisterPuntosAguaDto.create(req.body)
        if (error) return res.status(400).json({ error })

        new RegisterPuntosAgua(this.puntosAguaRepository)
            .execute(registerPuntosAguaDto!)
            .then(data => {
                console.log(data)
                res.json(data)
            })
            .catch(err => res.status(500).json({ err }))
    }


    obtenerPuntosAgua = (req: Request, res: Response) => {
        new GetPuntosAgua( this.puntosAguaRepository )
            .execute({id: req.params.id})
            .then( data => res.json( data ))
            .catch( err => res.status(500).json({ err }))
    }

  
    actualizarPuntosAgua = (req: Request, res: Response) => {
        const [error, registerPuntosAguaDto] = RegisterPuntosAguaDto.create( req.body )
        if( error ) return res.status(400).json({ error })

        new UpdatePuntosAgua( this.puntosAguaRepository )
            .execute({id: req.params.id}, registerPuntosAguaDto!)
            .then( data => res.json( data ))
            .catch( err => res.status(500).json({ err }))
    }
    eliminarPuntosAgua = (req: Request, res: Response) => {
        new DeletePuntosAgua( this.puntosAguaRepository )
            .execute({id: req.params.id})
            .then( data => res.json( data ))
            .catch( err => res.status(500).json({ err }))
    }
    
}