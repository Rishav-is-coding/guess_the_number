//generate a random number between 1 and 100
let randomNumber = parseInt(Math.random() * 100 + 1)

const submit = document.querySelector('#submt')
const userInput = document.querySelector('#guessfield')
let previousGuesses = document.querySelector('.guesses')
let remaining = document.querySelector('.lastresult')
let lowOrHigh = document.querySelector('.loworhigh')
const startover = document.querySelector('.resultParas')

const p = document.createElement('p')

let previousGuess = []
let numGuess = 1

let playgame = true

if(playgame) {
    submit.addEventListener('click', function(e) {
        e.preventDefault()
        
        const guess = parseInt(userInput.value)
        // console.log(guess)
        validateguesses(guess)
    })
}

function validateguesses(guess) {
    if(isNaN(guess)){
        alert('please enter a valid number')
    }else if(guess < 1 || guess > 100) {
        alert('please enter a number between 1 and 100')
    }else{
        previousGuess.push(guess)
        if(numGuess === 11){
            displayGuess(guess)
            displaymessage(`SORRY you ran out of moves </br> Random Number was: ${randomNumber}`)
            endgame()
        }else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess) {
    if(guess === randomNumber){
        displaymessage(`HURRAY you guessed it right`)
        endgame()
    }else if(guess < randomNumber){
        displaymessage(`guess a higher number`)
    }else{
        displaymessage(`guess a lower number`)
    }
}

function displayGuess(guess) {
    //make form empty for next guess
    userInput.value = ''
    //add that in previous guesses
    previousGuesses.innerHTML += `${guess}, `
    numGuess++
    remaining.innerHTML = `${11 - numGuess}`
}

function displaymessage(message) {
    lowOrHigh.innerHTML = `<h2>${message}</h2>`
}

function endgame() {
    userInput.value = ''
    userInput.setAttribute('disabled' , '')
    p.classList.add('button')
    p.innerHTML = `<h2 id= "newGame">Start New Game</h2>`
    startover.appendChild(p)
    playgame = false
    newgame()
}

function newgame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    previousGuess = [];
    numGuess = 1;
    previousGuesses.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess} `;
    userInput.removeAttribute('disabled');
    startover.removeChild(p);
    displaymessage('')
    playGame = true;
  });
}