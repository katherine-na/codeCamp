// Function syntax

function nameFunction() {}

// Function strings

function functionName() {
  console.log("Hello World");
}

// function numbers

function timesFive(num) {
  return num * 5;
}

timesFive(5);
timesFive(2);
timesFive(0);

// Example

function getAverage(a, b) {
  var average = a + b / 2; // local variable
  console.log("average");
  return average;
}

var myResult = getAverage(7, 11); // global variable

function logResult() {
  console.log("The average is " + myResult);
}

logResult();
