import { Router } from "express"

import { ClienteController } from "./controller"
import { ClienteDatasourceImpl, ClienteRepositoryImpl } from "../../infrastructure"



export class ClienteRoutes{
    static get routes(): Router{

        const router = Router()

        const database = new ClienteDatasourceImpl()

        const clienteRepository = new ClienteRepositoryImpl( database )

        const controller = new ClienteController( clienteRepository )

        router.post('/create', controller.registrarCliente)
        router.get('/index', controller.obtenerClientes)
        router.put('/edit/:id', controller.obtenerCliente)
        router.post('/update/:id', controller.actualizarCliente)
        router.delete('/delete/:id', controller.eliminarCliente)

        return router
    }
}