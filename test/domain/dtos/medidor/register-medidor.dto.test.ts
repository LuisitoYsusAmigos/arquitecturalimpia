import { RegisterMedidorDto } from "../../../../src/domain";
const Data=
[
{
    numero_medidor: "101010",
    diametro_tuberia: 1.5,
    marca_medidor: "marca Generica",
    lectura_actual_medidor: 10,
    tipo_medidor: "analogico",
    localizacion_caja: "afuera",
    estado_medidor: 1
}
]
describe('RegisterAdquisicionDto',()=>{

    test('crear medidor con datos completos',()=>{
        const resultado=RegisterMedidorDto.create(Data)
    
        expect(resultado[1]).toBeUndefined();
        //expect(resultado[0]).toContain("El nombre");
       });

   test('crear medidor con datos nulos',()=>{
    const resultado=RegisterMedidorDto.create([{
        a:"as"
    }])

    expect(resultado[1]).toBeUndefined();
    //expect(resultado[0]).toContain("El nombre");
   });
})