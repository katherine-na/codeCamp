const Bird = function () {
  this.name = "Albert";
  this.color = "blue";
  this.numLegs = 2;
  return "kakakaka";
};

eagle = new Bird("aguilar", "brown", 2);

parrot = Bird("cotorro", "green", 2);

console.log({ eagle });
console.log({ parrot });
