import { RegisterUbicacionDto } from "../../../../src/domain";
const Data=
[
{
    localidad:"san lorenzo",
    municipio:"cercado",
    provincia:"estado",
    zona:"sud",
    calle:"av circunvacion",
    material_via:"tierra",
    material_acera:"madera"
}
]
describe('RegisterAdquisicionDto',()=>{

    test('crear ubicacion con datos completos',()=>{
        const resultado=RegisterUbicacionDto.create(Data)
    
        expect(resultado[1]).toBeUndefined();
        //expect(resultado[0]).toContain("El nombre");
       });

   test('crear ubicacion con datos nulos',()=>{
    const resultado=RegisterUbicacionDto.create([{
        a:"as"
    }])

    expect(resultado[1]).toBeUndefined();
    //expect(resultado[0]).toContain("El nombre");
   });
})