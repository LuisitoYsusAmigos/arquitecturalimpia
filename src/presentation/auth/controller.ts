import { Request, Response } from "express"
import { AuthRepository, RegisterAuthDto, ResponseApi } from "../../domain";
import { Login } from "../../domain/use-cases/auth/login.use-case";
import { JwtAdapter } from "../../config";



export class AuthController {
    constructor(
        private readonly authRepository: AuthRepository
    ) {}

    login = async(req: Request, res: Response) => {

        const [error, registerAuthDto] = RegisterAuthDto.create( req.body )
        if( error ) return res.status(400).json({ error })

        const valores = await new Login( this.authRepository )
            .execute({ci: registerAuthDto?.ci!, password: registerAuthDto?.password!})

        if( !valores.status ) return res.json( valores )
        else
        {
            res.json( valores )
            // const token = valores.value.token
            // const [usuario] = valores.value.usuario
            // const response = ResponseApi.success( usuario, "Usuario validado exitosamente")
            // return res.setHeader('Authorization', 'Bearer ' + token).json( response )
        }
             
    }
    validate = async (req: Request, res: Response) => {
        const tovalidate = req.body.token;

        try {
            const isValid = await JwtAdapter.validateToken(tovalidate);
            
            if (isValid) {
                return res.json({ success: true, message: "Token validado exitosamente" });
            } else {
                return res.status(401).json({ success: false, message: "Token no válido o expirado" });
            }
        } catch (error) {
            return res.status(500).json({ success: false, message: "Error en la validación del token" });
        }
    }
}