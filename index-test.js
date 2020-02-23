const {
    add,
    subtract,
    multiply,
    divide
} = require('./index');
const describe = (desc, fn) => {
    console.log(desc);
    fn();
};

const it = (msg, fn) => describe('* ' + msg, fn);
const matchers = (exp) => ({
    toBe: (assertion) => {
        if (exp === assertion) {
            console.log('pass');
            return true;
        } else {
            console.log('fail');
            return false;
        }
    }
});
const expect = (exp) => matchers(exp);

describe('Adder', () => {
    it('adds two numbers', () => {
        const result = add(1, 2);
        expect(result).toBe(3);
    });
});
describe('Substractor', () => {
    it('substract two numbers', () => {
        const result = subtract(4, 2);
        expect(result).toBe(2);
    });
});
describe('Multiplier', () => {
    it('multiples two numbers', () => {
        const result = multiply(2, 2);
        expect(result).toBe(4);
    });
});
describe('Divisor', () => {
    it('divides two numbers', () => {
        const result = divide(8, 2);
        expect(result).toBe(4);
    });
});