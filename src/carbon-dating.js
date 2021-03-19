const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (!sampleActivity || typeof(sampleActivity) !== 'string') {
    return false;
  }
  const activity = Number(sampleActivity);
  if (isNaN(activity) || activity <= 0 || activity > MODERN_ACTIVITY){
    return false;
  }
  return Math.ceil(Math.log(MODERN_ACTIVITY / activity) / Math.log(2) * HALF_LIFE_PERIOD);
};
