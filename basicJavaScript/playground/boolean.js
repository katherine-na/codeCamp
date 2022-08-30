function equalityTest(myVal) {
  if (myVal == 10) {
    return "Equal";
  }
  return "Not Equal";
}

// Comparison with the Inequality Operator

1 != 2; // true
1 != "1"; // false
1 != "1"; // false
1 != true; // false
0 != false; // false

// Comparison with the Strict Inequality Operator

3 !== 3; // false
3 !== "3"; // true
4 !== 3; // true

// Greater Than
5 > 3; // true
7 > "3"; // true
2 > 3; // false
"1" > 9; // false

// Less Than

2 < 5; // true
"3" < 7; // true
5 < 5; // false
3 < 2; // false
"8" < 4; // false

// Less Than Or Equal

4 <= 5; // true
"7" <= 7; // true
5 <= 5; // true
3 <= 2; // false
"8" <= 4; // false

// Examples

let myNum = 5;
if (myNum == 5) {
  console.log("It is equal");
}

if (7 > 5) {
  console.log("Yes");
} else {
  console.log("No");
}

// Example

let myAge = 29;

if (myAge > 30) {
  console.log("You are over 30!");
} else if (myAge > 20) {
  console.log("You are over 20!");
} else if (myAge > 10) {
  console.log("You are over 10!");
} else {
  console.log("You are not over 10!");
}
