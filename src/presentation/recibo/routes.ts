import { Router } from "express"

import { ReciboController } from "./controller"
import { ReciboDatasourceImpl, ReciboRepositoryImpl } from "../../infrastructure"



export class ReciboRoutes{
    static get routes(): Router{

        const router = Router()

        const database = new ReciboDatasourceImpl()

        const ReciboRepository = new ReciboRepositoryImpl( database )

        const controller = new ReciboController( ReciboRepository )

        router.post('/create', controller.registrarRecibo)
        router.get('/index', controller.obtenerRecibos)
        router.put('/edit/:id', controller.obtenerRecibo)
        router.get('/detalleRecibo/:id', controller.obtenerDetallesRecibo)
        router.post('/update/:id', controller.actualizarRecibo)
        router.delete('/delete/:id', controller.eliminarRecibo)
        router.get('/obtenerReciboIdMax', controller.obtenerReciboIdMax)
        

        return router
    }
}