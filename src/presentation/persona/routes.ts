import { Router } from "express"

import { PersonaController } from "./controller"
import { PersonaDatasourceImpl, PersonaRepositoryImpl } from "../../infrastructure"



export class PersonaRoutes{
    static get routes(): Router{

        const router = Router()

        const database = new PersonaDatasourceImpl()

        const usuarioRepository = new PersonaRepositoryImpl( database )

        const controller = new PersonaController( usuarioRepository )

        router.post('/create', controller.registrarPersona)
        router.get('/index', controller.obtenerPersonas)
        router.put('/edit/:id', controller.obtenerPersona)
        router.post('/update/:id', controller.actualizarPersona)
        router.delete('/delete/:id', controller.eliminarPersona)

        return router
    }
}