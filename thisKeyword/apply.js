const book = {
  name: "The Fault in Our Stars",
};

const movie = {
  name: "Alice in Wonderland",
};

const showInfo = function (downloads) {
  return `${this.name} have ${downloads} downloads`;
};
console.log(showInfo.apply(book, [10]));
console.log(showInfo.apply(movie, [20]));
