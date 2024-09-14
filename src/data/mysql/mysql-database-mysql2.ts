import { Pool, ResultSetHeader, RowDataPacket, createPool } from "mysql2/promise";

export class Database {

    private static instance: Pool

    static createConection(): Pool {
        try {
            if (!Database.instance) {
                Database.instance = createPool({
                    host: "localhost",
                    user: "root",
                    password: "",
                    port: 3306,
                    database: "clean"
                });
            }
            return Database.instance
        } catch (error) {
            throw new Error('No se pudo inicializar la base de datos')
        }
    }

    static async listar(query: string) {
        
        const pool = this.createConection()
        const [rows] = await pool.query<RowDataPacket[]>(query);
        //console.log("error al llamar")
        return rows
    }


    static async insertar(query: string, value: [{ [key: string]: any }]): Promise<boolean> {
        try {
            const pool = this.createConection()
            await pool.query<RowDataPacket[]>(query, value);
            return true
        } catch (error) {
            console.log(error)
            return false
        }
    }

    static async editar(query: string, id: string) {
        const pool = this.createConection()
        const [result] = await pool.query<RowDataPacket[]>(query, [id])
        return result
    }

    static async actualizar(query: string, value: [{ [key: string]: any }, id: string]) {
        try {
            const pool = this.createConection()
            const [result] = await pool.query<ResultSetHeader>(query, value);
            if (result.affectedRows > 0) return true
            return false
        } catch (error) {
            console.log("error de mysql!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
            console.log(error)
            return false
        }
    }

    static async eliminar(query: string, id: string): Promise<boolean> {
        try {
            const pool = this.createConection()
            const [result] = await pool.query<ResultSetHeader>(query, [id]);
            if (result.affectedRows > 0) return true
            return false
        } catch (error) {
            return false
        }
    }

    static async verificar(query: string, id: string) {
        const pool = this.createConection()
        const [rows] = await pool.query<RowDataPacket[]>(query, [id]);
        return rows
    }
}
