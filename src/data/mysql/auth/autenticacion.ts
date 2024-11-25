import { Database } from "../mysql-database-mysql2";
import { RowDataPacket } from "mysql2/promise";

export class Autenticacion{
    static async VerificarUsuario(query: string, ci: string){
        const pool = Database.createConection()
        const [result] = await pool.query<RowDataPacket[]>(query, [ci])
        return result
    }
    static async VerificarUsuarioPassword(query: string, ci: string, password: string){
        const pool = Database.createConection()
        const [result] = await pool.query<RowDataPacket[]>(query, [ci, password])
        return result
    }
}

