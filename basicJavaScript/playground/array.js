const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14],
];

const subarray = arr[3];
const nestedSubarray = arr[3][0];
const element = arr[3][0][1];

// In this example, subarray has the value [[10, 11, 12], 13, 14], nestedSubarray has the value [10, 11, 12], and element has the value 11 .

//Accessing Nested Arrays

const ourPets = [
  {
    animalType: "cat",
    names: ["Meowzer", "Fluffy", "Kit-Cat"],
  },
  {
    animalType: "dog",
    names: ["Spot", "Bowser", "Frankie"],
  },
];

console.log(ourPets[0].names[1]);
console.log(ourPets[1].names[0]);

// Spread Operator

const fruits = ["Apple", "Orange", "Banana", "Grapes", "Peach"];
const vegetables = ["Avocado", "Carrot", "potato", "pumpkin"];

const healthyFood = [...fruits, ...vegetables];

console.log(healthyFood);

// Mutate an Array Declared with const

const s = [5, 6, 7];
s[2] = 45;
console.log(s);

//

const a = ["Katherine", "Marilyn", "Ravi"];
a[2] = "Liz";
console.log(a);

const cats = ["Kevin", "Timon"];
cats.push("Mishuga");
cats.unshift("Misha");
console.log(cats);
