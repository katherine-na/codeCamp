// Escaping Literal Quotes in Strings

const quotesInStrings = 'Kathy said, "I am learning JavaScript"';

const anotherWay = 'Kathy said, "I am learning JavaScript!"';

// Escape Sequences in Strings

const myStr = "You\n\t\\CanDo it";

// Concatenating string use +

let greetings = "Hello " + "Have a nice day!";

const anAdjective = "Awesome!";
let string = "freeCodeCamp is";

string + anAdjective; // it will be return "freeCodeCamp is Awesome!"

//length of a strings

let lastNameLength = 0;
const lastName = "Negrete";
lastNameLength = lastName.length;
console.log(lastNameLength);

// upper case

let myString = "I'm a fun String";
console.log(myString.toUpperCase());

// lower case

let lower = "I'm a lower String";
console.log(lower.toLowerCase());

// index

let indexName = "I'm a string";
console.log(indexName.indexOf("a"));

let str = "Hello world";
let stringSlice = str.slice(2);

console.log(stringSlice);
