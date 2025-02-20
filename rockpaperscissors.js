const choices = document.querySelectorAll(".choice");
const result = document.getElementById("result");

const choicesArray = ["rock", "paper", "scissors"];

function handleChoiceClick(event) {
    const userChoice = event.target.getAttribute("data-choice");
    const computerChoice = choicesArray[Math.floor(Math.random() * 3)];
    const winner = determineWinner(userChoice, computerChoice);
    result.textContent = `You chose ${userChoice}, computer chose ${computerChoice}. ${winner}`;
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "It's a tie!";
    }
    if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        return "You win!";
    }
    return "You lose!";
}

function resetGame() {
    result.textContent = "Make your choice!";
}

choices.forEach((choice) => choice.addEventListener("click", handleChoiceClick));