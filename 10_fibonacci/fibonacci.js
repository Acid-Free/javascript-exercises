const fibonacci = function (input) {
  input = parseInt(input);
  if (!input) return "OOPS";
  if (input < 0) return "OOPS";

  let prev = 1;
  let current = 1;

  for (let i = 2; i < input; ++i) {
    const temp = current;
    current += prev;
    prev = temp;
  }

  return current;
};

// Do not edit below this line
module.exports = fibonacci;
