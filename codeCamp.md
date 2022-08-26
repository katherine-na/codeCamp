<h1 align="center">JavScript Algorithms and Data Structures</h1>

## Comments in JavaScript:

Using // will tell JavaScript to ignore the remainder of the text on the current line. This is an in-line comment:

```js
// This is an in-line comment
```

You can make a multi-line comment beginning with /_ and ending with _/. This is a multi-line comment:

```js
/* This is a
multi-line comment */
```

## Declare JavaScript Variables

JavaScript provides eight different data types which are undefined, null, boolean, string, symbol, bigint, number, and object.

We tell JavaScript to create or declare a variable by putting the keyword var in front of it, like so:

```js
var ourName;
```

In JavaScript, you can store a value in a variable with the assignment operator (=).

```js
var myVar;
myVar = 5;
```

But you can also declare a string variable like this:

```js
var myName = "your name";
```

In JavaScript all variables and function names are case sensitive. This means that capitalization matters.
Write variable names in JavaScript in camelCase. In camelCase, multi-word variable names have the first word in lowercase and the first letter of each subsequent word is capitalized.

### Examples

```js
var someVariable;
var anotherVariableName;
var thisVariableNameIsSoLong;
```

## Let

When you use let, a variable with the same name can only be declared once.

```js
let myName = "your name";
```

## Conts

They are a constant value, which means that once a variable is assigned with const, it cannot be reassigned:

```
conts myCurp = kna310331;
```

## Add Two Numbers with JavaScript

JavaScript uses the + symbol as an addition operator when placed between two numbers.

```js
const myVar = 5 + 10;
```

JavaScript uses the - symbol for subtraction.

```js
const myVar = 15 - 10;
```

JavaScript uses the \* symbol for multiplication of two numbers.

```
const myVar = 13 * 13;

```

JavaScript uses the / symbol for division.

```js
const myVar = 16 / 2;
```

You can easily increment or add one to a variable with the ++ operator.

```js
i++;
```

Is the equivalent of

```js
i = i + 1;
```

You can easily decrement or decrease a variable by one with the -- operator.

```js
i--;
```

Is the equivalent of

```js
i = i - 1;
```

### Create Decimal Numbers with JavaScript

We can store decimal numbers in variables too

```js
const ourDecimal = 5.7;
```

In JavaScript, you can also perform calculations with decimal numbers

```js
const product = 2.0 * 0.0;
```

```js
const quotient = 4.4 / 2.0;
```

The remainder operator % gives the remainder of the division of two numbers.

### Example

```js
5 % 2 = 1 because
Math.floor(5 / 2) = 2 (Quotient)
2 * 2 = 4
5 - 4 = 1 (Remainder)
```

### Usage

In mathematics, a number can be checked to be even or odd by checking the remainder of the division of the number by 2.

```js
17 % 2 = 1 (17 is Odd)
48 % 2 = 0 (48 is Even)
```

There are operators that perform both a mathematical operation and an assignment in one step.  
One such operator is the += operator.

```js
let myVar = 1;
myVar += 5;
console.log(myVar);
6 would be displayed in the console.
```

Like the += operator, -= subtracts a number from a variable.

```
myVar -= 5;
```

The `*= `operator multiplies a variable by a number.

```
myVar = myVar *= 5;

```

The /= operator divides a variable by another number.

```
myVar = myVar /= 5;
```

## Escaping Literal Quotes in Strings

In JavaScript, you can escape a quote from considering it as an end of string quote by placing a backslash (\) in front of the quote.

```js
const sampleStr = 'Alan said, "Peter is learning JavaScript".';
```

Remember, a string has the same kind of quote at the beginning and end. But if you have that same quote somewhere in the middle, the string will stop early and throw an error.

```js
const goodStr = 'Jake asks Finn, "Hey, let\'s go on an adventure?"';
const badStr = 'Finn responds, "Let's go!"';
```

## Escape Sequences in Strings

| Code | Output          |
| ---- | --------------- |
| \'   | single quote    |
| \"   | double quote    |
| \\   | backslash       |
| \n   | newline         |
| \r   | carriage return |
| \t   | carriage return |
| \b   | word boundary   |
| \f   | form feed       |

### Example

```js
const myStr = "FirstLine\n\t\\SecondLine\nThirdLine"; // Change this line
```

```js
FirstLine
    \SecondLine
ThirdLine
```

### Concatenating Strings with Plus Operator

You can build a new string out of other strings by concatenating them together.

```js
"My name is Alan," + " I concatenate.";
```

### Concatenating Strings with the Plus Equals Operator

We can use the += operator to concatenate a string

### Constructing Strings with Variables

```js
const ourStr = "Hello, our name is " + ourName + ", how are you?";
```

```js
const anAdjective = "awesome!";
let ourStr = "freeCodeCamp is ";
ourStr += anAdjective;
```

## Find the Length of a String

You can find the length of a String value by writing .length after the string variable or string literal.

```js
console.log("Alan Peter".length);
```

## Use Bracket Notation to Find the First Character in a String

avaScript, don't start counting at 1. They start at 0.

```js
const firstName = "Charles";
const firstLetter = firstName[0];
```

firstLetter would have a value of the string C.

```js
const firstName = "Ada";
const lastLetter = firstName[firstName.length - 1];
```

## Store Multiple Values in one Variable using JavaScript Arrays

With JavaScript array variables, we can store several pieces of data in one place.

```js
const sandwich = ["peanut butter", "jelly", "bread"];
```

## Manipulate Arrays With push()

### .push()

Takes one or more parameters and "pushes" them onto the end of the array.

### Example

```js
const arr1 = [1, 2, 3];
arr1.push(4);
```

### .pop()

Is used to pop a value off of the end of an array.

### .shift()

It works just like .pop(), except it removes the first element instead of the last.

### unshift

Adds the element at the beginning of the array.

## Functions

You can call or invoke this function by using its name followed by parentheses, like this: functionName(); Each time the function is called it will print out the message Hello World on the dev console. All of the code between the curly braces will be executed every time the function is called.

```js
function functionName() {
  console.log("Hello World");
}
```

## Passing Values to Functions with Arguments

```js
function testFun(param1, param2) {
  console.log(param1, param2);
}
```

## Return a Value from a Function with Return

```js
function plusThree(num) {
  return num + 3;
}

const answer = plusThree(5);
```

## Global Scope and Functions

Variables which are defined outside of a function block have Global scope. This means, they can be seen everywhere in your JavaScript code.

Variables which are declared without the let or const keywords are automatically created in the global scope

### Local Scope and Functions

That means they are only visible within that function.

```js
function myTest() {
  const loc = "foo";
  console.log(loc);
}

myTest();
console.log(loc);
```

## Use Conditional Logic with If Statements

When the condition evaluates to true, the program executes the statement inside the curly braces. When the Boolean condition evaluates to false, the statement inside the curly braces will not execute.

```js
if (condition is true) {
  statement is executed
}
```

## Comparison with the Inequality Operator

### !=

The inequality operator (!=) is the opposite of the equality operator. It means not equal and returns false where equality would return true and vice versa.

```
1 !=  2    // true
1 != "1"   // false
1 != '1'   // false
1 != true  // false
0 != false // false
```

### !==

It means "Strictly Not Equal" and returns false where strict equality would return true and vice versa.

```
3 !== 3; // false
3 !== "3"; // true
4 !== 3; // true
```

## > < (greater than or less than)

The greater than operator (>) compares the values of two numbers. If the number to the left is greater than the number to the right, it returns true. Otherwise, it returns false.

```js
5 > 3; // true
7 > "3"; // true
2 > 3; // false
"1" > 9; // false
```

## >= (greater than or equal than)

The greater than or equal to operator (>=) compares the values of two numbers. If the number to the left is greater than or equal to the number to the right, it returns true. Otherwise, it returns false.

## && (and)

```
if (num > 5 && num < 10) {
  return "Yes";
}
return "No";
```

## || (or)

If either of the operands is true. Otherwise, it returns false.

## Switch Statements

A switch statement tests a value and can have many case statements which define various possible values. Statements are executed from the first matched case value until a break is encountered.

```js
switch (lowercaseLetter) {
  case "a":
    console.log("A");
    break;
  case "b":
    console.log("B");
    break;
}
```

## Build JavaScript Objects

Objects are similar to arrays, except that instead of using indexes to access and modify their data, you access the data in objects through what are called properties.

```js
const cat = {
  name: "Whiskers",
  legs: 4,
  tails: 1,
  enemies: ["Water", "Dogs"],
};
```

## Accessing Object Properties with Dot Notation

There are two ways to access the properties of an object: dot notation (.) and bracket notation ([]), similar to an array.

### Ejemplo

```js
const myObj = {
  prop1: "val1",
  prop2: "val2",
};

const prop1val = myObj.prop1;
const prop2val = myObj.prop2;
```

## Updating Object Properties

Here's how we update his object's name property: ourDog.name = "Happy Camper"; or ourDog["name"] = "Happy Camper"; Now when we evaluate ourDog.name, instead of getting Camper, we'll get his new name, Happy Camper.

```js
const myDog = {
  name: "Coder",
  legs: 4,
  tails: 1,
  friends: ["freeCodeCamp Campers"],
};

myDog.name = ["Happy Coder"];
```

## Add New Properties to a JavaScript Object

You can add new properties to existing JavaScript objects the same way you would modify them.

### Example

```js
const ourDog = {
  name: "Camper",
  legs: 4,
  tails: 1,
  friends: ["everything!"],
};

ourDog.bark = "bow-wow";
```

## We can also delete properties from objects like this:

We can also delete properties from objects like this:

```js
const ourDog = {
  name: "Camper",
  legs: 4,
  tails: 1,
  friends: ["everything!"],
  bark: "bow-wow",
};

delete ourDog.bark;
```

## Accessing Nested Arrays

```js
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

ourPets[0].names[1];
ourPets[1].names[0];
```

## Iterate with JavaScript While Loops

You can run the same code multiple times by using a loop.

### while

```js
const ourArray = [];
let i = 0;

while (i < 5) {
  ourArray.push(i);
  i++;
}
```

### for

```js
const ourArray = [];

for (let i = 0; i < 5; i++) {
  ourArray.push(i);
}
```
