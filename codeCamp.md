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
