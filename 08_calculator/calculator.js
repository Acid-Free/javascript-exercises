const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (nums) {
  return nums.reduce((sum, num) => (sum += num), 0);
};

const multiply = function (nums) {
  return nums.reduce((product, num) => (product *= num));
};

const power = function (num1, num2) {
  return Math.pow(num1, num2);
};

const factorial = function (num) {
  let total = 1;

  for (let i = 2; i <= num; ++i) {
    total *= i;
  }

  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
