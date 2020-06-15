function game() {
    var user; 
    var computer = Math.floor(Math.random() * Math.floor(3));
    var ele = document.getElementsByName('option');
    for (let i = 0; i < ele.length; i++) {
        if (ele[i].checked) {
            user = document.getElementById("result").innerHTML
        }
    }
    if (user == 0) {
        alert((user == 0 && computer == 1 ? 'Computer wins' : ((user == 0 && computer == 2) ? 'User wins' : 'Draw')))
    }
    else if (user == 1) {
        alert((user == 1 && computer == 2 ? 'Computer wins' : ((user == 1 && computer == 0) ? 'User wins' : 'Draw')))
    }
    else {
        alert((user == 2 && computer == 0 ? 'Computer wins' : ((user == 2 && computer == 1) ? 'User wins' : 'Draw')))
    }
}