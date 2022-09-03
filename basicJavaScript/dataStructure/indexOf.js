// localiza si un elemento existe en un array,
// si existe devuelve la posicion del elemento
// sino devuelve -1

let colors = ["green", "blue", "yellow", "pink", "black"];

console.log(colors.indexOf("verdecito"));

// si indexOf devuelve -1 es falso porque no existe en el array
// si indexOf devuelve un numero que no sea negativo es porque si existe en el array

if (colors.indexOf("pink") === -1) {
  console.log("No existe");
} else {
  console.log("Si existe");
}
