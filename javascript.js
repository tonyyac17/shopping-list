const list = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');

button.addEventListener('click', () => {
    const myItem = input.value;
    input.value = '';

    const listItem = document.createElement('li');
    const listText = document.createElement('span');
    const listButton = document.createElement('button');

    listItem.appendChild(listText);
    listText.textContent = myItem;
    listItem.appendChild(listButton);
    listButton.textContent = 'Delete';
    list.appendChild(listItem);


    listButton.addEventListener('click', () => {
        list.removeChild(listItem);
    });
    
    input.focus();

});

// function to calculate ticket price for zoo

function calculate() {
    let x = document.getElementById('price');

    let isOver18 = confirm('Click OK if you are under 18');

    if(isOver18 === true){
        x.textContent = 'Discounted price: $10';
    } else {
        x.textContent = 'Regular Price: $15';
    }
}

// function to calculate warranty

function calculateWarranty() {
    let basePrice = 20;
    let x = document.getElementById('feature').checked;

    if(feature){
        let total = basePrice + 5;
        document.getElementById('totalPrice').textContent = total;
    } else {
        document.getElementById('totalPrice').textContent = basePrice;
    }
}

// rate functions using the radio option

let btn = document.getElementById('btnRate');
let output = document.getElementById('output');

btn.addEventListener('click', () => {
    let rates = document.getElementsByName('rate');
        rates.forEach((rate) => {
            if(rate.checked){
                output.innerText = `You selected: ${rate.value}`;
            }
        });
    });

// counting the headings function

let btn1 = document.getElementById('btnCount');

btn1.addEventListener('click', () => {
    let headings = document.getElementsByTagName('h2');
    alert(`The number of h2 headings in this document is: ${headings.length}`);
})

// practicing my rock paper scissors game functions/event listeners

const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const gameResult = document.getElementById('gameResult');
const scorePara = document.getElementById('scorePara');
rock.addEventListener('click', () => startRound('Rock'));
paper.addEventListener('click', () => startRound('Paper'));
scissors.addEventListener('click', () => startRound('Scissors'));


let playerScore = 0
let computerScore = 0

//const playerSelection = 'Rock';
let computerSelection = getComputerChoice();
//console.log(playGame());

// function playGame () {
//     while (!(playerScore === 5 || computerScore === 5)) {
//        computerSelection = getComputerChoice();
//        playRound(playerSelection, computerSelection);
//     }
//     console.log('Computer score: ' + computerScore + '. Player score: '+ playerScore)
// }

function gameOver () {
    if(playerScore === 5) {
        scorePara.textContent = 'You have won the game! Reload the page to play again.'
        playerScore = 0;
        computerScore = 0;
    } else if(computerScore === 5) {
        scorePara.textContent = 'You suck at this game. The computer wins. Try again after reloading the page.'
        playerScore = 0;
        computerScore = 0;
    }
}

function playRound (playerSelection, computerSelection){
    result = determineResult(playerSelection, computerSelection)
    if (result === 'win'){
        playerScore++
    }else if (result === 'loss'){
        computerScore++
    }
    return
}

function determineResult(playerSelection, computerSelection){
    if(computerSelection === playerSelection){
        scorePara.textContent = 'This round was a tie. Pick again'
        return 'tie'
        
    } else if (
        (computerSelection === 'Rock' && playerSelection === 'Scissors')||
        (computerSelection === 'Scissors' && playerSelection === 'Paper')||
        (computerSelection === 'Paper' && playerSelection === 'Rock'))
    {
        scorePara.textContent = `You picked ${playerSelection} and lost this round`
        return 'loss'
        
    } else{
        scorePara.textContent = `You won this round! ${playerSelection} beats ${computerSelection}!`
        return 'win'
        
    }
}

function startRound(playerSelection){
    computerSelection = getComputerChoice();
    determineResult(playerSelection, computerSelection);
    playRound(playerSelection, computerSelection);
    gameResult.textContent = `Computer score: ${computerScore} Play score: ${playerScore}`
    gameOver();
}

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random()*3)
    switch (randomNumber) {
        case 0:
            return 'Rock';
            break;                
        case 1:
            return 'Paper';
            break;
        case 2:
            return 'Scissors';
            break;
        default:
            break;
    }
}