const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {

  calculateDepth(arr) {
    let maxDepth = 0;  
    if (Array.isArray(arr)) {
      for (let i = 0; i < arr.length; i++) {
        let currentDepth = this.calculateDepth(arr[i]);
        if(currentDepth > maxDepth) {
          maxDepth = currentDepth;
        }
      }
      return maxDepth + 1;   
    } else {
      return 0;
    }   
  }
};