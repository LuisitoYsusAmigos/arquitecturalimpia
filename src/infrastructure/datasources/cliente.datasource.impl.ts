import { Database } from "../../data/mysql";
import { UpdateClienteDto,RegisterClienteDto, ResponseApi, ClienteDatasource } from "../../domain";


export class ClienteDatasourceImpl implements ClienteDatasource {
    async insertarCliente(registerclienteDto: RegisterClienteDto): Promise<ResponseApi> {
        try {
            Database.insertar("INSERT INTO cliente set ?", [registerclienteDto])
            return ResponseApi.success(true, 'el cliente se registro correctamente')
        } catch (error) {
            return ResponseApi.error('el cliente no se pudo registrar')
        }
        
    }

    async obtenerClientes(): Promise<ResponseApi> {
        const clientes = await Database.listar(
            "SELECT * FROM ubicacion"
        )
        return ResponseApi.success(clientes, 'Listado de clientes exitoso')
    }

    async obtenerCliente(id: string): Promise<ResponseApi> {
        try {
            const cliente = await Database.editar("SELECT * FROM cliente WHERE id = ?", id)
            if (cliente.length <= 0) return ResponseApi.error('la cliente no existe')
            return ResponseApi.success(cliente, 'cliente recuperado exitosamente')
        } catch (error) {
            return ResponseApi.error('La cliente no se pudo encontrar')
        }
    }

    async  actualizarCliente(id: string, updateClienteDto: UpdateClienteDto): Promise<ResponseApi> {
        try {
            
            const cliente = await Database.verificar("SELECT * FROM cliente WHERE id = ?", id)
            if( cliente.length <= 0 ) return ResponseApi.error('El cliente no existe')
            /*
            const resultado = await Database.actualizar("UPDATE cliente set ? WHERE id = ?", 
            [
                {
                    
                    "nombres": registerusuarioDto.nombres,
                    "apellidos": registerusuarioDto.apellidos,
                    "edad":registerusuarioDto.edad
                }
                , id
            ])
            */
            const resultado = await Database.actualizar("UPDATE cliente set ? WHERE id = ?", [updateClienteDto , id])
            if( !resultado ) return ResponseApi.error('No existe el cliente a actualizar')
            return ResponseApi.success(true, "La cliente se actualizo exitosamente")
        } catch (error) {
            return ResponseApi.error("El cliente no se pudo actualizar")
        }
    }

    async eliminarCliente(id: string): Promise<ResponseApi> {
        try {
            const resultado = await Database.eliminar("DELETE FROM cliente WHERE id = ?", id)
            if( !resultado ) return ResponseApi.error("No existe la cliente a eliminar")
            return ResponseApi.success(true, 'cliente eliminado exitosamente')
        } catch (error) {
            return ResponseApi.error('La cliente no se pudo eliminar')
        }
        
    }


}