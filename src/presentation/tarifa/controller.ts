import { Request, Response } from "express";
import { GetAllTarifas, RegisterTarifaDto, TarifaRepository, RegisterTarifa, GetTarifa, UpdateTarifa, DeleteTarifa  } from "../../domain";




export class TarifaController {

    constructor(
        private readonly tarifaRepository: TarifaRepository
    ) { }

    obtenerTarifas = (req: Request, res: Response) => {
        new GetAllTarifas(this.tarifaRepository)
            .execute()
            .then(data => res.json(data))
            .catch(err => res.status(500).json({ err }))
    }

    registrarTarifa = (req: Request, res: Response) => {
        console.log(req.body)
        const [error, registerTarifaDto] = RegisterTarifaDto.create(req.body)
        if (error) return res.status(400).json({ error })

        new RegisterTarifa(this.tarifaRepository)
            .execute(registerTarifaDto!)
            .then(data => {
                console.log(data)
                res.json(data)
            })
            .catch(err => res.status(500).json({ err }))
    }


    obtenerTarifa = (req: Request, res: Response) => {
        new GetTarifa( this.tarifaRepository )
            .execute({id: req.params.id})
            .then( data => res.json( data ))
            .catch( err => res.status(500).json({ err }))
    }

  
    actualizarTarifa = (req: Request, res: Response) => {
        const [error, registerTarifaDto] = RegisterTarifaDto.create( req.body )
        if( error ) return res.status(400).json({ error })

        new UpdateTarifa( this.tarifaRepository )
            .execute({id: req.params.id}, registerTarifaDto!)
            .then( data => res.json( data ))
            .catch( err => res.status(500).json({ err }))
    }
    eliminarTarifa = (req: Request, res: Response) => {
        new DeleteTarifa( this.tarifaRepository )
            .execute({id: req.params.id})
            .then( data => res.json( data ))
            .catch( err => res.status(500).json({ err }))
    }
    
}