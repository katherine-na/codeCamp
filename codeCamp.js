// in-line comment

/* Variables 
with Strings */

var liveIn;
liveIn = "Mexico";

let myName;
myName = "Kathy";

let myFavoriteAnimal;
myFavoriteAnimal = "All animals";

const myId = "NEAK010331";

/* Variables 
with Numbers */

let myAge;
myAge = 21;

let myAgeNextYear;
myAgeNextYear = 21 + 1;
myAgeNextYear = 22++;


let myAgePastYear;
myAgePastYear = 21 - 1;
myAgePastYear = 21 --;

// multiplication, division, decimal

const multiplication = 13 * 31;
const division = 31 / 2;
const ourDecimal = 3.1;
const remainder = 5 % 1; // it will be 1

// more examples

let myVar = 1;
myVar += 5;
myVar -= 1;
myVar = myVar *= 5;
myVar = myVar /= 5; 

// Escaping Literal Quotes in Strings

const quotesInStrings = 'Kathy said, "I am learning JavaScript"';

const anotherWay = 'Kathy said, \"I am learning JavaScript!\"';

// Escape Sequences in Strings

const myStr = "You\n\t\\Can\Do it";

// It will be return
```
You
    \Can
Do it
```


// Concatenating string use +

let greetings = "Hello" + "Have a nice day!"

const anAdjective = "Awesome!";
let string = "freeCodeCamp is";

string + anAdjective; // it will be return "freeCodeCamp is Awesome!"

// Find the length of a strings

let lastNameLength = 0;
const lastName = "Negrete"
lastNameLength = lastName.length;
