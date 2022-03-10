const data = [
  {
    id: 1,
    name: "Televisor Lg Smart tv",
    price: 2500,
    info: {
      modelo: "AVF42",
      age: 2020,
      memory: true,
      capacity: "2RAM",
    },
  },
  {
    id: 2,
    name: "Laptop HP Pavilion",
    price: 1500,
    info: {
      modelo: "ATWF92",
      age: 2021,
      memory: true,
      capacity: "8RAM",
    },
  },
  {
    id: 3,
    name: "Lavadora Samsung",
    price: 2200,
    info: {
      modelo: "GAFDD121",
      age: 2022,
      memory: false,
      capacity: null,
    },
  },
  {
    id: 4,
    name: "Laptop Lenovo",
    price: 4500,
    info: {
      modelo: "Y540",
      age: 2020,
      memory: true,
      capacity: "16RAM",
      ssd: "1TB",
    },
  },
];

// MOSTRAR SOLOS LOS PRODUCTOS MENORES A 3000
const searchPrices = (total) => {
  // searchPrices es una función que busca los productos cuyo precio sean menores a 3000
  const searchProduct = data.filter(function (product) {
    return product.price < total;
  });

  // const searchProduct = [{},{}]
  // retornando lo que obtengamos en searchProduct
  return searchProduct;
};

console.log(searchPrices(2000));

// Mostrar los productos mediante un mensaje
const listProduct = data.map((elem) => {
  if (elem.price < 3000) {
    console.log(`Producto ${elem.name} tiene precio de ${elem.price}`);
  }
});

listProduct;

console.log("=====================================");

for (let i = 0; i < data.length; i++) {
  console.log(`El producto ${data[i].name} tiene el precio: ${data[i].price}`);
}

// realizar una función que reciba un array de productos como parametroy que retorne el precio total.

function countTotal(array) {}

console.log("============Alan===========");

let total = 0;
const totalPrices = data.map((element) => {
  total += element.price;
});
console.log(total);

console.log("=======Raul=======");
function sumar_precio(data) {
  let suma = 0;
  data.forEach(function (item) {
    suma += item.price;
  });
  return suma;
}

console.log(sumar_precio(data));
