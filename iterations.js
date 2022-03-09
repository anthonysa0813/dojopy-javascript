var age = undefined; // 40

// var nombre = undefined;

/* function sayMyName(name) {
  console.log("hi!! " + name);
}

console.log(nombre);
var nombre = "pepe";
let edad = 25;


sayMyName("tony")
function sayMyName(name) {
  console.log("hi!! " + name)
}

const sayName = (name) => {
  console.log("hi!! " + name);
}

sayName("ana")
 */

/* {
  console.log("hadjadk");
  var nombre = "juan";
  let edad = 30;
  console.log(edad);
}

console.log(edad); */

const products = [
  {
    id: 1,
    nombre: "Laptop lenovo legion",
    precio: 2000,
  },
  {
    id: 2,
    nombre: "Laptop HP Pavilion",
    precio: 1000,
  },
  {
    id: 3,
    nombre: "Laptop Acer",
    precio: 2000,
  },
  {
    id: 4,
    nombre: "mac",
    precio: 3000,
  },
];

// for

// initialization_variable, variable_condition, add_variable
for (let i = 0; i < products.length; i++) {
  console.log(`${products[i].nombre} the price is : ${products[i].precio}`);
}

console.log("================forEach==============");
/* map  vs forEach*/
const resultado1 = products.forEach((item) => {
  console.log(`${item.nombre} the price is : ${item.precio}`);
});

console.log("resultado1: " + resultado1);

console.log("=============map=================");
const resultado2 = products.map(
  (product) => `${product.nombre} the price is : ${product.precio}`
);
console.log("resultado2: " + resultado2);
console.log(resultado2);
console.log(typeof resultado2);

const searchProducts = products.filter((product) => product.precio < 3000);
console.log("searchProducts: ", searchProducts);

const productById = products.find((item) => {
  return item.id === 1;
});
console.log(productById);

const base_uri = "https://www.anthony_api.com/";

{
  var name = "pepe";
}

var name = "alonso";

console.log("==================Conditions============");

const email = "   anthonysa0813@gmail.com";

const evaluationEmail = (email) => {
  const emailValue = email.trim();
  const separateEmail = emailValue.split("@");
  console.log(separateEmail);
  const isEmail = separateEmail.includes("gmail.com");
  return isEmail;
};

if (evaluationEmail(email)) {
  console.log("Bienvenido a faceAPP");
} else {
  console.log("No pudiste entrar");
}

var a = 11;
var numberLiteral =
  a == 5
    ? "Five"
    : a == 7
    ? "Seven"
    : a == 11
    ? "Eleven"
    : a == 15
    ? "Fifteen"
    : "Other Number";

if ((a = 11)) {
  console.log("eleven");
} else if ((a = 7)) {
  console.log("seven");
} else if ((a = 15)) {
  console.log("tifty");
} else {
  console.log("broke your code");
}

const truhtly = evaluationEmail(email)
  ? console.log("Bienvenido a faceAPP")
  : console.log("No pudiste entrar");

/* age vale 25 */
var age = 25; // 40

{
  var age = "forty";
  console.log(age);
}

console.log(age);
