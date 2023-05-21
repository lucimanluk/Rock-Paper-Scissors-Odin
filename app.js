const answers = ['rock', 'paper', 'scissors'];

function getComputerChoice(){
   return answers[Math.floor(Math.random()*answers.length)];
}

function playRound(){

    let computerSelection = getComputerChoice();
    let playerSelection = prompt('Insert value here', ' ');
    if (playerSelection.toLowerCase() === computerSelection){
        console.log("tie");
    }

    else if(computerSelection === 'rock' && playerSelection.toLowerCase() === 'paper'){
        console.log('you won');
    }

    else if(computerSelection === 'rock' && playerSelection.toLowerCase() === 'scissors'){
        console.log('you lost');
    }

    else if(computerSelection === 'paper' && playerSelection.toLowerCase() === 'scissors'){
        console.log('you win');
    }

    else if(computerSelection === 'paper' && playerSelection.toLowerCase() === 'rock'){
        console.log('you lost');
    }

    else if(computerSelection === 'scissors' && playerSelection.toLowerCase() === 'rock'){
        console.log('you win');
    }

    else if(computerSelection === 'scissors' && playerSelection.toLowerCase() === 'paper'){
        console.log('you lost');
    }
}

function game(){
    for(let i=0; i<5; i++){
    playRound();
    }
}

game();


 