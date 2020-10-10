const square = document.getElementById('square')
const btn = document.getElementById('btn')
const playerOneTime = document.getElementById('player-one-time')
const playerTwoTime = document.getElementById('player-two-time')
const currentPlayerEl = document.getElementById('current-player')
const tooSoonText = document.getElementById('tooSoonText')
const waitText = document.getElementById('waitText')

let startTime
let endTime
let reactionTime
let currentPlayerName = 'Player One'
let timeOutId

function startReactionTimeCounter() {
    waitText.classList.remove('show')
    square.classList.add('bg-teal')
    startTime = new Date().getTime()
    
    square.removeEventListener('click', clickedTooSoon)
    square.addEventListener('click', endReactionTimeCounter)
}

function endReactionTimeCounter() {
    endTime = new Date().getTime()
    reactionTime = endTime - startTime

    if(currentPlayerName == 'Player One') {
        playerOneTime.innerHTML = reactionTime + 'ms'
    } else {
        playerTwoTime.innerHTML = reactionTime + 'ms'
    }

    square.removeEventListener('click', endReactionTimeCounter)
    square.classList.remove('bg-teal')
    currentPlayerName = 'Player Two'
    currentPlayerEl.innerHTML = currentPlayerName
}

function clickedTooSoon() {
    clearTimeout(timeOutId)
    waitText.classList.remove('show')
    tooSoonText.classList.add('show')
}

function start() {
    square.addEventListener('click',clickedTooSoon)
    tooSoonText.classList.remove('show')
    waitText.classList.add('show')
    timeOutId = setTimeout(startReactionTimeCounter, Math.floor(Math.random() * (6000 - 1000)) + 1000)
}

btn.addEventListener('click', start)