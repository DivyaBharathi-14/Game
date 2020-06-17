const util = require('./util');
function game() {
    // var user = document.querySelector('input[name="option"]:checked').value;
    var user = util.user;
    var computer = util.computer;
    if (user > 2 || computer > 2 || user < 0 || computer < 0) {
        return ;
    }

    if (user === computer) {
        return 'Draw'
    }
    else if (user == 0) {
        return (whoWins(computer, 1, 2));
        //return ((user == 0 && computer == 1 ? 'Computer wins' : ((user == 0 && computer == 2) ? 'User wins' : 'Draw')))
    }
    else if (user == 1) {
        return (whoWins(computer, 2, 0));
        //return ((user == 1 && computer == 2 ? 'Computer wins' : ((user == 1 && computer == 0) ? 'User wins' : 'Draw')))
    }
    else {
        return (whoWins(computer, 0, 1));
        //return ((user == 2 && computer == 0 ? 'Computer wins' : ((user == 2 && computer == 1) ? 'User wins' : 'Draw')))
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
    whoWins: whoWins
}