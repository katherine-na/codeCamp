for (var x = 2; x < 50; x = x * 2) {
  console.log(x);
}

const chores = [
  "wash the dishes",
  "brush",
  "take the trash out",
  "mop",
  "landry",
];

// our family chores are ...

for (var choreCounter = 0; choreCounter < chores.length; choreCounter++) {
  // sugar syntax
  console.log(`our family chores are ${chores[choreCounter]}.`);
}

// other example

const animals = ["Lion", "Flamingo", "Polar Bear", "Boa Constrictor"];
for (var i = 0; i < animals.length; i++) {
  console.log("This zoo contains a " + animals[i] + ".");
}
// other example with food

const todayWillEat = ["Pizza", "Salad", "Pasta", "Mexican Food", "Fruits"];

for (var imEat = 0; imEat < todayWillEat.length; imEat++) {
  console.log(`Today I will eat a ${todayWillEat[imEat]}.`);
}

// other example with numbers

const numbers = [1, 2, 3];

for (var countNumbers = 0; countNumbers < numbers.length; countNumbers++) {
  console.log(`I am count ${numbers[countNumbers]}.`);
}
