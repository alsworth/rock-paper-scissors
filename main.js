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

    let computerScore = 0;
    let playerScore = 0; 
    
    if (playerSelection == computerSelection) {
        computerScore += 0;
        playerScore += 0;
        return "TIE";
    }

    else if (playerChoice == 'rock' && computerChoice == 'paper') {
        computerScore += 1;
        return "You Lose! " + computerChoice + " beats " + playerChoice;
    }

    else if (playerChoice == 'rock' && computerChoice == 'scissors') {
        playerScore += 1;
        return "You Win! " + playerChoice + " beats " + computerChoice;
    }

    else if (playerChoice == 'paper' && computerChoice == 'rock') {
        playerScore += 1;
        return "You Win! " + playerChoice + " beats " + computerChoice;
    }

    else if (playerChoice == 'paper' && computerChoice == 'scissors') {
        computerScore += 1;
        return "You Lose! " + computerChoice + " beats " + playerChoice;
    }

    else if (playerSelection == 'scissors' && computerChoice == 'rock') {
        computerScore += 1;
        return "You Lose! " + computerChoice + " beats " + playerChoice;
    }

    else if (playerSelection == 'scissors' && computerChoice == 'paper') {
        playerScore += 1;
        return "You Win! " + playerChoice + " beats " + computerChoice;
    }
    
    console.log("The player's score is: " + playerScore + "|| The computer's score is " + computerScore);

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



