import { Router } from "express"

import { UbicacionController } from "./controller"
import { UbicacionDatasourceImpl, UbicacionRepositoryImpl } from "../../infrastructure"



export class UbicacionRoutes{
    static get routes(): Router{

        const router = Router()

        const database = new UbicacionDatasourceImpl()

        const UbicacionRepository = new UbicacionRepositoryImpl( database )

        const controller = new UbicacionController( UbicacionRepository )

        router.post('/create', controller.registrarUbicacion)
        router.get('/index', controller.obtenerubicaciones)
        router.put('/edit/:id', controller.obtenerUbicacion)
        router.post('/update/:id', controller.actualizarUbicacion)
        router.delete('/delete/:id', controller.eliminarUbicacion)

        return router
    }
}