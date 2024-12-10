import { Router } from "express"

import { EgresoController } from "./controller"
import { EgresoDatasourceImpl, EgresoRepositoryImpl } from "../../infrastructure"



export class EgresoRoutes{
    static get routes(): Router{

        const router = Router()

        const database = new EgresoDatasourceImpl()

        const EgresoRepository = new EgresoRepositoryImpl( database )

        const controller = new EgresoController( EgresoRepository )

        router.post('/create', controller.registrarEgreso)
        router.get('/index', controller.obtenerEgresos)
        router.put('/edit/:id', controller.obtenerEgreso)
        router.post('/update/:id', controller.actualizarEgreso)
        router.delete('/delete/:id', controller.eliminarEgreso)
        router.get('/getMonth/:id', controller.obtenerMes)
        return router
    }
}