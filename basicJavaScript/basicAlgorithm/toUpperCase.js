const titleCase = (str) => {
  const wordsArray = str.split(" ");
  console.log(wordsArray);
  const characterCapitalize = wordsArray.map((word) => {
    const firstCharacterCapitalize = word[0].toUpperCase();
    const lowerString = word.slice(1).toLowerCase();
    return firstCharacterCapitalize + lowerString;
  });
  return characterCapitalize.join(" ");
};

console.log(titleCase("im a little tea pot"));
