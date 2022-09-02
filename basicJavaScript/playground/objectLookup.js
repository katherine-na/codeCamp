const alpha = {
  1: "Z",
  2: "Y",
  3: "X",
  4: "W",
  24: "C",
  25: "B",
  26: "A",
};
// const alpha2 = ["Z", "Y", "X", "W", "C", "B", "A"];
// console.log("The value of alpha2[0]: ", alpha2[0]);

console.log({ alpha });

const thirdLetter = alpha[2];
console.log({ thirdLetter });

const lastLetter = alpha[24];
console.log({ lastLetter });

const value = 2;
console.log({ value });

const valueLookup = alpha[value];
console.log({ valueLookup });
console.log("#### IS THE SAME AS ####");
console.log(alpha[value]);
console.log("#### IS THE SAME AS ####");
console.log(
  {
    1: "Z",
    2: "Y",
    3: "X",
    4: "W",
    24: "C",
    25: "B",
    26: "A",
  }[value]
);
console.log("#### IS THE SAME AS ####");

console.log(
  {
    1: "Z",
    2: "Y",
    3: "X",
    4: "W",
    24: "C",
    25: "B",
    26: "A",
  }[2]
);

console.log("#### IS THE SAME AS ####");
console.log("Y");
