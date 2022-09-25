const book = {
  name: "The Fault in Our Stars",
};

const movie = {
  name: "Alice in Wonderland",
};

const showInfo = function (downloads) {
  return `${this.name} have ${downloads} downloads`;
};

const info = showInfo.bind(book);
console.log(info(1000));
