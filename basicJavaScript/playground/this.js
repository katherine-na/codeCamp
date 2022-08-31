const myCar = {
  maxSpeed: 70,
  driver: "Kathy",
  drive: function (speed, time) {
    console.log(speed * time);
  },
  test: function () {
    console.log(this);
  },
};

const mycar2 = {
  maxSpeed: 100,
  driver: "Marilyn",
  drive: function (speed, time) {
    console.log(speed * time);
  },
  test: function () {
    console.log(this);
  },
};

myCar.test();
mycar2.test();
console.log(mycar2.maxSpeed);
mycar2.drive(50, 3);
