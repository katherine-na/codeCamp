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
