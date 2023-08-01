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
        const pop = document.querySelector('.pop');
        pop.style.padding = "1em";
        pop.innerHTML = "<div>Dont do that</div>"
        pop.style.color = "Red"
        pop.style.fontSize = "5em";
        //alert("Dont do that");
    }
    else {
        const pop = document.querySelector('.pop');
        pop.innerHTML = `<div class="decision"></div>
            <div class="picks"></div>
            <div class="scoreBoard"></div>
            <script src="rockPaperScissor.js"></script>`
        pop.style.color = ""
        pop.style.fontSize = "1em";
    }
    let clickedButton = event.target.textContent;
    let aiChoice = textValue;

    const decision = document.querySelector('.decision');
    decision.style.padding = "1em";
    const picks = document.querySelector('.picks');
    picks.style.padding = "1em";
    const score = document.querySelector('.scoreBoard');
    score.style.padding = "1em";

    console.log(clickedButton + aiChoice);
    if (clickedButton === aiChoice) {
        scoreBoard.tie++;
        decision.innerHTML = "Draw"
    } else if (
        (clickedButton === "Rock" && aiChoice === "Scissor") ||
        (clickedButton === "Paper" && aiChoice === "Rock") ||
        (clickedButton === "Scissor" && aiChoice === "Paper")
    ) {
        scoreBoard.win++;
        decision.innerHTML = `You Win`
    } else {
        scoreBoard.lose++;
        decision.innerHTML = `You Lose!`
    }
    picks.innerHTML = "You picked " + clickedButton + " - " + aiChoice + " computer picked ";
    score.innerHTML = scb();
    localStorage.setItem("score", JSON.stringify(scoreBoard));
    randomOptionn();
}

function reset() {
    scoreBoard = {
        win: 0,
        tie: 0,
        lose: 0
    };
    const score = document.querySelector('.scoreBoard');
    score.style.padding = "1em";
    score.innerHTML = scb();
    localStorage.setItem("score", JSON.stringify(scoreBoard));
}