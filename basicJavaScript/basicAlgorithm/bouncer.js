function bouncer(arr) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    // console.log(i);
    if (arr[i]) newArray.push(arr[i]);
    console.log(newArray);
  }
  return newArray;
}

console.log(bouncer([7, "ate", "", false, 9]));
