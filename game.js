const util = require('./util');

let user_input = null;
let computer_input = null;

function inputOfPlayers(input) {
    user_input = input;
    computer_input = util.computer;
    return game(user_input, computer_input);
}


function game(user, computer) {
    if (user > 2 || computer > 2 || user < 0 || computer < 0) {
        return;
    }
    if (user === computer) {
        return 'Draw';
    }
    else if (user == 0) {
        return (whoWins(computer, 1, 2));
    }
    else if (user == 1) {
        return (whoWins(computer, 2, 0));
    }
    else {
        return (whoWins(computer, 0, 1));
    }
}

function whoWins(computer, lose, win) {
    if (computer == lose) {
        return 'Computer Wins';
    }
    else if (computer == win) {
        return 'User Wins';
    }
    return;
}

module.exports = {
    game: game,
    whoWins: whoWins,
    inputOfPlayers: inputOfPlayers
}