function Animal() {}
Animal.prototype.eat = function () {
  console.log("nom nom nom");
};

let animal = Object.create(Animal.prototype);
