let textValue = "";
let scoreBoard = {
    win: 0,
    tie: 0,
    lose: 0
};

function randomOption() {
    scoreBoard = JSON.parse(localStorage.getItem("score"));

    const options = ["Rock", "Paper", "Scissor"];
    const randomIndex = Math.floor(Math.random() * options.length);
    const textarea = document.getElementById("ai");
    textarea.value = "Done now choose";
    textValue = options[randomIndex];
}

function randomOptionn() {
    const textarea = document.getElementById("ai");
    textarea.value = "Generating...";
    setTimeout(() => {
        randomOption();
    }, 3000);
}

function scb() {
    return `Win: ${scoreBoard.win} Tie: ${scoreBoard.tie} Lose: ${scoreBoard.lose}`
}

function choice() {
    if (document.getElementById("ai").value === "Generating...") {
        alert("Dont do that");
        return;
    }
    let clickedButton = event.target.textContent;
    let aiChoice = textValue;
    console.log(clickedButton + aiChoice);
    if (clickedButton === aiChoice) {
        scoreBoard.tie++;
        alert("Draw " + textValue + '\n' + scb()) //TODO to innerHtml not to alert
    } else if (
        (clickedButton === "Rock" && aiChoice === "Scissors") ||
        (clickedButton === "Paper" && aiChoice === "Rock") ||
        (clickedButton === "Scissors" && aiChoice === "Paper")
    ) {
        scoreBoard.win++;
        alert("You Win! " + textValue + '\n' + scb());
    } else {
        scoreBoard.lose++;
        alert("You Lose! " + textValue + '\n' + scb());
    }
    localStorage.setItem("score", JSON.stringify(scoreBoard));

    randomOptionn();
}

function reset() {
    scoreBoard = {
        win: 0,
        tie: 0,
        lose: 0
    };
    localStorage.setItem("score",JSON.stringify(scoreBoard));
}