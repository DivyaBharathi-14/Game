const util = require('./util');
function game() {
   // var user = document.querySelector('input[name="option"]:checked').value;
    var user = 1;
    var computer = util.computer;
    if (user == 0) {
        return((user == 0 && computer == 1 ? 'Computer wins' : ((user == 0 && computer == 2) ? 'User wins' : 'Draw')))
    }
    else if (user == 1) {
        return((user == 1 && computer == 2 ? 'Computer wins' : ((user == 1 && computer == 0) ? 'User wins' : 'Draw')))
    }
    else {
        return((user == 2 && computer == 0 ? 'Computer wins' : ((user == 2 && computer == 1) ? 'User wins' : 'Draw')))
    }
}

module.exports = {
    game : game
}