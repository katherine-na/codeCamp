let age = 5;
while (age < 10) {
  console.log("Your age is less than " + age);
  age++;
}

// other example

for (hour = 5; hour < 10; hour++) {
  console.log("The hour is " + hour);
}

// break

for (a = 1; a < 10; a++) {
  console.log(a);
  if (a === 7) {
    break;
  }
}
console.log("Rompi el loop");
