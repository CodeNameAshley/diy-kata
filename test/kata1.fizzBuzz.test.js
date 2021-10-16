const { fizzBuzz } = require("../src");

describe("fizzBuzz", () => {
  it("returns Fizz when passed a multiple of 3", () => {
    expect(fizzBuzz(9)).toEqual('Fizz');
    expect(fizzBuzz(27)).toEqual('Fizz');
    expect(fizzBuzz(18)).toEqual('Fizz')
  });

  it("returns Buzz when passed a multiple of 5", () => {
    expect(fizzBuzz(50)).toEqual('Buzz');
    expect(fizzBuzz(25)).toEqual('Buzz');
    expect(fizzBuzz(20)).toEqual('Buzz');
  });

  it("returns FizzBuzz when passed a multiple 3 and 5", () => {
    expect(fizzBuzz(15)).toEqual('FizzBuzz');
    expect(fizzBuzz(30)).toEqual('FizzBuzz')
  });

  it("returns the number when it isn't a multiple of 3 or 5", () => {
    expect(fizzBuzz(4)).toEqual(4);
    expect(fizzBuzz(2)).toEqual(2);
  });
});
