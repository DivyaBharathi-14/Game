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
describe('when user gives ROCK and Computer gives ROCK')
    .expect(game.inputOfPlayers(0)).toBe('Draw');
util.computer = 1;
describe('when user gives PAPER and Computer gives PAPER')
    .expect(game.inputOfPlayers(1)).toBe('Draw');
util.computer = 2;
describe('when user gives SCISSOR and Computer gives SCISSOR')
    .expect(game.inputOfPlayers(2)).toBe('Draw');
util.computer = 1;
describe('when user gives ROCK and Computer gives PAPER')
    .expect(game.inputOfPlayers(0)).toBe('Computer Wins');
util.computer = 2;
describe('when user gives ROCK and Computer gives SCISSOR')
    .expect(game.inputOfPlayers(0)).toBe('User Wins');
util.computer = 0;
describe('when user gives SCISSOR and Computer gives ROCK')
    .expect(game.inputOfPlayers(2)).toBe('Computer Wins');
util.computer = 1;
describe('when user gives SCISSOR and Computer gives PAPER')
    .expect(game.inputOfPlayers(2)).toBe('User Wins');
util.computer = 2;
describe('when user gives PAPER and Computer gives SCISSOR')
    .expect(game.inputOfPlayers(1)).toBe('Computer Wins');
util.computer = 0;
describe('when user gives PAPER and Computer gives ROCK')
    .expect(game.inputOfPlayers(1)).toBe('User Wins');
util.computer = 4;
describe('when user gives PAPER and Computer gives ROCK')
    .expect(game.inputOfPlayers(1)).toBeNull();
util.computer = 2;
describe('when user gives PAPER and Computer gives ROCK')
    .expect(game.inputOfPlayers(5)).toBeNull();




