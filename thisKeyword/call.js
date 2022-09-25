const user = {
  name: "Owen",
};

const business = {
  name: "Apple",
};

const showInfo = function (likes, friends) {
  return `${this.name} have ${likes} likes and ${friends} friends`;
};

console.log(showInfo(10, 10));
console.log(showInfo.call(user, 1000, 2000));
console.log(showInfo.call(business, 5000, 9000));
