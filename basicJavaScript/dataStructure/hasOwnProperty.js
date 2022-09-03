// El metodo hasOwnProperty() nos dice si un objeto tiene una propiedad especifica
// La propiedad especifica va dentro de los parentesis
// Es un metodo unicamente para objetos

const familiares = {
  mama: {
    nombre: "claudia",
    edad: "43",
  },
  papa: {
    nombre: "jose",
    edad: "53",
  },
  hermanaMayor: {
    nombre: "liz",
    edad: "28",
  },
  hermanaMenor: {
    nombre: "Marilyn",
    edad: "25",
  },
};

const mamaExists = familiares.hasOwnProperty("mama");
const papaExists = familiares.hasOwnProperty("papa");
const hermanaMayorExists = familiares.hasOwnProperty("hermanaMayor");
const hermanaMenorExists = familiares.hasOwnProperty("hermanaMenor");

if (mamaExists && papaExists && hermanaMayorExists && hermanaMenorExists) {
  console.log("si existe");
} else {
  console.log("no existe");
}
