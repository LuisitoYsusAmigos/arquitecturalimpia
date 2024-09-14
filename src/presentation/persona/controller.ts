import { Request, Response } from "express";
import { GetAllPersonas, RegisterPersonaDto, PersonaRepository, RegisterPersona, GetPersona, UpdatePersona, DeletePersona  } from "../../domain";




export class PersonaController {

    constructor(
        private readonly personaRepository: PersonaRepository
    ) { }

    obtenerPersonas = (req: Request, res: Response) => {
        new GetAllPersonas(this.personaRepository)
            .execute()
            .then(data => res.json(data))
            .catch(err => res.status(500).json({ err }))
    }

    registrarPersona = (req: Request, res: Response) => {
        console.log(req.body)
        const [error, registerPersonaDto] = RegisterPersonaDto.create(req.body)
        if (error) return res.status(400).json({ error })

        new RegisterPersona(this.personaRepository)
            .execute(registerPersonaDto!)
            .then(data => {
                console.log(data)
                res.json(data)
            })
            .catch(err => res.status(500).json({ err }))
    }


    obtenerPersona = (req: Request, res: Response) => {
        new GetPersona( this.personaRepository )
            .execute({id: req.params.id})
            .then( data => res.json( data ))
            .catch( err => res.status(500).json({ err }))
    }

  
    actualizarPersona = (req: Request, res: Response) => {
        const [error, registerPersonaDto] = RegisterPersonaDto.create( req.body )
        if( error ) return res.status(400).json({ error })

        new UpdatePersona( this.personaRepository )
            .execute({id: req.params.id}, registerPersonaDto!)
            .then( data => res.json( data ))
            .catch( err => res.status(500).json({ err }))
    }
    eliminarPersona = (req: Request, res: Response) => {
        new DeletePersona( this.personaRepository )
            .execute({id: req.params.id})
            .then( data => res.json( data ))
            .catch( err => res.status(500).json({ err }))
    }
    
}