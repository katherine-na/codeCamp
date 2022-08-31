const myBirthday = new Date(2022, 2, 31);
const momsBirhday = new Date(2022, 6, 6);

console.log(myBirthday);
console.log(momsBirhday);

const sisterBirthday = new Date(2022, 3, 13, 9, 29, 15);
const brotherBirtday = new Date(2022, 10, 17, 7, 10, 31);

console.log(sisterBirthday);
console.log(brotherBirtday);

const catBirthday = new Date(2020, 0, 13, 12, 31, 17);

//get the month of the date(0 - 11)
console.log(catBirthday.getMonth());

//get the full year (YYYY)
console.log(catBirthday.getFullYear());

//get the date of the month(1 - 31)
console.log(catBirthday.getDate());

//get the day of the week (0 - 6)
console.log(catBirthday.getDay());

//get the hour of the date (0 - 23)
console.log(catBirthday.getHours());

console.log(catBirthday.getTime());
