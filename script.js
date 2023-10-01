function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissors"];
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];
    return computerChoice.toLowerCase();
}

//needs fixing so other inputs aren't accepted
function getPlayerChoice() {
    let playerChoice = prompt('Please choose Rock, Paper or Scissors.');
        return playerChoice.toLowerCase();
}


function playRound() {
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();
    //temp fix for wrong inputs, not quite right though
    if (!(playerSelection === 'rock' || playerSelection === 'paper' || playerSelection === 'scissors')) {
        alert('You didn\'t make an appropriate choice');
        return;
    }else {
        console.log(`You chose: ${playerSelection}, Computer chose: ${computerSelection}`);
       if (playerSelection === computerSelection) {
          console.log('This round is a draw');
           return "draw";
       }else if(
            (playerSelection === 'rock' && computerSelection === 'scissors') ||
           (playerSelection === 'paper' && computerSelection === 'rock') ||
            (playerSelection === 'scissors' && computerSelection === 'paper')) {
           console.log('You win!!');
           return playerScore++;
       }else {
           console.log('You lose, better luck next time.')
           return computerScore++;
    }
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
console.log(game());

