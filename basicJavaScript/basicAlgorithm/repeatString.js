const repeatStringNumTimes = (str, num) => {
  return num > 0 ? str + repeatStringNumTimes(str, num - 1) : "";
};

console.log(repeatStringNumTimes("Kathy ", 7));
