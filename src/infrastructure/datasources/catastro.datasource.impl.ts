import { Database } from "../../data/mysql";
import { UpdateCatastroDto, RegisterCatastroDto, ResponseApi, CatastroDatasource } from "../../domain";


export class CatastroDatasourceImpl implements CatastroDatasource {
    async insertarCatastro(registerCatastroDto: RegisterCatastroDto): Promise<ResponseApi> {
        try {
            Database.insertar("INSERT INTO catastro set ?", [registerCatastroDto])
            return ResponseApi.success(true, 'el Catastro se registro correctamente')
        } catch (error) {
            return ResponseApi.error('el catastro no se pudo registrar')
        }

    }

    async obtenerCatastros(): Promise<ResponseApi> {
        const catastros = await Database.listar(
            "SELECT * FROM catastro"
        )
        return ResponseApi.success(catastros, 'Listado de catastro exitoso')
    }
    //
    async obtenerResumenCatastro(): Promise<ResponseApi> {
        const catastros = await Database.listar(
            "SELECT c.id, c.codigo_usuario, c.categoria_suscripcion, cl.ci AS ci_cliente, u.localidad AS localidad_ubicacion, m.numero_medidor, m.estado_medidor, p.observaciones AS observaciones_puntos_agua FROM catastro c JOIN cliente cl ON c.id_cliente = cl.id JOIN ubicacion u ON c.id_ubicacion = u.id JOIN medidor m ON c.id_medidor = m.id JOIN puntos_agua p ON c.id_puntos_agua = p.id;"
        )
        return ResponseApi.success(catastros, 'Listado de catastro exitoso')
    }
    async obtenerIdsRegistro(): Promise<ResponseApi> {
        const catastros = await Database.listar("SELECT (SELECT MAX(id) FROM ubicacion) AS max_ubicacion, (SELECT MAX(id) FROM inmueble) AS max_inmueble, (SELECT MAX(id) FROM medidor) AS max_medidor, (SELECT MAX(id) FROM puntos_agua) AS max_puntos_agua,  CASE  WHEN (SELECT MAX(id) FROM ubicacion) = (SELECT MAX(id) FROM inmueble) AND (SELECT MAX(id) FROM inmueble) = (SELECT MAX(id) FROM medidor)  AND (SELECT MAX(id) FROM medidor) = (SELECT MAX(id) FROM puntos_agua) THEN 1 ELSE 0 END AS sonIguales;")
        return ResponseApi.success(catastros, 'Listado de catastro exitoso')
    }

    async obtenerMatrizRegistro(): Promise<ResponseApi> {
        const catastros = await Database.listar("SELECT CASE WHEN EXISTS (SELECT 1 FROM ubicacion WHERE id NOT IN (SELECT id_ubicacion FROM catastro)) THEN 1 ELSE 0 END AS ubicacion,CASE WHEN EXISTS (SELECT 1 FROM inmueble WHERE id NOT IN (SELECT id_inmueble FROM catastro)) THEN 1 ELSE 0 END AS inmueble,CASE WHEN EXISTS (SELECT 1 FROM medidor WHERE id NOT IN (SELECT id_medidor FROM catastro)) THEN 1 ELSE 0 END AS medidor,    CASE WHEN EXISTS (SELECT 1 FROM puntos_agua WHERE id NOT IN (SELECT id_puntos_agua FROM catastro)) THEN 1 ELSE 0 END AS puntos_agua;")
         
        return ResponseApi.success(catastros, 'Listado de id para registrar catastro exitoso')
    }

    async obtenerCatastro(id: string): Promise<ResponseApi> {
        try {
            const Catastro = await Database.editar("SELECT * FROM catastro WHERE id = ?", id)
            if (Catastro.length <= 0) return ResponseApi.error('la catastro no existe')
            return ResponseApi.success(Catastro, 'catastro recuperado exitosamente')
        } catch (error) {
            return ResponseApi.error('La catastro no se pudo encontrar')
        }
    }

    async actualizarCatastro(id: string, createCatastroDto: RegisterCatastroDto): Promise<ResponseApi> {
        try {

            const Catastro = await Database.verificar("SELECT * FROM catastro WHERE id = ?", id)
            if (Catastro.length <= 0) return ResponseApi.error('El catastro no existe')

            const resultado = await Database.actualizar("UPDATE catastro set ? WHERE id = ?", [createCatastroDto, id])
            if (!resultado) return ResponseApi.error('No existe el catastro a actualizar')
            return ResponseApi.success(true, "La catastro se actualizo exitosamente")
        } catch (error) {
            return ResponseApi.error("El catastro no se pudo actualizar")
        }
    }

    async eliminarCatastro(id: string): Promise<ResponseApi> {
        try {
            const resultado = await Database.eliminar("DELETE FROM catastro WHERE id = ?", id)
            if (!resultado) return ResponseApi.error("No existe la catastro a eliminar")
            return ResponseApi.success(true, 'catastro eliminado exitosamente')
        } catch (error) {
            return ResponseApi.error('La catastro no se pudo eliminar')
        }

    }
    


}