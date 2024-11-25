import { AuthDatasource, AuthRepository, RegisterUsuarioDto, ResponseApi } from "../../domain";


export class AuthRepositoryImpl implements AuthRepository{

    constructor(
        private readonly authDatasource: AuthDatasource
    ){}

    login(ci: string, password: string): Promise<ResponseApi> {
        return this.authDatasource.login(ci, password)
    }
    register(userDto: RegisterUsuarioDto): Promise<ResponseApi> {
        throw new Error("Method not implemented.");
    }

}