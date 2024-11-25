import { RegisterCatastroDto } from "../../../../src/domain";
const adquisicionData=
[
{
    codigo_usuario: 1010,
    categoria_suscripcion: "local",
    id_cliente: 1,
    id_ubicacion: 1,
    id_inmueble: 1,
    id_medidor: 1,
    id_puntos_agua: 1
}
]
describe('RegisterAdquisicionDto',()=>{

    test('crear catastro con datos completos',()=>{
        const resultado=RegisterCatastroDto.create(adquisicionData)
    
        expect(resultado[1]).toBeUndefined();
        //expect(resultado[0]).toContain("El nombre");
       });

   test('crear catastro con datos nulos',()=>{
    const resultado=RegisterCatastroDto.create([{
        a:"as"
    }])

    expect(resultado[1]).toBeUndefined();
    //expect(resultado[0]).toContain("El nombre");
   });
})