
let cards = []
let sum = 0

let hasBlackjack = false
let isAlive = false

let msgEl = document.getElementById("message-el")
let msg = ""
let sumEl = document.getElementById("sum-el")
let cardEl = document.getElementById("card-el")

let player = {
  name : "Player",
  chips : 200
}

  document.getElementById("player-el").textContent = player.name + ": $" + player.chips

function getRandomCard(){
  let randomCard = Math.floor(Math.random() * 13) + 1
  if (randomCard > 10)
    randomCard = 10
  else if (randomCard === 1)
    randomCard = 11

  return randomCard
}

function start(){
  let card1 = getRandomCard()
  let card2 = getRandomCard()
  cards = [card1, card2]
  sum = card1 + card2
  isAlive = true

  renderGame()
}
function renderGame(){
  cardEl.textContent = "Cards: "
  for(let i = 0 ; i < cards.length ; i+=1){
    cardEl.textContent += " " + cards[i]
  }

  sumEl.textContent = "Sum: " + sum 
  if (sum < 21)
    msg = "Do you want to draw another card?"
  else if (sum===21){
    msg = "You've got Blackjack!"
    hasBlackjack = true
  }
  else{
    msg = "You're out of the game!"
    isAlive = false
  }

  msgEl.textContent = msg
}

function newCard(){
  if (isAlive & !hasBlackjack){ 
    let newcard = getRandomCard()
    sum += newcard
    cards.push(newcard)
    renderGame()
  }
}