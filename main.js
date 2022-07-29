const pizzas = [
  {
    id: 1,
    nombre: 'Muzzarela',
    precio: 1000,
    ingredientes: ['salsa', 'queso'],
  },
  {
    id: 2,
    nombre: 'Napolitana',
    precio: 1300,
    ingredientes: ['salsa', 'queso', 'tomate'],
  },
  {
    id: 3,
    nombre: 'Fugazzeta',
    precio: 1200,
    ingredientes: ['salsa', 'queso', 'cebolla'],
  },
  {
    id: 4,
    nombre: 'Especial',
    precio: 1500,
    ingredientes: ['salsa', 'queso', 'jamon', 'morrones'],
  },
  {
    id: 5,
    nombre: 'Margarita',
    precio: 1300,
    ingredientes: ['salsa', 'queso','albahaca'],
  },
  {
    id: 6,
    nombre: 'Hawaiana',
    precio: 1700,
    ingredientes: ['salsa','queso','anana'],
  },
];

// Ejercicio 1
  pizzas.forEach(numero => {
   if(numero.id % 2 != 0)
    console.log( `La pizza impar es: ${numero.nombre}`);
});


// Ejercicio 2
const pizzasMenorA = () => { 
  if (pizzas.some((pizza) => pizza.precio < 600)) { 
          return 'hay pizzas menor a $600'; 
  } else { 
          return 'No hay pizzas menores a $600'; 
  } 
}; 

console.log(pizzasMenorA());


// Ejercicio 3 los nombres de todas las pizzas
const imprimirNombre = () =>
pizzas.forEach((pizza)=>
console.log(`El nombre de esta pizza es ${pizza.nombre}`)
);

imprimirNombre()

//console.log(pizzas.map((pizza) => pizza.nombre));

// Ejercicio 4
console.log(pizzas.map((pizza) => pizza.precio));

// Ejercicio 5
const imprimirNombreYPrecio = () =>
pizzas.forEach((pizza)=>
console.log(`Esta es una pizza ${pizza.nombre} y sale $ ${pizza.precio}`)
);

imprimirNombreYPrecio()




