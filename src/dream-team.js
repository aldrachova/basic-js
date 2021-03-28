const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }
  let name = '';
  members = members.sort();
  for (let i = 0; i < members.length; i += 1) {
    if(typeof(members[i]) === 'string') {
      name += members[i].trimStart().slice(0, 1);
    }
  }
  name = name.toUpperCase().split('').sort().join('');
  return name;
};
