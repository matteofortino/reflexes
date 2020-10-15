const square = document.getElementById('square')
const btn = document.getElementById('btn')
const playerOneTime = document.getElementById('player-one-time')
const playerTwoTime = document.getElementById('player-two-time')
const currentPlayerEl = document.getElementById('current-player')
const tooSoonText = document.getElementById('tooSoonText')
const waitText = document.getElementById('waitText')
const playerNumberInput = document.getElementById('player-number-input')
const playerNameInput = document.getElementById('player-name-input')
const btnForNumber = document.getElementById('btn-for-number')
const btnForName = document.getElementById('btn-for-name')
const numberError = document.getElementById('number-error')
const nameWrapper = document.getElementById('name-wrapper')
const numberWrapper = document.getElementById('number-wrapper')
const currentPlayerNumber = document.getElementById('current-player-number')
const gameWrapper = document.getElementById('game-wrapper')
const nameError = document.getElementById('name-error')

let startTime
let endTime
let reactionTime
let currentPlayerName = 'Player One'
let timeOutId
let players = []
let howManyPlayers
let playerAskedTimes = 0

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

function getPlayerNumber() {
    const number = playerNumberInput.value
    if(number < 1 || number > 10 || number === "") {
        numberError.innerHTML = 'I dati inseriti non sono validi!'
    } else {
        numberWrapper.classList.add('hidden')
        nameWrapper.classList.remove('hidden')
        howManyPlayers = number
    }

}
btnForNumber.addEventListener('click', getPlayerNumber)

function getPlayerName() {
    const name = playerNameInput.value
    nameError.innerHTML = ''
    playerNameInput.value = ''

    
    if(name === "") {
        nameError.innerHTML = 'Il nome inserito non è valido!'
        return
    }
    playerAskedTimes++
    currentPlayerNumber.innerHTML++

    const player = {
        id: playerAskedTimes,
        name: name,
        score: 0,
    }

    players.push(player)
    
    if(playerAskedTimes >= howManyPlayers) {
        nameWrapper.classList.add('hidden')
        gameWrapper.classList.remove('hidden')

        console.log(players)
        
        return
    }
}

btnForName.addEventListener('click', getPlayerName)