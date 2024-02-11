let cpuScore = 0;
let playerScore = 0;

console.log("Rock Paper Scissors Game");

function getComputerChoice() {
    let randomInt = Math.floor(Math.random() * 3);

    if (randomInt === 0) {
        return ("r");
    } else if (randomInt === 1) {
        return ("p");
    } else {
        return ("s");
    }

}

function getPlayerChoice() {
    let playerChoice = prompt("What's your choice? (r, p, s)");
    return playerChoice;
}


function main() {
    cpuChoice = getComputerChoice();
    playerChoice = getPlayerChoice();

    console.log("computer chose: ");
    console.log(cpuChoice);

    if (cpuChoice === getPlayerChoice) {
        console.log("tie!");
    } else {
        if (playerChoice === "r" || playerChoice === "p" || playerChoice === "s") {
            if (cpuChoice === "r") {
                if (playerChoice === "p") {
                    console.log("You won! Paper beats rock!");
                } else {
                    console.log("You lost! Rock beats scissors!")
                }
            } else if (cpuChoice === "p") {
                if (playerChoice === "r") {
                    console.log("You lost! Paper beats rock!");
                } else {
                    console.log("You won! Scissors beat paper!")
                }
            } else {
                if (playerChoice === "r") {
                    console.log("You won! Rock beats scissors!");
                } else {
                    console.log("You lost! Scissors beat paper!")
                }
            }
        } else {
            console.log("invalid value");
        }
    }
}

main()