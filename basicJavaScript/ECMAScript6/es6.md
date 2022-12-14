<h1 align="center">ECMAScript 6</h1>
<p align="center">ECMAScript was the second major revision to JavaScript.</p>

## Compare Scopes of the var and let Keywords

- Var keyword, it is declared globally, or locally if declared inside a function.
- Let keyword allows you to declare a variable with block scope.
- Constants are similar to let variables, except that the value cannot be changed.

## Mutate an Array Declared with const

```js
const s = [5, 6, 7];
s = [1, 2, 3];
s[2] = 45;
console.log(s);
```

The console.log will display the value [5, 6, 45].

## Prevent Object Mutation

To ensure your data doesn't change, JavaScript provides a function **Object.freeze** to prevent data mutation.

## Use Arrow Functions to Write Concise Anonymous Functions

To achieve this, we often use the following syntax:

```js
const myFunc = function () {
  const myVar = "value";
  return myVar;
};
```

ES6 provides us with the syntactic sugar to not have to write anonymous functions this way. Instead, you can use arrow function syntax:

```js
const myFunc = () => {
  const myVar = "value";
  return myVar;
};
```

## Write Arrow Functions with Parameters

It is possible to pass more than one argument into an arrow function.

```js
const multiplier = (item, multi) => item * multi;
multiplier(4, 2);
```

## Set Default Parameters for Your Functions

ES6 introduces default parameters for functions.
The default parameter kicks in when the argument is not specified (it is undefined)

```js
const greeting = (name = "Anonymous") => "Hello " + name;
```

## Use the Spread Operator to Evaluate Arrays In-Place

With the rest parameter, you can create functions that take a variable number of arguments

```js
const arr1 = ["JAN", "FEB", "MAR", "APR", "MAY"];
let arr2;

arr2 = [...arr1];
```

## Use Destructuring Assignment to Extract Values from Objects

Here's an equivalent assignment statement using the ES6 destructuring syntax:

```js
const { name, age } = user;
```

```js
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80,
};
const { today, tomorrow } = HIGH_TEMPERATURES;
```

## Use Destructuring Assignment to Assign Variables from Objects

Here's how you can give new variable names in the assignment:

```js
const { name: userName, age: userAge } = user;
```

```js
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80,
};

const { today: highToday, tomorrow: highTomorrow } = HIGH_TEMPERATURES;
```

## Use Destructuring Assignment to Assign Variables from Nested Objects

```js
const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 },
};

const {
  today: { low: lowToday, high: highToday },
} = LOCAL_FORECAST;
```

## Use Destructuring Assignment to Assign Variables from Arrays

```js
let a = 8,
  b = 6;

[a, b] = [b, a];
```

## Use Destructuring Assignment with the Rest Parameter to Reassign Array Elements

```js
const [a, b, ...arr] = [1, 2, 3, 4, 5, 7];
console.log(a, b);
console.log(arr);
```

## Object Property Shorthand

```js
const getMousePosition = (x, y) => ({
  x: x,
  y: y,
});
```

Here is the same function from above rewritten to use this new syntax:

```js
const getMousePosition = (x, y) => ({ x, y });
```

```js
const createPerson = (name, age, gender) => {
  // Only change code below this line
  return {
    name,
    age,
    gender,
  };
};
```

## Use class Syntax to Define a Constructor Function

## Use export to Share a Code Block

When you export a variable or function, you can import it in another file and use it without having to rewrite the code.

```js
export const add = (x, y) => {
  return x + y;
};
```

```js
const add = (x, y) => {
  return x + y;
};

export { add };
```

## Reuse JavaScript Code Using import

```js
import { add } from "./math_functions.js";
```

## Create an Export Fallback with export default

```js
export default function add(x, y) {
  return x + y;
}
```

## Create a JavaScript Promise

```js
const myPromise = new Promise((resolve, reject) => {});
```

### Complete a Promise with resolve and reject

A promise has three states: pending, fulfilled, and rejected.

```js
const myPromise = new Promise((resolve, reject) => {
  if(condition here) {
    resolve("Promise was fulfilled");
  } else {
    reject("Promise was rejected");
  }
});
```
