const joinNames = namesObj => {
  // //return simps.filter(x => x.name).map(x => x.name).join([separator = ', '])

  // returns  "[object Object], [object Object] & [object Object]"
  return `${namesObj.slice(0, -1).join(", ")} & ${namesObj.slice(-1)}`;
};

module.exports = joinNames;
