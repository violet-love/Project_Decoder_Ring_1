const { substitution } = require("../src/substitution");
const expect = require("chai").expect; //this is how you call the things for tests

// Write your tests here!
describe("substitution", () => {
  it("should return false if the substitution alphabet is missing", () => {
    const input = "potato";
    const alphabet = " ";
    const expected = false;
    const actual = substitution(input, alphabet, (encode = true));
    expect(actual).to.equal(expected);
  });
  it("should return false if the substitution alphabet is not exactly 26 characters", () => {
    const input = "ij";
    const alphabet = [
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
    ];
    const expected = false;
    const actual = substitution(input, alphabet, (encode = true));
    expect(actual).to.equal(expected);
  });
  it("should return false if the substitution alphabet does not contain unique characters", () => {
    const input = "potate";
    const alphabet = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
    ];
    const expected = false;
    const actual = substitution(input, alphabet, (encode = true));
    expect(actual).to.equal(expected);
  });
  it("should encode a message by using the given substitution alphabet", () => {
    const input = "thinkful";
    const alphabet = "xoyqmcgrukswaflnthdjpzibev";
    const expected = "jrufscpw";
    const actual = substitution(input, alphabet, (encode = true));
    expect(actual).to.equal(expected);
  });
  it("should work with any kind of key with unique characters", () => {
    const input = "message";
    const alphabet = "$wae&zrdxtfcygvuhbijnokmpl";
    const expected = "y&ii$r&";
    const actual = substitution(input, alphabet, (encode = true));
    expect(actual).to.equal(expected);
  });
  it("should preserve spaces", () => {
    const input = "You are an excellent spy";
    const alphabet = "xoyqmcgrukswaflnthdjpzibev";
    const expected = "lp xhm xf mbymwwmfj dne";
    const actual = substitution(input, alphabet, (encode = true));
    expect(actual).to.equal(expected);
  });
  it("should decode a message by using the given substitution alphabet", () => {
    const input = "bcdef";
    const alphabet = "bcdefghijklmnopqrstuvwxyza";
    const expected = "abcde";
    const actual = substitution(input, alphabet, (encode = false));
    expect(actual).to.equal(expected);
  });
  it("should work with any kind of key with unique characters", () => {
    const input = "y&ii$r&";
    const alphabet = "$wae&zrdxtfcygvuhbijnokmpl";
    const expected = "message";
    const actual = substitution(input, alphabet, (encode = false));
    expect(actual).to.equal(expected);
  });
  it("should preserve spaces", () => {
    const input = "elp xhm xf mbymwwmfj dne";
    const alphabet = "xoyqmcgrukswaflnthdjpzibev";
    const expected = "you are an excellent spy";
    const actual = substitution(input, alphabet, (encode = false));
    expect(actual).to.equal(expected);
  });
});
