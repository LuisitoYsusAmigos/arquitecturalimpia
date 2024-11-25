import { RegisterPuntosAguaDto } from "../../../../src/domain";
const Data=
[
{
    pileta_patio: "1",
    lavanderia: "1",
    lava_platos: "1",
    inodoro: "1",
    ducha: "1",
    lava_manos: "1",
    tina: "1",
    otros: "1",
    observaciones: "puntos de agua completos"
}
]
describe('RegisterAdquisicionDto',()=>{

    test('crear PuntosAgua con datos completos',()=>{
        const resultado=RegisterPuntosAguaDto.create(Data)
    
        expect(resultado[1]).toBeUndefined();
        //expect(resultado[0]).toContain("El nombre");
       });

   test('crear PuntosAgua con datos nulos',()=>{
    const resultado=RegisterPuntosAguaDto.create([{
        a:"as"
    }])

    expect(resultado[1]).toBeUndefined();
    //expect(resultado[0]).toContain("El nombre");
   });
})