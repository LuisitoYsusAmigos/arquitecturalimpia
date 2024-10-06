import { Router } from "express"

import { CatastroController } from "./controller"
import { CatastroDatasourceImpl, CatastroRepositoryImpl } from "../../infrastructure"



export class CatastroRoutes{
    static get routes(): Router{

        const router = Router()

        const database = new CatastroDatasourceImpl()

        const CatastroRepository = new CatastroRepositoryImpl( database )

        const controller = new CatastroController( CatastroRepository )

        router.post('/create', controller.registrarCatastro)
        router.get('/index', controller.obtenerCatastros)
        router.put('/edit/:id', controller.obtenerCatastro)
        router.post('/update/:id', controller.actualizarCatastro)
        router.delete('/delete/:id', controller.eliminarCatastro)
        router.get('/getMatrizRegistro', controller.obtenerMatrizRegistro)
        router.get('/getallIdRegistro', controller.obtenerIdsRegistro)
        router.get('/getResumenCatastro', controller.obtenerResumenCatastro)
        

        return router
    }
}