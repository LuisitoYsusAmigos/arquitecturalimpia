import { Request, Response } from "express";
import { GetAllIdRegistro,GetAllCatastros,GetResumenCatastro, RegisterCatastroDto, CatastroRepository, RegisterCatastro, GetCatastro, UpdateCatastro, DeleteCatastro, GetMatrizRegistro  } from "../../domain";




export class CatastroController {

    constructor(
        private readonly catastroRepository: CatastroRepository
    ) { }

    obtenerResumenCatastro = (req: Request, res: Response) => {
        new GetResumenCatastro(this.catastroRepository)
            .execute()
            .then(data => res.json(data))
            .catch(err => res.status(500).json({ err }))
    }

    obtenerCatastros = (req: Request, res: Response) => {
        new GetAllCatastros(this.catastroRepository)
            .execute()
            .then(data => res.json(data))
            .catch(err => res.status(500).json({ err }))
    }
    obtenerIdsRegistro = (req: Request, res: Response) => {
        new GetAllIdRegistro(this.catastroRepository)
            .execute()
            .then(data => res.json(data))
            .catch(err => res.status(500).json({ err }))
    }
    


    obtenerMatrizRegistro = (req: Request, res: Response) => {
        new GetMatrizRegistro(this.catastroRepository)
            .execute()
            .then(data => res.json(data))
            .catch(err => res.status(500).json({ err }))
    }

    registrarCatastro = (req: Request, res: Response) => {
        console.log(req.body)
        
        const [error, registerCatastroDto] = RegisterCatastroDto.create(req.body)
        if (error) return res.status(400).json({ error })

        new RegisterCatastro(this.catastroRepository)
            .execute(registerCatastroDto!)
            .then(data => {
                console.log(data)
                res.json(data)
            })
            .catch(err => res.status(500).json({ err }))
    }


    obtenerCatastro = (req: Request, res: Response) => {
        new GetCatastro( this.catastroRepository )
            .execute({id: req.params.id})
            .then( data => res.json( data ))
            .catch( err => res.status(500).json({ err }))
    }

  
    actualizarCatastro = (req: Request, res: Response) => {
        
        const [error, registerCatastroDto] = RegisterCatastroDto.create( req.body )
        if( error ) return res.status(400).json({ error })

        new UpdateCatastro( this.catastroRepository )
            .execute({id: req.params.id}, registerCatastroDto!)
            .then( data => res.json( data ))
            .catch( err => res.status(500).json({ err }))
    }
    eliminarCatastro = (req: Request, res: Response) => {
        new DeleteCatastro( this.catastroRepository )
            .execute({id: req.params.id})
            .then( data => res.json( data ))
            .catch( err => res.status(500).json({ err }))
    }
    
}