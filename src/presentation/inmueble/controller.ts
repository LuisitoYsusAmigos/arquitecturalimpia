import { Request, Response } from "express";
import { GetAllInmuebles, RegisterInmuebleDto, InmuebleRepository, RegisterInmueble, GetInmueble, UpdateInmueble, DeleteInmueble  } from "../../domain";




export class InmuebleController {

    constructor(
        private readonly inmuebleRepository: InmuebleRepository
    ) { }

    obtenerInmueblees = (req: Request, res: Response) => {
        new GetAllInmuebles(this.inmuebleRepository)
            .execute()
            .then(data => res.json(data))
            .catch(err => res.status(500).json({ err }))
    }

    registrarInmueble = (req: Request, res: Response) => {
        console.log(req.body)
        const [error, registerInmuebleDto] = RegisterInmuebleDto.create(req.body)
        if (error) return res.status(400).json({ error })

        new RegisterInmueble(this.inmuebleRepository)
            .execute(registerInmuebleDto!)
            .then(data => {
                console.log(data)
                res.json(data)
            })
            .catch(err => res.status(500).json({ err }))
    }


    obtenerInmueble = (req: Request, res: Response) => {
        new GetInmueble( this.inmuebleRepository )
            .execute({id: req.params.id})
            .then( data => res.json( data ))
            .catch( err => res.status(500).json({ err }))
    }

  
    actualizarInmueble = (req: Request, res: Response) => {
        const [error, registerInmuebleDto] = RegisterInmuebleDto.create( req.body )
        if( error ) return res.status(400).json({ error })

        new UpdateInmueble( this.inmuebleRepository )
            .execute({id: req.params.id}, registerInmuebleDto!)
            .then( data => res.json( data ))
            .catch( err => res.status(500).json({ err }))
    }
    eliminarInmueble = (req: Request, res: Response) => {
        new DeleteInmueble( this.inmuebleRepository )
            .execute({id: req.params.id})
            .then( data => res.json( data ))
            .catch( err => res.status(500).json({ err }))
    }
    
}