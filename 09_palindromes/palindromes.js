const palindromes = function (stringInput) {
  stringInput = stringInput.toLowerCase();
  stringInput = [...stringInput].filter((char) => isLetter(char)).join("");
  const reversed = stringInput.split("").reverse().join("");
  return stringInput === reversed;
};

const isLetter = (char) => {
  return /[a-z]/.test(char);
};

// Do not edit below this line
module.exports = palindromes;
