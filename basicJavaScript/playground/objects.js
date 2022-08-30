const cat = {
  name: "Whiskers",
  legs: 4,
  tails: 1,
  enemies: ["Water", "Dogs"],
};

//Accessing Object Properties with Dot Notation

const testObj = {
  hat: "ballcap",
  shirt: "jersey",
  shoes: "cleats",
};

const hatValue = testObj.hat;
const shirtValue = testObj.shoes;

//Bracket Notation

const myObj = {
  "Space Name": "Kirk",
  "More Space": "Spock",
  NoSpace: "USS Enterprise",
};

myObj["Space Name"];
myObj["More Space"];
myObj["NoSpace"];

// other example

const ourDog = {
  name: "Camper",
  legs: 4,
  tails: 1,
  friends: ["everything!"],
};

// update object properties
const myDog = {
  name: "Coder",
  legs: 4,
  tails: 1,
  friends: ["freeCodeCamp Campers"],
};

// Only change code below this line

myDog.name = ["Happy Coder"];
