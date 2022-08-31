<h1 align="center">Regular Expressions</h1>
<p align="center">Regular expressions are used in programming languages to match parts of strings</p>

## Using the .test() Method

The .test() method takes the regex, applies it to a string (which is placed inside the parentheses), and returns true or false if your pattern finds something or not.

```js
let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString); // Change this line

console.log(result);
```
