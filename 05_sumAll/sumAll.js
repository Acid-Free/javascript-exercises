const sumAll = function (start, end) {
  // Non-number input is invalid
  if (typeof start !== "number" || typeof end !== "number") return "ERROR";

  // Negative input is invalid
  if (start < 0 || end < 0) return "ERROR";

  // Start should not be larger than end
  if (start > end) {
    const temp = start;
    start = end;
    end = temp;
  }

  let result = start;
  for (let i = start + 1; i <= end; ++i) {
    result += i;
  }
  return result;
};

// Do not edit below this line
module.exports = sumAll;
