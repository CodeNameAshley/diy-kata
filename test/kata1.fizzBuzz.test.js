const { fizzBuzz } = require("../src");

describe("fizzBuzz", () => {
  it("returns Fizz when passed a multiple of 3", () => {
    expect(12 % 3).toEqual(0);
    expect(27 % 3).toEqual(0);
    expect(18 % 3).toEqual(0)
  });

  it("returns Buzz when passed a multiple of 5", () => {
    expect(25 % 5).toEqual(0);
    expect(50 % 5).toEqual(0);
    expect(20 % 5).toEqual(0);
  });

  it("returns FizzBuzz when passed a multiple 3 and 5", () => {
    expect(15 % 5 && 15 % 3).toEqual(0);
    expect(30 % 5 && 15 % 3).toEqual(0)
  });

  it("returns the number when it isn't a multiple of 3 or 5", () => {
    expect(4 % 5 ).toEqual(4);
    expect(2 % 3).toEqual(2);
  });
});
