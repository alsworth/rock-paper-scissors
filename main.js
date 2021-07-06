//Randomly selects a choice for the computer (rock, paper or scissors)
function computerPlay() {
    let myArray = ['rock', 'paper', 'scissors'];
    let randomElement = myArray[Math.floor(Math.random() * myArray.length)];
    return randomElement;
}


//Creates 2 global variables to store the computer and player scores
var computerScore = 0;
var playerScore = 0; 


//Displays the results for a 1 round game
function playRound(playerSelection, computerSelection) {

    let playerChoice = playerSelection;
    let computerChoice = computerSelection;

    playerChoice = playerChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

;

    if (playerSelection === computerSelection) {
        computerScore += 0;
        playerScore += 0;
        console.log(`TIE
Player's Score: ${playerScore}
Computer's Score: ${computerScore}`);      
    }

    else if (playerChoice === 'rock' && computerChoice === 'paper') {
        computerScore += 1;
        console.log(`You Lose! ${computerChoice} beats ${playerChoice} 
Player's Score: ${playerScore}
Computer's Score: ${computerScore}`);
    }

    else if (playerChoice === 'rock' && computerChoice === 'scissors') {
        playerScore += 1;
        console.log(`You Win! ${playerChoice} beats ${computerChoice}
Player's Score: ${playerScore}
Computer's Score: ${computerScore}`);
    }

    else if (playerChoice === 'paper' && computerChoice === 'rock') {
        playerScore += 1;
        console.log(`You Win! ${playerChoice} beats ${computerChoice}
Player's Score: ${playerScore}
Computer's Score: ${computerScore}`);
    }

    else if (playerChoice === 'paper' && computerChoice === 'scissors') {
        computerScore += 1;
        console.log(`You Lose! ${computerChoice} beats ${playerChoice} 
Player's Score: ${playerScore}
Computer's Score: ${computerScore}`);
    }

    else if (playerSelection === 'scissors' && computerChoice === 'rock') {
        computerScore += 1;
        console.log(`You Lose! ${computerChoice} beats ${playerChoice} 
Player's Score: ${playerScore}
Computer's Score: ${computerScore}`);
    }

    else if (playerSelection === 'scissors' && computerChoice === 'paper') {
        playerScore += 1;
        console.log(`You Win! ${playerChoice} beats ${computerChoice}
Player's Score: ${playerScore}
Computer's Score: ${computerScore}`);
    }

    else {
        return;
    }
    
}


//Displays each result of a 5 round game
function game() {
    for (let i = 1; i <= 5; i++) {

        let computerInput = computerPlay();
        let playerInput = prompt("Enter a choice: rock, paper or scissors");
        playerInput = playerInput.toLowerCase();
        let roundResults = playRound(playerInput, computerInput);
        console.log(roundResults);
    }

    if (computerScore > playerScore) {
        console.log("The Computer Wins!");
    }

    else if (computerScore === playerScore) {
        console.log("IT'S A TIE!");
    }

    else {
        console.log("The Player Wins!");
    }
        computerScore = 0;
        playerScore = 0;
}



