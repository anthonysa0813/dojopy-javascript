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

// console.log(data[0].name)

// console.log("Primer mensaje");

const anyTime = () => {
  setTimeout(() => {
    console.log("Segundo mensaje");
  }, 3000);
};
// anyTime();0

// console.log("Termina aquí!!");

// Promesas!!! :D

// hacer la petición al servidor y traernos la data
const getData = () => {
  // 1) new Promise
  // 2) pasar a nuestra promesa un callback()
  // 3) este callback recibe un resolve, reject
  new Promise((resolve, reject) => {
    const response = fetch("https://rickandmortyapi.com/api/character");
    response.then((data) => {
      console.log(data);
    });
  });
};

// response ya es una promesa
const response = fetch("https://rickandmortyapi.com/api/character");

// para visualizar la información de mi promesa neceasito capturarla con un then
// response.then((data) => {
//   const response2 = data.json();
//   response2.then((infoData) => {
//     console.log(infoData);
//   });
// });

const getProduct = (id) => {
  return new Promise((resolve, reject) => {
    try {
      const filterProduct = data.find((item) => {
        return item.id === id;
      });
      // El método resolve se invoca cuando ya deseemos pasarle la información satisfactoriamente
      resolve(filterProduct);
    } catch (error) {
      reject("Buhhh no encontré nada :'C");
    }
  });
};

getProduct(10)
  // then: para promesas que SÍ se cumplieron
  .then((response) => {
    console.log(response);
  })
  // catch: Para promesas que no se cumplieron
  .catch((message) => {
    console.log(message);
  });

console.log("=============== ASYNC AWAIT ================");

const getData2 = async () => {
  const response = await fetch("https://rickandmortyapi.com/api/character");
  console.log("response", response);

  // con .json estamos parseando la información
  const data = await response.json();
  console.log(data.results);
};

getData2();

// gajada
//console.log()
