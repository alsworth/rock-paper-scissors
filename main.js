function computerPlay() {
    let myArray = ['Rock', 'Paper', 'Scissors'];
    let randomElement = myArray[Math.floor(Math.random() * myArray.length)];
    return console.log(randomElement);
}

function singleRound(playerSelection, computerSelection) {

    let playerChoice = playerSelection.toLowerCase();
    let computerChoice = computerSelection.toLowerCase();
    
    if (playerChoice == 'rock' && computerChoice == 'paper') {
        return "You Lose! " + computerChoice + " beats " + playerChoice;
    }

    else if (playerChoice == 'paper' && computerChoice == 'rock') {
        return "You Win! " + playerChoice + " beats " + computerChoice;
    }

    else if (playerChoice == 'paper' && computerChoice == 'scissors') {
        return "You Lose! " + computerChoice + " beats " + playerChoice;
    }

    else if (playerChoice == 'scissors' && computerChoice == 'paper') {
        return "You Win! " + playerChoice + " beats " + computerChoice;
    }

    else if (playerSelection == 'scissors' && computerChoice == 'rock') {
        return "You Lose! " + computerChoice + " beats " + playerChoice;
    }

    else if (playerSelection == 'rock' && computerChoice == 'scissors') {
        return "You Win! " + playerChoice + " beats " + computerChoice;
    }

    else if (playerSelection == computerSelection) {
        return "TIE";
    }

}


function game() {
    for (let i = 0; i <= 5; i++) {
        let playerInput = prompt("Enter your choice: rock, paper or scissors", "rock, paper, scissors");
        let computerInput = computerPlay();
        let round = singleRound(userInput, computerInput);
    }
}