const {caesar} = require("../src/caesar");
const expect = require("chai").expect //this is how you call the things for tests

// Write your tests here!
describe('caesar', () => {
    it('should return false if the shift amount is 0', () =>{
        const input = 'potato';
        const shift = 0;
        const expected = false;
        const actual = caesar(input,shift);
        expect(actual).to.equal(expected);
    });
    it('should return false if the shift amount is above 25', () => {
        const input = 'apple';
        const shift = 26;
        const expected = false
        const actual = caesar(input,shift);
        expect(actual).to.equal(expected);
    });
    it('should return false if the shift amount is less than -25', () => {
        const input = 'violet';
        const shift = -26;
        const expected = false;
        const actual = caesar(input, shift);
        expect(actual).to.equal(expected)
    });
    it('should leave spaces and other symbols as is', () =>{
        const input = 'you are a witch violet!';
        const shift = 2;
        const expected = 'aqw ctg c ykvej xkqngv!';
        const actual = caesar(input, shift);
        expect(actual).to.equal(expected)
    })
    it('should ignore capital letters', () => {
        const input = 'My name is Violet Lavender.';
        const shift = 5;
        const expected = 'rd sfrj nx antqjy qfajsijw.';
        const actual = caesar(input, shift);
        expect(actual).to.equal(expected)
    })
    it('should appropriately handle letters at the end of the alphabet', () => {
        const input = 'zelda the zebra';
        const shift = 13;
        const expected = 'mryqn gur mroen';
        const actual = caesar(input, shift);
        expect(actual).to.equal(expected);
    })
    it('should allow for a negative shift that will shift to the left', () => {
        const input = 'bleh';
        const shift = -7;
        const expected = 'uexa';
        const actual = caesar(input, shift)
        expect(actual).to.equal(expected);
    })
})






































