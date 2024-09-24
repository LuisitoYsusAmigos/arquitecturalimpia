import { Router } from "express";
import { UsuarioRoutes } from "./usuario/routes";
import { ClienteRoutes } from "./cliente/routes";
import { UbicacionRoutes } from "./ubicacion/routes";
import { InmuebleRoutes } from "./inmueble/routes";
import { MedidorRoutes } from "./medidor/routes";
export class AppRoutes{
    static get routes(): Router{

        const router = Router();
        router.use('/usuario', UsuarioRoutes.routes);
        router.use('/cliente', ClienteRoutes.routes);
        router.use('/ubicacion', UbicacionRoutes.routes);
        router.use('/inmueble', InmuebleRoutes.routes);
        router.use('/medidor', MedidorRoutes.routes);
        return router;
    }
}