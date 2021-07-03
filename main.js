//Randomly selects a choice for the computer (rock, paper or scissors)
function computerPlay() {
    let myArray = ['rock', 'paper', 'scissors'];
    let randomElement = myArray[Math.floor(Math.random() * myArray.length)];
    return randomElement;
}

//Displays the results for a 1 round game
function playRound(playerSelection, computerSelection) {

    let playerChoice = playerSelection
    let computerChoice = computerSelection

    playerChoice = playerChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    //somehow calculate this in each return statement ?
    let computerScore = 0;
    let userScore = 0; 
    
    if (playerSelection == computerSelection) {
        return "TIE";
    }

    else if (playerChoice == 'rock' && computerChoice == 'paper') {
        return "You Lose! " + computerChoice + " beats " + playerChoice;
    }

    else if (playerChoice == 'rock' && computerChoice == 'scissors') {
        return "You Win! " + playerChoice + " beats " + computerChoice;
    }

    else if (playerChoice == 'paper' && computerChoice == 'rock') {
        return "You Win! " + playerChoice + " beats " + computerChoice;
    }

    else if (playerChoice == 'paper' && computerChoice == 'scissors') {
        return "You Lose! " + computerChoice + " beats " + playerChoice;
    }

    else if (playerSelection == 'scissors' && computerChoice == 'rock') {
        return "You Lose! " + computerChoice + " beats " + playerChoice;
    }

    else if (playerSelection == 'scissors' && computerChoice == 'paper') {
        return "You Win! " + playerChoice + " beats " + computerChoice;
    }
}


//Displays each result of a 5 round game
function game() {
    for (let i = 1; i <= 5; i++) {

        let computerInput = computerPlay();
        let userInput = prompt("Enter a choice: rock, paper or scissors");
        let roundResults = playRound(userInput, computerInput);
        console.log(roundResults);
    }
    
}

//Displays the winner at the end of the 5 round game

