import { Router } from "express"

import { PuntosAguaController } from "./controller"
import { PuntosAguaDatasourceImpl, PuntosAguaRepositoryImpl } from "../../infrastructure"



export class PuntosAguaRoutes{
    static get routes(): Router{

        const router = Router()

        const database = new PuntosAguaDatasourceImpl()

        const PuntosAguaRepository = new PuntosAguaRepositoryImpl( database )

        const controller = new PuntosAguaController( PuntosAguaRepository )

        router.post('/create', controller.registrarPuntosAgua)
        router.get('/index', controller.obtenerPuntosAguas)
        router.put('/edit/:id', controller.obtenerPuntosAgua)
        router.post('/update/:id', controller.actualizarPuntosAgua)
        router.delete('/delete/:id', controller.eliminarPuntosAgua)

        return router
    }
}