import { Database } from "../../data/mysql";
import { UpdateReciboDto,RegisterReciboDto, ResponseApi, ReciboDatasource } from "../../domain";


export class ReciboDatasourceImpl implements ReciboDatasource {
    async insertarRecibo(registerReciboDto: RegisterReciboDto): Promise<ResponseApi> {
        try {
            console.log("datos para insersion a db!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
            console.log(registerReciboDto)
            Database.insertar("INSERT INTO Recibo set ?", [registerReciboDto])
            return ResponseApi.success(true, 'la Recibo se registro correctamente')
        } catch (error) {
            return ResponseApi.error('La Recibo no se pudo registrar')
        }
        
    }

    async obtenerRecibos(): Promise<ResponseApi> {
        const Recibos = await Database.listar(
            "SELECT recibo.id, recibo.monto_total,recibo.fecha, CONCAT(usuario.nombre, ' ', usuario.apellidos) AS usuario, CONCAT(cliente.nombre, ' ', cliente.apellidos) AS cliente, COUNT(lectura_recibo.id) AS cantidad_lecturas_recibo FROM recibo JOIN usuario ON recibo.id_usuario = usuario.id JOIN lectura_recibo ON recibo.id = lectura_recibo.id_recibo JOIN lectura ON lectura_recibo.id_lectura = lectura.id JOIN catastro ON lectura.id_catastro = catastro.id JOIN cliente ON catastro.id_cliente = cliente.id GROUP BY recibo.id, usuario.nombre, usuario.apellidos, cliente.nombre, cliente.apellidos;")
        return ResponseApi.success(Recibos, 'Listado de Recibos exitoso')
    }

    async obtenerReciboIdMax(): Promise<ResponseApi> {
        const Recibos = await Database.listar(
            "SELECT MAX(id) AS id_recibo FROM recibo;")
        return ResponseApi.success(Recibos, 'Listado de Recibos exitoso')
    }

    async obtenerRecibo(id: string): Promise<ResponseApi> {
        try {
            const Recibo = await Database.editar("SELECT * FROM recibo WHERE id = ?", id)
            if (Recibo.length <= 0) return ResponseApi.error('la Recibo no existe')
            return ResponseApi.success(Recibo, 'Recibo recuperado exitosamente')
        } catch (error) {
            return ResponseApi.error('La Recibo no se pudo encontrar')
        }
    }
    async obtenerDetallesRecibo(id: string): Promise<ResponseApi> {
        try {
            const Recibo = await Database.editar("SELECT l.id AS lectura_id, l.fecha AS fecha_lectura, l.lectura_anterior, l.lectura_actual, l.consumo_m3, l.consumo_bs, l.pagado FROM lectura_recibo lr INNER JOIN lectura l ON lr.id_lectura = l.id WHERE lr.id_recibo = ?;", id)
            if (Recibo.length <= 0) return ResponseApi.error('la Recibo no existe')
            return ResponseApi.success(Recibo, 'Recibo recuperado exitosamente')
        } catch (error) {
            return ResponseApi.error('La Recibo no se pudo encontrar')
        }
    }

    async  actualizarRecibo(id: string, updateReciboDto: UpdateReciboDto): Promise<ResponseApi> {
        try {
            //console.log("Aqui esta el id!!!!!!!!!!!!!!!!!")
            //console.log(registerReciboDto.id)
            const Recibo = await Database.verificar("SELECT * FROM recibo WHERE id = ?", id)
            if( Recibo.length <= 0 ) return ResponseApi.error('El Recibo no existe')
            /*
            const resultado = await Database.actualizar("UPDATE Recibo set ? WHERE id = ?", 
            [
                {
                    
                    "nombres": registerReciboDto.nombres,
                    "apellidos": registerReciboDto.apellidos,
                    "edad":registerReciboDto.edad
                }
                , id
            ])
            */
            const resultado = await Database.actualizar("UPDATE recibo set ? WHERE id = ?", [updateReciboDto , id])
            if( !resultado ) return ResponseApi.error('No existe la Recibo a actualizar')
            return ResponseApi.success(true, "La Recibo se actualizo exitosamente")
        } catch (error) {
            return ResponseApi.error("La Recibo no se pudo actualizar")
        }
    }

    async eliminarRecibo(id: string): Promise<ResponseApi> {
        try {
            const resultado = await Database.eliminar("DELETE FROM recibo WHERE id = ?", id)
            if( !resultado ) return ResponseApi.error("No existe la Recibo a eliminar")
            return ResponseApi.success(true, 'Recibo eliminado exitosamente')
        } catch (error) {
            return ResponseApi.error('La Recibo no se pudo eliminar')
        }
        
    }


}