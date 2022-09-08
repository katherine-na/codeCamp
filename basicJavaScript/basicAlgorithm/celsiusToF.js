// Convert Celsius to Fahrenheit

function convertCtoF(celsius) {
  let fahrenheit = celsius * (9 / 5) + 32;
  return fahrenheit;
}

convertCtoF(30);

// convert gr to kg

function convertGrToKg(gr) {
  let kilos = gr * (0.001 / 1);
  return "Es igual a " + kilos + "kg";
}
console.log(convertGrToKg(2000));
