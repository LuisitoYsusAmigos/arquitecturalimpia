import { RegisterUsuarioDto, ResponseApi } from "..";


export abstract class AuthRepository{
    abstract login(ci: string, password: string): Promise<ResponseApi>

    abstract register(userDto: RegisterUsuarioDto): Promise<ResponseApi>
}