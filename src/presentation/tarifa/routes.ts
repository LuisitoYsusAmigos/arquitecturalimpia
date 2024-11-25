import { Router } from "express"

import { TarifaController } from "./controller"
import { TarifaDatasourceImpl, TarifaRepositoryImpl } from "../../infrastructure"



export class TarifaRoutes{
    static get routes(): Router{

        const router = Router()

        const database = new TarifaDatasourceImpl()

        const tarifaRepository = new TarifaRepositoryImpl( database )

        const controller = new TarifaController( tarifaRepository )

        router.post('/create', controller.registrarTarifa)
        router.get('/index', controller.obtenerTarifas)
        router.put('/edit/:id', controller.obtenerTarifa)
        router.post('/update/:id', controller.actualizarTarifa)
        router.delete('/delete/:id', controller.eliminarTarifa)

        return router
    }
}