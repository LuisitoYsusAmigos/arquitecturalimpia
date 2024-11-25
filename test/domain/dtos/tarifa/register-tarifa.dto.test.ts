import { RegisterTarifaDto } from "../../../../src/domain";
const Data=
[
{
    rango:"10,20,30",
    costo:"12,15,29",
    fecha:"2024/09/12",
    id_usuario: 1,
}
]
describe('RegisterAdquisicionDto',()=>{

    test('crear Tarifa con datos completos',()=>{
        const resultado=RegisterTarifaDto.create(Data)
    
        expect(resultado[1]).toBeUndefined();
        //expect(resultado[0]).toContain("El nombre");
       });

   test('crear Tarifa con datos nulos',()=>{
    const resultado=RegisterTarifaDto.create([{
        a:"as"
    }])

    expect(resultado[1]).toBeUndefined();
    //expect(resultado[0]).toContain("El nombre");
   });
})