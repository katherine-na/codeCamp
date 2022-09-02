function zeroArray(m, n) {
  // Creates a 2-D array with m rows and n columns of zeroes
  let newArray = [];
  console.log({ newArray });
  let row = [];
  console.log({ row });
  for (let i = 0; i < m; i++) {
    console.log({ i });
    // Adds the m-th row into newArray
    for (let j = 0; j < n; j++) {
      console.log({ j, row });
      // Pushes n zeroes into the current row to create the columns
      row.push(0);
      console.log({ row });
    }
    // Pushes the current row, which now has n zeroes in it, to the array
    console.log({ newArray });
    newArray.push(row);
    console.log({ newArray });
  }
  return newArray;
}

r = 2;
c = 2;
let matrix = zeroArray(r, c);
console.log(matrix);
