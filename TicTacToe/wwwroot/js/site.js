// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.

var currentTurn = "X";

var turnElement = document.getElementById("turn").innerText = "It is player " + currentTurn + "'s turn";

var squares = document.getElementsByClassName("square");
for (var i = 0; i < squares.length; i++)
{
    squares[i].addEventListener("click", onClick);
}

function onClick(event) {
    event.preventDefault();
    if (!event.target.innerText) {
        event.target.innerHTML = currentTurn;
        if (!checkForWin()) {
            nextTurn();
        }
    }
}

function nextTurn() {
    if (currentTurn === "X") {
        currentTurn = "O";
    } else
    {
        currentTurn = "X";
    }
    document.getElementById("turn").innerText = "It is player " + currentTurn + "'s turn";
}

function declareWinner()
{
    document.getElementById("turn").innerText = "Player " + currentTurn + " wins!"
    currentTurn = "";
}

function checkForWin() {
    for (var i = 0; i < 9; i += 3) {
        if (squares[i + 0].innerText === squares[i + 1].innerText && squares[i + 1].innerText === squares[i + 2].innerText) {
            declareWinner();
            return true;
        }
    }

    for (var j = 0; j < 3; j ++) {
        if (squares[j + 0].innerText === squares[j + 3].innerText && squares[j + 3].innerText === squares[j + 6].innerText) {
            declareWinner();
            return true;
        }
    }

    if (squares[0].innerText === squares[4].innerText && squares[0].innerText === squares[8].innerText) {
        declareWinner();
        return true;
    }

}