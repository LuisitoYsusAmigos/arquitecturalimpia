import { Router } from "express"
import { AuthDatasourceImpl, AuthRepositoryImpl } from "../../infrastructure"
import { AuthController } from "./controller"



export class AuthRoutes{
    static get routes(): Router{

        const router = Router()

        const database = new AuthDatasourceImpl()
        const authRepository = new AuthRepositoryImpl( database )


        const controller = new AuthController( authRepository )

        router.post('/login', controller.login)
        //const token="dasdsa"
        router.post('/', controller.validate)
        
        return router
    }
}