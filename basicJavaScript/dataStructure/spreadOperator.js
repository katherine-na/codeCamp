let cats = ["misha", "kevin"];
let fruits = ["mango", "manzana"];

let newCats = [...cats];
let copyFruits = [...fruits];

console.log(newCats);
console.log(copyFruits);

function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    // Only change code below this line
    newArr.push([...arr]);
    // Only change code above this line
    num--;
  }
  return newArr;
}

console.log(copyMachine(cats, 2));
