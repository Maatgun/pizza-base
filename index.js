 const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
 },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];




/*---- EJERCICIOS ----*/

for (let i= 0; i <= 6; i++) {
  if (i % 2 == 0) {
    continue;
  }
  console.log(`El número ${i} es impar`);
}

var pizzaMenosDe600 = true;

if (pizzaMenosDe600 == true) {
  console.log("si hay una de 500");
}
else {
  console.log("no")
}

const array = pizzas.map(pizzas => pizzas.nombre + ' ' + pizzas.precio);

console.log(array);

const id = pizzas.map(pizzas => pizzas.ingredientes + ' ' + pizzas.ingredientes);

console.log(id);
