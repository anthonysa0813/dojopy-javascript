/* Objetos */

const person = {
  /* keys: value */
  name: "anthony",
  age: 25,
  nationality: "peruvian",
};

const producto = {
  nombre: "Laptop Lenovo Legion",
  precio: 2000,
  memoria: "16 gb ram",
  modelo: "Y540",
};

/* const {nombre_de_la_propierdades_del_objeto} = de_quién_sacaqueremos_dicha_información */
const { nombre, modelo } = producto;

console.log(producto.nombre); // Laptop Lenovo Legion
console.log(producto.precio); // 2000
console.log(producto.modelo); // Y540

/* const name = person.name
const age = person.age
*/

const { name, age, nationality } = person;

/* si queremos acceder al valor de name de mi objeto persona? */
/* console.log(name);
console.log(age);
console.log(person["name"]);
console.log(nationality);
console.log(person.name); */

/* onsole.log(Object.keys(person));
console.log(person.hasOwnProperty()); */
/* Destructuring */

/* arreglos */

const paises = ["lima", "CDMX", "santiago", "Buenos Aires", "Brasilia"];

console.log(paises[0]); // lima
console.log(paises[2]); // santiago

/* console.log(paises[2]);
console.log(paises[1]); */

/* for ( variables inicializador, condicion, aumentador_del_inicializador) */
/* for(let i = 0; i < paises.length; i++ ) {
  console.log(`Welcome to ${paises[i]}`)
} */

// declaración
function saludar(nombre) {
  console.log("hola " + nombre);
}

// Instancia
saludar("ana"); // hola ana
saludar("Roberto"); // hola Roberto

/* arrow functions */
const saludar2 = (nombre) => console.log("hola " + nombre);
saludar2("Oswaldo");

function calculateArea(lado) {
  calculate = lado ** 2;
  return calculate;
}

/* HOISTING, Scope */
const calculateA = (lado) => {
  calculate = lado ** 2;
  return calculate;
};

const resultado1 = calculateArea(5);
const resultado2 = calculateArea(10);
const resultado3 = calculateA(4);
console.log(resultado1);
console.log(resultado2);
console.log("calculate 3", resultado3);

/* callback = Es una función que le pasamos como parametro a otra función */

paises.forEach((pais) => console.log(`Welcome to my city: ${pais}`));

console.log(prueba1);
var prueba1 = "prueba";

pruebaAnother();
function pruebaAnother() {
  console.log("jeje");
}
pruebaAnother2();
const pruebaAnother2 = () => {
  console.log("jaja");
};
