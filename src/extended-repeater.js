const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  if(typeof(str) !== 'string') {
    str = String(str);
  }
  if (!options) {
    return str;
  }
  if (typeof(options.addition) === "boolean" || options.addition === null){
    options.addition = String(options.addition);
  }
  if(!options.addition) {
    options.addition = '';
  } else {
    if(typeof(addition) !== 'string') {
      options.addition = String(options.addition);
    }
  }
  if (!options.repeatTimes) {
    options.repeatTimes = 1;
  }
  if (!options.additionRepeatTimes) {
    options.additionRepeatTimes = 1;
  }
  if (!options.separator) {
    options.separator = '+';
  }
  if (!options.additionSeparator) {
    options.additionSeparator = '|';
  }
  let result = [];
  for (let i = 0; i < options.repeatTimes; i++) {
    result.push(str);
    for(let j = 0; j < options.additionRepeatTimes; j++) {
      result.push(options.addition);
      if (j < options.additionRepeatTimes - 1) {
        result.push(options.additionSeparator);
      }
    }
    if (i < options.repeatTimes - 1) {
      result.push(options.separator);
    }
  }
  return result.join('');
};
