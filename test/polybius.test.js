const { polybius } = require("../src/polybius");
const expect = require("chai").expect; //this is how you call the things for tests

// Write your tests here!
describe("polybius", () => {
  it("should encode a message by translating each letter to number pairs", () => {
    const input = "potato";
    const expected = "534344114443";
    const actual = polybius(input, (encode = true));
    expect(actual).to.equal(expected);
  });
  it("should translate both 'i' and 'j' to 42", () => {
    const input = "ij";
    const expected = "4242";
    const actual = polybius(input, (encode = true));
    expect(actual).to.equal(expected);
  });
    it("should decode a message by translating each pair of numbers into a letter", () => {
      const input = "154243135144";
      const expected = 'v(i/j)olet';
      const actual = polybius(input, (encode = true));
      expect(actual).to.equal(expected);
    });
  it("should leave spaces as is", () => {
    const input = 'you are a witch violet';
    const expected = "454354 112451 11 2542443132 154243135144";
    const actual = polybius(input, (encode = true));
    expect(actual).to.equal(expected);
  });
  it("should translate 42 to both 'i' and 'j'", () => {
    const input = "42";
    const expected = "(i/j)";
    const actual = polybius(input, (encode = true));
    expect(actual).to.equal(expected);
  });
  it("should leave spaces as is", () => {
    const input = "454354 112451 11 534344114443";
    const expected = "you are potato";
    const actual = polybius(input, encode = true);
    expect(actual).to.equal(expected);
  });
});
