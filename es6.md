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

## Use the Rest Parameter with Function Parameters

With the rest parameter, you can create functions that take a variable number of arguments
