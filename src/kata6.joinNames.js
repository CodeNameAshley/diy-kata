const joinNames = (namesObj) => {
  const separator = ", ";
  const and = " & ";
  let simpsons = [];

  for (let i = 0; i < namesObj.length; i += 1) {
    simpsons += namesObj[i].name;
    if (i === namesObj.length - 2) {
      simpsons += and;
    } else if (i !== namesObj.length - 2 && i !== namesObj.length - 1) {
      simpsons += separator;
    }
  }
  return simpsons;
};

module.exports = joinNames;
