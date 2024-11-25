import { RegisterUsuarioDto } from "../../../../src/domain";
const Data=
[
{
    ci:"10700169",
    password:"LuisEsElpassword",
    nombre:"Luis",
    apellidos:"Garcia Barja",
    fecha_nacimiento:"2001/12/06",
    cel:"60273777"
}
]
describe('RegisterUsuarioDto',()=>{

    test('crear usuario con datos completos',()=>{
        const resultado=RegisterUsuarioDto.create(Data)
    
        expect(resultado[1]).toBeUndefined();
        //expect(resultado[0]).toContain("El nombre");
       });

   test('crear usuario con datos nulos',()=>{
    const resultado=RegisterUsuarioDto.create([{
        a:"as"
    }])

    expect(resultado[1]).toBeUndefined();
    //expect(resultado[0]).toContain("El nombre");
   });
})