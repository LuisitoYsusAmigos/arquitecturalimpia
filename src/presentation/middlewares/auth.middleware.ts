import { NextFunction, Request, Response } from "express";
import { JwtAdapter } from "../../config";


export class AuthMiddleware {

    static validateJwt = async (request: Request, response: Response, next: NextFunction) => {
        try {
            const accessToken = request.headers.authorization?.split(' ')[1]
            if (!accessToken) response.send('Acceso Denegado')
            else{
                const validacion = await JwtAdapter.validateToken(accessToken!)
                if (validacion == null) response.send('Acceso Denegado Token expirado o incorrecto')
                else next()
            }
            
        } catch (error) {
            response.status(500).json({ error: 'Internal Server Error' })
        }
    }
}