import { Router } from "express"

import { InmuebleController } from "./controller"
import { InmuebleDatasourceImpl, InmuebleRepositoryImpl } from "../../infrastructure"



export class InmuebleRoutes{
    static get routes(): Router{

        const router = Router()

        const database = new InmuebleDatasourceImpl()

        const InmuebleRepository = new InmuebleRepositoryImpl( database )

        const controller = new InmuebleController( InmuebleRepository )

        router.post('/create', controller.registrarInmueble)
        router.get('/index', controller.obtenerInmueblees)
        router.put('/edit/:id', controller.obtenerInmueble)
        router.post('/update/:id', controller.actualizarInmueble)
        router.delete('/delete/:id', controller.eliminarInmueble)

        return router
    }
}