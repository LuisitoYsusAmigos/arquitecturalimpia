import { RegisterClienteDto } from "../../../../src/domain";
const Data=
[
{
    ci:"10700169",
    nombre: "Luis",
    apellidos: "Garcia",
    fecha_nacimiento:"2024/10/12",
    cel: "60273777",
    id_usuario:"1"
}
]
describe('RegisterAdquisicionDto',()=>{

    test('crear cliente con datos completos',()=>{
        const resultado=RegisterClienteDto.create(Data)
    
        expect(resultado[1]).toBeUndefined();
        //expect(resultado[0]).toContain("El nombre");
       });

   test('crear cliente con datos nulos',()=>{
    const resultado=RegisterClienteDto.create([{
        a:"as"
    }])

    expect(resultado[1]).toBeUndefined();
    //expect(resultado[0]).toContain("El nombre");
   });
})