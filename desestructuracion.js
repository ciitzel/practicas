const empresa ={
    nombre:'pepsi',
    direccion:'calle',
    rl:'calle'
}

//const nombre = empresa.nombre;
//const direccion = empresa.direccion;
//const rol = empresa.rol;

const {nombre, direccion, rol} = empresa;
console.log(nombre);
console.log(rol);

const imprimeEmpresa = ({nombre, rol}) =>{
    console.log({nombre,rol});
}

imprimeEmpresa(empresa);


const carros =['mazda','bmw','porche'] ;
const c1 = carros [0];
const [e1,e2,e3] = carros;

console.log(e1);

//const perfil = ['nombre','apellido', 'correo', 'salario'];

const perperfil = ({nombre, salario}) =>{
    console.log({nombre,salario});
}

console.log(e1);

const perfil = {
    nombre:'cit',
    apellido:'barrera', 
    correo:'prueba@gmail.com', 
    salario:'100'}


const imprimePerfil = ({nombre,salario}) =>{
    console.log({nombre,salario});
}

console.log(perfil);