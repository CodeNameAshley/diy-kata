const joinNames = namesObj => {
  const simps = [{ name: "Bart" }, { name: "Lisa" }, { name: "Maggie" }];
  //return simps.filter(x => x.name).map(x => x.name).join([separator = ', '])
  return simps.slice(0, -1).join(', ')+' & '+simps.slice(-1);
};

module.exports = joinNames;
