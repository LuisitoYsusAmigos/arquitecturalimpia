import { RegisterInmuebleDto } from "../../../../src/domain";
const Data=
[
{
    n_familia: 2,
    n_persona: 3,
    n_habitaciones: 3,
    servicio_de_agua: 1,
    servicio_alcantarillado: 0,
    servicio_recojo_basura: 1
}
]
describe('RegisterAdquisicionDto',()=>{

    test('crear inmueble con datos completos',()=>{
        const resultado=RegisterInmuebleDto.create(Data)
    
        expect(resultado[1]).toBeUndefined();
        //expect(resultado[0]).toContain("El nombre");
       });

   test('crear inmueble con datos nulos',()=>{
    const resultado=RegisterInmuebleDto.create([{
        a:"as"
    }])

    expect(resultado[1]).toBeUndefined();
    //expect(resultado[0]).toContain("El nombre");
   });
})