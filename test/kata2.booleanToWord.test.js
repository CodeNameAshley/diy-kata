const { booleanToWord } = require("../src");

describe("booleanToWord", () => {
  it("returns Yes when booleanToWord is true", () => {
    expect(booleanToWord(true)).toEqual("Yes");
  });

  it("returns NO when booleanToWord is false", () => {
    expect(booleanToWord(false)).toEqual("No");
  });
});
