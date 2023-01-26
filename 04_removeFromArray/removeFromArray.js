const removeFromArray = function (arr, ...exclude) {
  return arr.filter((element) => !exclude.includes(element));
};

// Do not edit below this line
module.exports = removeFromArray;
