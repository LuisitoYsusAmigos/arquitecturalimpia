import { envs } from "./config/envs";
import { AppRoutes } from "./presentation/routes";
import { Server } from "./presentation/server";

(() => {
    main();
})();

async function main() {
    
    try {
        new Server({
            port: 3000,
            //port: envs.PORT,
            routes: AppRoutes.routes
        }).start();
    } catch (error) {
        throw new Error('La base de datos no se inicializo')
    }  
}