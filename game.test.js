const game = require('./game');
const util = require('./util');
const describe = (describe1) => {
    const expect = (actualResult) => {
        const toBe = (expectedResult) => {
            try {
                if (actualResult === expectedResult) {
                    console.log('✓ : ', describe1);
                    console.log('WINNER : ', actualResult);
                }
                else {
                    throw new Error('✗ : Test Case Failed');
                }
            }
            catch (e) {
                console.log(e, actualResult);
            }
        }
        const toBeNull = () => {
            try {
                if (!actualResult) {
                    throw new Error('Invalid Input');
                }
            }
            catch (e) {
                console.log(e);
            }
        }
        return {
            toBe: toBe,
            toBeNull: toBeNull
        }
    }
    return {
        expect: expect
    }
};
util.computer = 0;
util.user = 0;
describe('when user gives ROCK and Computer gives ROCK')
    .expect(game.game()).toBe('Draw');
util.computer = 1;
util.user = 1;
describe('when user gives PAPER and Computer gives PAPER')
    .expect(game.game()).toBe('Draw');
util.computer = 2;
util.user = 2;
describe('when user gives SCISSOR and Computer gives SCISSOR')
    .expect(game.game()).toBe('Draw');
util.computer = 1;
util.user = 0
describe('when user gives ROCK and Computer gives PAPER')
    .expect(game.game()).toBe('Computer Wins');
util.computer = 2;
util.user = 0;
describe('when user gives ROCK and Computer gives SCISSOR')
    .expect(game.game()).toBe('User Wins');
util.computer = 0;
util.user = 2;
describe('when user gives SCISSOR and Computer gives ROCK')
    .expect(game.game()).toBe('Computer Wins');
util.computer = 1;
util.user = 2;
describe('when user gives SCISSOR and Computer gives PAPER')
    .expect(game.game()).toBe('User Wins');
util.computer = 2;
util.user = 1;
describe('when user gives PAPER and Computer gives SCISSOR')
    .expect(game.game()).toBe('Computer Wins');
util.computer = 0;
util.user = 1;
describe('when user gives PAPER and Computer gives ROCK')
    .expect(game.game()).toBe('User Wins');
util.computer = 4;
util.user = 1;
describe('when user gives PAPER and Computer gives ROCK')
    .expect(game.game()).toBeNull();
util.computer = 2;
util.user = 5;
describe('when user gives PAPER and Computer gives ROCK')
    .expect(game.game()).toBeNull();




