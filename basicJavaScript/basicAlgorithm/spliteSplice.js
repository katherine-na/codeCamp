const frankenSplice = (arr1, arr2, n) => {
  const copyArrayTwo = arr2.slice();
  copyArrayTwo.splice(n, 0, ...arr1);
  return copyArrayTwo;
};

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));
