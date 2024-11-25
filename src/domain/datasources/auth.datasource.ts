import { RegisterUsuarioDto, ResponseApi } from "..";


export abstract class AuthDatasource{
    abstract login(ci: string, password: string): Promise<ResponseApi>

    abstract register(userDto: RegisterUsuarioDto): Promise<ResponseApi>
}