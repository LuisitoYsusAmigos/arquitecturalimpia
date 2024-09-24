import { Router } from "express"

import { UsuarioController } from "./controller"
import { UsuarioDatasourceImpl, UsuarioRepositoryImpl } from "../../infrastructure"



export class UsuarioRoutes{
    static get routes(): Router{

        const router = Router()

        const database = new UsuarioDatasourceImpl()

        const usuarioRepository = new UsuarioRepositoryImpl( database )

        const controller = new UsuarioController( usuarioRepository )

        router.post('/create', controller.registrarUsuario)
        router.get('/index', controller.obtenerUsuarios)
        router.put('/edit/:id', controller.obtenerUsuario)
        router.post('/update/:id', controller.actualizarUsuario)
        router.delete('/delete/:id', controller.eliminarUsuario)

        return router
    }
}