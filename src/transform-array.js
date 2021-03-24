const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError('arr is not Array');
  }
  if(arr.length === 0) {
    return arr;
  }
  let i = 0;
  let endLoop = arr.length;
  let result = [];
  if (arr[i] === '--discard-prev' || arr[i] === '--double-prev') {
    i +=1;
  }
  if (arr[endLoop - 1] === '--discard-next' || arr[endLoop - 1] === '--double-next') {
    endLoop -= 1;
  }
  for (i; i < endLoop; i++) {
    if (arr[i] === '--discard-next') {
      i += 1;
      continue;
    }
    if (arr[i] === '--discard-prev') {
      if (arr[i - 2] === '--discard-next') {
        continue;
      }
      result.pop();
      continue;
    }
    if (arr[i] === '--double-next') {
      result.push(arr[i + 1]);
      continue;
    }
    if (arr[i] === '--double-prev') {
      if (arr[i - 2] === '--discard-next') {
        continue;
      }
      result.push(arr[i - 1]);
      continue;
    }
    result.push(arr[i]);
  }
  return result;
};
