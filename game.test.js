const game = require('./game');
const util = require('./util');
const describe = (describe1) => {
    const expect = (actualResult) => {
        const toBe = (expectedResult) => {
            try {
                if (actualResult === expectedResult) {
                    console.log('✓ : ', describe1);
                }
                else {
                    throw new Error('✗ : Test Case Failed');
                }
            }
            catch (e) {
                console.log(e);
            }
        };
        const toBeTrue = () => {
            try {
                if (actualResult > 0) {
                    console.log('✓ : Result is positive');
                }
                else {
                    throw new Error('✗ : Result is negative');
                }
            }
            catch (e) {
                console.log(e);
            }
        }
        const toBeFalse = () => {
            try {
                if (actualResult > 0) {
                    throw new Error('✗ : Actual Result should be Negative but got Positive');
                }
                else {
                    console.log('✓ : Actual Result is Negative')
                }
            } catch (e) {
                console.log(e);
            }
        }
        const toBeNull = () => {
            try {
                if (!actualResult) {
                    throw new Error('✗ : Null Pointer Exception');
                }
                else {
                    console.log(actualResult,"✓ : Result is not null")
                }
            }
            catch (e) {
                console.log(e);
            }
        }
        return {
            toBe: toBe,
            toBeTrue: toBeTrue,
            toBeFalse: toBeFalse,
            toBeNull: toBeNull
        }
    }
    return {
        expect: expect
    }
};
util.computer = 1;
describe('checking who wins').expect(game.game()).toBe('Draw');