import { Router } from "express"

import { MedidorController } from "./controller"
import { MedidorDatasourceImpl, MedidorRepositoryImpl } from "../../infrastructure"



export class MedidorRoutes{
    static get routes(): Router{

        const router = Router()

        const database = new MedidorDatasourceImpl()

        const MedidorRepository = new MedidorRepositoryImpl( database )

        const controller = new MedidorController( MedidorRepository )

        router.post('/create', controller.registrarMedidor)
        router.get('/index', controller.obtenerMedidors)
        router.put('/edit/:id', controller.obtenerMedidor)
        router.post('/update/:id', controller.actualizarMedidor)
        router.delete('/delete/:id', controller.eliminarMedidor)

        return router
    }
}