import { Router } from "express";
import { AuthMiddleware } from "./middlewares/auth.middleware";
import { AuthRoutes } from "./auth/routes";
import { UsuarioRoutes } from "./usuario/routes";
import { ClienteRoutes } from "./cliente/routes";
import { UbicacionRoutes } from "./ubicacion/routes";
import { InmuebleRoutes } from "./inmueble/routes";
import { MedidorRoutes } from "./medidor/routes";
import { PuntosAguaRoutes } from "./puntosAgua/routes";
import { CatastroRoutes } from "./catastro/routes";
import { TarifaRoutes } from "./tarifa/routes";
import { LecturaRoutes } from "./lectura/routes";
import { ReciboRoutes } from "./recibo/routes";
import { LecturaReciboRoutes } from "./lecturaRecibo/routes"; 
export class AppRoutes{
    static get routes(): Router{
        const router = Router();
        router.use('/auth', AuthRoutes.routes);
        router.use('/usuario', UsuarioRoutes.routes);
        router.use('/cliente', ClienteRoutes.routes);
        router.use('/ubicacion', UbicacionRoutes.routes);
        router.use('/inmueble', InmuebleRoutes.routes);
        router.use('/medidor', MedidorRoutes.routes);
        router.use('/medidor', MedidorRoutes.routes);
        router.use('/puntosAgua', PuntosAguaRoutes.routes);
        router.use('/catastro', CatastroRoutes.routes);
        router.use('/tarifa', TarifaRoutes.routes);
        router.use('/lectura', LecturaRoutes.routes);
        router.use('/recibo', ReciboRoutes.routes);
        router.use('/lecturaRecibo', LecturaReciboRoutes.routes);
        return router;
    }
}