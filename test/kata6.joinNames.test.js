const { joinNames } = require("../src");

describe("joinNames", () => {
  it("returns string of names, seperated by commas and an ampersand", () => {
    const simps = [{ name: "Bart" }, { name: "Lisa" }, { name: "Maggie" }];
    const simpsFam = [{ name: "Bart" }, { name: "Lisa" }, { name: "Maggie" }, {name: "Marge"}, {name: "Homer"}]
    expect(joinNames(simps)).toEqual("Bart, Lisa & Maggie");
    expect(joinNames(simpsFam)).toEqual("Bart, Lisa, Maggie, Marge & Homer")
  });
});
