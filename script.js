function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissors"];
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];
    return computerChoice.toLowerCase();
}



function getPlayerChoice() {
    let playerChoice = prompt('Please choose Rock, Paper or Scissors.');
    while (playerChoice === null || playerChoice === undefined || playerChoice === '') {
            playerChoice = prompt('That was not a valid choice, please make sure to choose either Rock, Paper or Scissors.');
    }
    return playerChoice;
}


function playRound() {
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();
        console.log(`Round: ${roundNum} -- You chose: ${playerSelection}, Computer chose: ${computerSelection}`);
       if (playerSelection === computerSelection) {
          console.log('This round is a draw');
           return "draw", roundNum++;
       }else if(
           (playerSelection === 'rock' && computerSelection === 'scissors') ||
           (playerSelection === 'paper' && computerSelection === 'rock') ||
           (playerSelection === 'scissors' && computerSelection === 'paper')) {
           console.log('You win!!');
           return playerScore++, roundNum++;
       }else {
           console.log('You lose, better luck next time.')
           return computerScore++, roundNum++;
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
    playRound();
    console.log(`player's score: ${playerScore} - Computer's score: ${computerScore}`);
    }
    if (playerScore > computerScore) {
        console.log(`After 5 games you won with a score of ${playerScore} points. Great job!!`);
    }else if (playerScore < computerScore) {
        console.log(`After 5 games The computer won with a score of ${playerScore} points. Better luck next time.`);
    }else {
        console.log("Looks like it was a draw this time. At least you didn't lose!")
    }
}


let playerScore = 0;
let computerScore = 0;
let roundNum = 1;
console.log(game());

