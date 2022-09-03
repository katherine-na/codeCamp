// elimina o remplaza elementos de un array

const numbers = [10, 11, 12, 12, 15];
const startIndex = 3; // Es igual a la posicion despues de 3 ósea 12 y corta ahi mismo
const amountToDelete = 1; // Indica el numero de elementos a cortar despues del startIndex

numbers.splice(startIndex, amountToDelete, 13, 14); // el tercer parametro (13, 14) es el elemento a remplazar
console.log(numbers);

// sino hay un tercer parametro, va a eliminar elementos de un array
const arr = [2, 4, 5, 1, 7, 5, 2, 1];
arr.splice(1, 4);
console.log(arr);
