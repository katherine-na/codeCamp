let Dog = function (name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 4;
};
let Cat = new Dog("Marrandi", "black");

Cat instanceof Dog;

console.log(Dog);
