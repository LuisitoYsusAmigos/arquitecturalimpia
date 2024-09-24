import { Request, Response } from "express";
import { GetAllUsuarios, RegisterUsuarioDto, UsuarioRepository, RegisterUsuario, GetUsuario, UpdateUsuario, DeleteUsuario  } from "../../domain";




export class UsuarioController {

    constructor(
        private readonly usuarioRepository: UsuarioRepository
    ) { }

    obtenerUsuarios = (req: Request, res: Response) => {
        new GetAllUsuarios(this.usuarioRepository)
            .execute()
            .then(data => res.json(data))
            .catch(err => res.status(500).json({ err }))
    }

    registrarUsuario = (req: Request, res: Response) => {
        console.log(req.body)
        const [error, registerUsuarioDto] = RegisterUsuarioDto.create(req.body)
        if (error) return res.status(400).json({ error })

        new RegisterUsuario(this.usuarioRepository)
            .execute(registerUsuarioDto!)
            .then(data => {
                console.log(data)
                res.json(data)
            })
            .catch(err => res.status(500).json({ err }))
    }


    obtenerUsuario = (req: Request, res: Response) => {
        new GetUsuario( this.usuarioRepository )
            .execute({id: req.params.id})
            .then( data => res.json( data ))
            .catch( err => res.status(500).json({ err }))
    }

  
    actualizarUsuario = (req: Request, res: Response) => {
        const [error, registerUsuarioDto] = RegisterUsuarioDto.create( req.body )
        if( error ) return res.status(400).json({ error })

        new UpdateUsuario( this.usuarioRepository )
            .execute({id: req.params.id}, registerUsuarioDto!)
            .then( data => res.json( data ))
            .catch( err => res.status(500).json({ err }))
    }
    eliminarUsuario = (req: Request, res: Response) => {
        new DeleteUsuario( this.usuarioRepository )
            .execute({id: req.params.id})
            .then( data => res.json( data ))
            .catch( err => res.status(500).json({ err }))
    }
    
}