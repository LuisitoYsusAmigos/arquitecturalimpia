import { Request, Response } from "express";
import { GetAllMedidores, RegisterMedidorDto, MedidorRepository, RegisterMedidor, GetMedidor, UpdateMedidor, DeleteMedidor  } from "../../domain";




export class MedidorController {

    constructor(
        private readonly medidorRepository: MedidorRepository
    ) { }

    obtenerMedidors = (req: Request, res: Response) => {
        new GetAllMedidores(this.medidorRepository)
            .execute()
            .then(data => res.json(data))
            .catch(err => res.status(500).json({ err }))
    }

    registrarMedidor = (req: Request, res: Response) => {
        console.log(req.body)
        const [error, registerMedidorDto] = RegisterMedidorDto.create(req.body)
        if (error) return res.status(400).json({ error })


        new RegisterMedidor(this.medidorRepository)
            .execute(registerMedidorDto!)
            .then(data => {
                console.log(data)
                res.json(data)
            })
            .catch(err => res.status(500).json({ err }))
    }


    obtenerMedidor = (req: Request, res: Response) => {
        new GetMedidor( this.medidorRepository )
            .execute({id: req.params.id})
            .then( data => res.json( data ))
            .catch( err => res.status(500).json({ err }))
    }

  
    actualizarMedidor = (req: Request, res: Response) => {
        const [error, registerMedidorDto] = RegisterMedidorDto.create( req.body )
        if( error ) return res.status(400).json({ error })

        new UpdateMedidor( this.medidorRepository )
            .execute({id: req.params.id}, registerMedidorDto!)
            .then( data => res.json( data ))
            .catch( err => res.status(500).json({ err }))
    }
    eliminarMedidor = (req: Request, res: Response) => {
        new DeleteMedidor( this.medidorRepository )
            .execute({id: req.params.id})
            .then( data => res.json( data ))
            .catch( err => res.status(500).json({ err }))
    }
    
}