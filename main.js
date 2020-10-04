const square = document.getElementById("square")
const btn = document.getElementById("btn")
const playerOneTime = document.getElementById("player-one-time")
const playerTwoTime = document.getElementById("player-two-time")
const current = document.getElementById('current-player')

let startTime
let endTime
let reactionTime
let currentPlayer = 'Player One'


function startGame() {
    square.classList.add("bg-red")
    startTime = new Date().getTime()

    square.addEventListener('click', endGame)
}

function endGame() {
    endTime = new Date().getTime()
    reactionTime = endTime - startTime

    if(currentPlayer == 'Player One') {
        playerOneTime.innerHTML = reactionTime
    } else {
        playerTwoTime.innerHTML = reactionTime
    }

    square.removeEventListener('click', endGame)
    square.classList.remove('bg-red')
    currentPlayer = 'Player Two'
    current.innerHTML = currentPlayer
}

btn.addEventListener('click', start)

function start() {
    setTimeout(startGame, Math.floor(Math.random() * (6000 - 1000)) + 1000 )
}
