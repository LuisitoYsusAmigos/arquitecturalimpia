import { Router } from "express"

import { LecturaController } from "./controller"
import { LecturaDatasourceImpl, LecturaRepositoryImpl } from "../../infrastructure"



export class LecturaRoutes{
    static get routes(): Router{

        const router = Router()

        const database = new LecturaDatasourceImpl()

        const LecturaRepository = new LecturaRepositoryImpl( database )

        const controller = new LecturaController( LecturaRepository )

        router.post('/create', controller.registrarLectura)
        router.get('/index', controller.obtenerLecturas)
        router.put('/edit/:id', controller.obtenerLectura)
        router.post('/update/:id', controller.actualizarLectura)
        router.delete('/delete/:id', controller.eliminarLectura)
        router.get('/usuariosLecturas', controller.obtenerUsuariosLecturas)
        router.get('/lecturasCatastro/:id', controller.obtenerLecturasCatastro)
        router.get('/lecturasCatastroNoPagado/:id', controller.obtenerLecturasCatastroNoPagado)
        router.post('/update/:id', controller.actualizarLectura)
        router.get('/datosRegistroLectura/:id', controller.obtenerDatosRegistroLectura)
        
        return router
    }
}