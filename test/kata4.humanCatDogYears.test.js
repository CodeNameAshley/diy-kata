const { humanCatDogYears } = require("../src");

describe("humanCatDogYears", () => {
    it("returns an array of human year, cat year, and dog year when human year is passed", () => {
      expect(humanCatDogYears(10)).toEqual([10, 56, 64]);
    });
  });
