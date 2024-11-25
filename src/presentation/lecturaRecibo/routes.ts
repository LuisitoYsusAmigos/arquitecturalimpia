import { Router } from "express"

import { LecturaReciboController } from "./controller"
import { LecturaReciboDatasourceImpl, LecturaReciboRepositoryImpl } from "../../infrastructure"



export class LecturaReciboRoutes{
    static get routes(): Router{

        const router = Router()

        const database = new LecturaReciboDatasourceImpl()

        const LecturaReciboRepository = new LecturaReciboRepositoryImpl( database )

        const controller = new LecturaReciboController( LecturaReciboRepository )

        router.post('/create', controller.registrarLecturaRecibo)
        router.get('/index', controller.obtenerLecturaRecibos)
        router.put('/edit/:id', controller.obtenerLecturaRecibo)
        router.post('/update/:id', controller.actualizarLecturaRecibo)
        router.delete('/delete/:id', controller.eliminarLecturaRecibo)

        return router
    }
}