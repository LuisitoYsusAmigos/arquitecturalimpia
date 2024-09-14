import { Router } from "express";
import { PersonaRoutes } from "./persona/routes";
export class AppRoutes{
    static get routes(): Router{

        const router = Router();
        router.use('/persona', PersonaRoutes.routes);

        return router;
    }
}