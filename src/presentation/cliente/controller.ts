import { Request, Response } from "express";
import { GetAllClientes, RegisterClienteDto, ClienteRepository, RegisterCliente, GetCliente, UpdateCliente, DeleteCliente  } from "../../domain";




export class ClienteController {

    constructor(
        private readonly clienteRepository: ClienteRepository
    ) { }

    obtenerClientes = (req: Request, res: Response) => {
        new GetAllClientes(this.clienteRepository)
            .execute()
            .then(data => res.json(data))
            .catch(err => res.status(500).json({ err }))
    }

    registrarCliente = (req: Request, res: Response) => {
        console.log(req.body)
        const [error, registerClienteDto] = RegisterClienteDto.create(req.body)
        if (error) return res.status(400).json({ error })

        new RegisterCliente(this.clienteRepository)
            .execute(registerClienteDto!)
            .then(data => {
                console.log(data)
                res.json(data)
            })
            .catch(err => res.status(500).json({ err }))
    }


    obtenerCliente = (req: Request, res: Response) => {
        new GetCliente( this.clienteRepository )
            .execute({id: req.params.id})
            .then( data => res.json( data ))
            .catch( err => res.status(500).json({ err }))
    }

  
    actualizarCliente = (req: Request, res: Response) => {
        const [error, registerClienteDto] = RegisterClienteDto.create( req.body )
        if( error ) return res.status(400).json({ error })

        new UpdateCliente( this.clienteRepository )
            .execute({id: req.params.id}, registerClienteDto!)
            .then( data => res.json( data ))
            .catch( err => res.status(500).json({ err }))
    }
    eliminarCliente = (req: Request, res: Response) => {
        new DeleteCliente( this.clienteRepository )
            .execute({id: req.params.id})
            .then( data => res.json( data ))
            .catch( err => res.status(500).json({ err }))
    }
    
}