const square = document.getElementById("square")
const btn = document.getElementById("btn")
const playerOneTime = document.getElementById("player-one-time")
const playerTwoTime = document.getElementById("player-two-time")
const currentPlayerEl = document.getElementById('current-player')

let startTime
let endTime
let reactionTime
let currentPlayerName = 'Player One'

function startReactionTimeCounter() {
    square.classList.add("bg-red")
    startTime = new Date().getTime()

    square.addEventListener('click', endReactionTimeCounter)
}

function endReactionTimeCounter() {
    endTime = new Date().getTime()
    reactionTime = endTime - startTime

    if(currentPlayerName == 'Player One') {
        playerOneTime.innerHTML = reactionTime
    } else {
        playerTwoTime.innerHTML = reactionTime
    }

    square.removeEventListener('click', endReactionTimeCounter)
    square.classList.remove('bg-red')
    currentPlayerName = 'Player Two'
    currentPlayerEl.innerHTML = currentPlayerName
}

function start() {
    setTimeout(startReactionTimeCounter, Math.floor(Math.random() * (6000 - 1000)) + 1000)
}

btn.addEventListener('click', start)