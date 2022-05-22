const body = document.querySelector('body')
const helpBtn = document.getElementById('helpBtn')
const musicBtn = document.getElementById('musicBtn')
const soundBtn = document.getElementById('soundBtn')
const playBtn = document.getElementById('playButon')
const characterChooseButton = document.getElementById('characterChooseButton')
const audioBtns = document.querySelectorAll('.eventCancel')
const soundIcon = document.getElementById('soundIcon')
const playCharacterSection = document.getElementById('playCharacterSection')
const gameSection = document.getElementById('gameSection')
const characterSection = document.getElementById('character-section')
const avatarImageHolder = document.querySelectorAll('.avatar-img-holder')
const avatarImage = document.querySelectorAll('.avatar-image')
const avatarProfile = document.getElementById('avatar-profile')
const avatarProfileBefore = document.getElementById('avatar-profile-before')
const confirmBtn = document.getElementById('confirm-btn')
const choosenCharacter = document.getElementById('choosenCharacter')
const seatOne = document.getElementById('seatOne')
const seatTwo = document.getElementById('seatTwo')
const seatFour = document.getElementById('seatFour')
const seatCardsHolders = document.querySelectorAll('.seat-cards-holder')
const seatOneCardHolder = document.getElementById('seatOneCardHolder')
const seatTwoCardHolder = document.getElementById('seatTwoCardHolder')
const seatThreeCardHolder = document.getElementById('seatThreeCardHolder')
const seatFourCardHolder = document.getElementById('seatFourCardHolder')
const seatOneShowTotalMark = document.getElementById('seatOneShowTotalMark')
const seatTwoShowTotalMark = document.getElementById('seatTwoShowTotalMark')
const seatThreeShowTotalMark = document.getElementById('seatThreeShowTotalMark')
const seatFourShowTotalMark = document.getElementById('seatFourShowTotalMark')
const seatOneName = document.getElementById('seatOneName')
const seatTwoName = document.getElementById('seatTwoName')
const seatFourName = document.getElementById('seatFourName')
const gameButtons = document.getElementById('gameButtons')
const drawBtn = document.getElementById('drawAndStopBtn')
const drawOneCardBtn = document.getElementById('drawOneCardBtn')
const checkBtn = document.getElementById('checkButton')
const foldButton = document.getElementById('foldButton')
const cardsHolder = document.querySelectorAll('.seat-cards')
const lastCard = document.querySelectorAll('.lastcard')
const seats = document.querySelectorAll('.seats')
const bubbleChat = document.querySelectorAll('.bubbleChat')
const creditsBtn = document.getElementById('creditsBtn')
const creditsCloseBtn = document.getElementById('credits-close-btn')
const credits = document.getElementById('credits')
const avatarDialogue = ["Draw","Fold","Check"]
const winnerDisplay = document.getElementById('winnerDisplay')
const seatCardsHolderHiders = document.querySelectorAll('.seat-cards-holder-hider')
const settingToggle = document.querySelector('.setting-toggle')
const optionsFirstRow = document.querySelector('.options__first-row')

const bobDrawMaleVoiceLine = document.getElementById('bobDrawMaleVoiceLine')
const bobCheckMaleVoiceLine = document.getElementById('bobCheckMaleVoiceLine')
const bobFoldMaleVoiceLine = document.getElementById('bobFoldMaleVoiceLine')

const annaDrawFemaleVoiceLine = document.getElementById('annaDrawFemaleVoiceLine')
const annaCheckFemaleVoiceLine = document.getElementById('annaCheckFemaleVoiceLine')
const annaFoldFemaleVoiceLine = document.getElementById('annaFoldFemaleVoiceLine')

const bettDrawFemaleVoiceLine = document.getElementById('bettDrawFemaleVoiceLine')
const bettCheckFemaleVoiceLine = document.getElementById('bettCheckFemaleVoiceLine')
const bettFoldFemaleVoiceLine = document.getElementById('bettFoldFemaleVoiceLine')

const cesarDrawMaleVoiceLine = document.getElementById('cesarDrawMaleVoiceLine')
const cesarCheckMaleVoiceLine = document.getElementById('cesarCheckMaleVoiceLine')
const cesarFoldMaleVoiceLine = document.getElementById('cesarFoldMaleVoiceLine')

const backgroundMusic = document.getElementById('background-music')


let lives = 5

let characterChoosenBoolean = false
let characterId = 0

let deckId
let cardPile = []

let seatOneResult = 0
let seatTwoResult = 0
let seatThreeResult = 0
let seatFourResult = 0 


let seatFourTurn = true
let seatOneTurn = false
let seatTwoTurn = false
let seatThreeTurn = false
let gameRestart = false
let gameEnd = false

let isSeatOneOutted = false
let isSeatTwoOutted = false
let isSeatThreeOutted = false
let isSeatFourOutted = false

let seatOneWon = false
let seatTwoWon = false
let seatThreeWon = false
let seatFourWon = false

let audioOn = false
let musicOn = false


/*
Character Id 
0 = not chosen
1 = Cesar
2 = Bett
3 = Bob
4 = Anna
*/ 

// charcter choose btn
characterChooseButton.addEventListener('click', () => {
    characterSection.style.display = "flex"
})
// audio buttons
for(let i = 0; i < audioBtns.length; i++){
    audioBtns[i].addEventListener('click',() => {
        audioBtns[i].classList.toggle('eventCancel')
        if(i === 1){
            if(!audioOn){
            soundIcon.classList.toggle('fa-volume-off')
            soundIcon.classList.toggle('fa-volume-up')
            audioOn = true
          }else if(audioOn){
            audioOn = false
          }
        }else if(i === 0){
          if(!musicOn){    
            backgroundMusic.play()
            backgroundMusic.volume = 0.4
            backgroundMusic.loop = true
            musicOn = true
          }else if(musicOn){
            backgroundMusic.pause()
            musicOn = false
          }
        }
    })
}

// credits btn
creditsBtn.addEventListener('click',() => {
  creditsBtn.style.display = "none"
  credits.classList.add('credits-btn-toggle')
})

// credits close btn
creditsCloseBtn.addEventListener('click',() => {
  creditsBtn.style.display = "flex"
  credits.classList.remove('credits-btn-toggle')
})

// changing avatar image style and profiles after avater choose btn clicked
for(let i = 0; i < avatarImage.length; i++){
    avatarImage[i].addEventListener('click',() => {
        choosenCharacter.style.display = "block"
        for(let index = 0; index < avatarImageHolder.length; index++){
            avatarImageHolder[index].classList.remove('avatar-img-holder-active')
            if(i === index){
            avatarImageHolder[index].classList.add('avatar-img-holder-active')
            }
            if(index === 0 && i === 0){
                avatarProfile.style.backgroundColor = "hsl(var(--cesar-clr))"
                avatarProfileBefore.style.borderBottomColor = "hsl(var(--cesar-clr))"
                avatarProfileBefore.style.left = "3%"
                confirmBtn.style.backgroundColor = "hsl(var(--cesar-clr))"
                choosenCharacter.innerHTML = `
                    <img src="images/cesar.png">
                `
                choosenCharacter.style.backgroundColor = "hsl(var(--cesar-clr))"
                confirmBtn.addEventListener('mouseover',()=>{
                    confirmBtn.style.background = 'black'
                    confirmBtn.style.color = "hsl(var(--cesar-clr))"
                })
                confirmBtn.addEventListener('mouseout',()=>{
                    confirmBtn.style.background = 'hsl(var(--cesar-clr))'
                    confirmBtn.style.color = "black"
                })
                characterId = 1
            }else if(index === 1 && i === 1){
                avatarProfile.style.backgroundColor = "hsl(var(--bett-clr))"
                avatarProfileBefore.style.borderBottomColor = "hsl(var(--bett-clr))"
                avatarProfileBefore.style.left = "17%"
                confirmBtn.style.backgroundColor = 'hsl(var(--bett-clr))'
                choosenCharacter.innerHTML = `
                <img src="images/bett.png">
            `
                choosenCharacter.style.backgroundColor = "hsl(var(--bett-clr))"
                confirmBtn.addEventListener('mouseover',()=>{
                    confirmBtn.style.background = 'black'
                    confirmBtn.style.color = "hsl(var(--bett-clr))"
                })
                confirmBtn.addEventListener('mouseout',()=>{
                    confirmBtn.style.background = 'hsl(var(--bett-clr))'
                    confirmBtn.style.color = 'black'
                })
                characterId = 2
            }else if(index === 2 && i === 2){
                avatarProfile.style.backgroundColor = "hsl(var(--bob-clr))"
                avatarProfileBefore.style.borderBottomColor = "hsl(var(--bob-clr))"
                avatarProfileBefore.style.left = "32%"
                confirmBtn.style.backgroundColor = "hsl(var(--bob-clr))"
                choosenCharacter.innerHTML = `
                <img src="images/bob.png">
            `
                choosenCharacter.style.backgroundColor = "hsl(var(--bob-clr))"
                confirmBtn.addEventListener('mouseover',()=>{
                    confirmBtn.style.background = 'black'
                    confirmBtn.style.color = "hsl(var(--bob-clr))"
                })
                confirmBtn.addEventListener('mouseout',()=>{
                    confirmBtn.style.background = 'hsl(var(--bob-clr))'
                    confirmBtn.style.color = 'black'
                })
                characterId = 3
            }else if(index === 3 && i === 3){
                avatarProfile.style.backgroundColor = "hsl(var(--anna-clr))"
                avatarProfileBefore.style.borderBottomColor = "hsl(var(--anna-clr))"
                avatarProfileBefore.style.left = "47%" 
                confirmBtn.style.backgroundColor = "hsl(var(--anna-clr))"
                choosenCharacter.innerHTML = `
                <img src="images/anna.png">
            `
                choosenCharacter.style.backgroundColor = "hsl(var(--anna-clr))"
                confirmBtn.addEventListener('mouseover',()=>{
                    confirmBtn.style.background = 'black'
                    confirmBtn.style.color = "hsl(var(--anna-clr))"
                }) 
                confirmBtn.addEventListener('mouseout',()=>{
                    confirmBtn.style.background = 'hsl(var(--anna-clr))'
                    confirmBtn.style.color = 'black'
                })     
                characterId = 4         
            }
        }   
    }) 
}

// confirm btn in character section
confirmBtn.addEventListener('click',() => {
    characterSection.style.display = "none"
    choosenCharacter.style.display = "block"
    characterChoosenBoolean = true
    if(characterChoosenBoolean && characterId !== 0){
        playBtn.classList.remove('pointerEventCancel')
        playBtn.classList.remove('eventCancel')
        playBtn.addEventListener('click',() => {
            playCharacterSection.style.display = "none"
            gameSection.style.display = "flex"
            checkBtn.style.display = "none"
            foldButton.style.display = "none"
            drawOneCardBtn.style.display = "none"
            seatOneShowTotalMark.style.display = "none"
            seatTwoShowTotalMark.style.display = "none"
            seatThreeShowTotalMark.style.display = "none"
            seatFourShowTotalMark.style.display = "none"
            avatarSeating()
        })
    }
})

// function for avatar seating in game table
function avatarSeating(){
    if(characterId === 1){
        // bob 
        seatOne.innerHTML = `
          <img src="images/bob.png">
        `
        seatOne.style.backgroundColor = "hsl(var(--bob-clr))"
        seatOneName.textContent = "Bob"
        seatOneName.style.color = "hsl(var(--bob-clr))" 
        seatOneShowTotalMark.style.backgroundColor = "hsl(var(--bob-clr))"
        seatOneShowTotalMark.style.color = "hsl(var(--secondary-clr))"

        // bett 
        seatTwo.innerHTML = `
          <img src="images/anna.png">
        `
        seatTwo.style.backgroundColor = "hsl(var(--anna-clr))"
        seatTwoName.textContent = "Anna"
        seatTwoName.style.color = "hsl(var(--anna-clr))"
        seatTwoShowTotalMark.style.backgroundColor = "hsl(var(--anna-clr))"
        seatTwoShowTotalMark.style.color = "hsl(var(--secondary-clr))"

        // cesar 
        seatThreeShowTotalMark.style.backgroundColor = "hsl(var(--cesar-clr))"
        seatThreeShowTotalMark.style.color = "hsl(var(--secondary-clr))"
       
        // anna 
        seatFour.innerHTML = `
          <img src="images/bett.png">
        `
        seatFour.style.backgroundColor = "hsl(var(--bett-clr))"
        seatFourName.textContent = "Bett"
        seatFourName.style.color = "hsl(var(--bett-clr))"
        seatFourShowTotalMark.style.backgroundColor = "hsl(var(--bett-clr))"
        seatFourShowTotalMark.style.color = "hsl(var(--secondary-clr))"

    }else if(characterId === 2){
       // anna
        seatOne.innerHTML = `
          <img src="images/anna.png">
        `
        seatOne.style.backgroundColor = "hsl(var(--anna-clr))"
        seatOneName.textContent = "Anna"
        seatOneName.style.color = "hsl(var(--anna-clr))"
        seatOneShowTotalMark.style.backgroundColor = "hsl(var(--anna-clr))"
        seatOneShowTotalMark.style.color = "hsl(var(--secondary-clr))"

        // cesar 
        seatTwo.innerHTML = `
          <img src="images/cesar.png">
        `
        seatTwo.style.backgroundColor = "hsl(var(--cesar-clr))"
        seatTwoName.textContent = "Cesar"
        seatTwoName.style.color = "hsl(var(--cesar-clr))"
        seatTwoShowTotalMark.style.backgroundColor = "hsl(var(--cesar-clr))"
        seatTwoShowTotalMark.style.color = "hsl(var(--secondary-clr))"

        // bett 

        seatThreeShowTotalMark.style.backgroundColor = "hsl(var(--bett-clr))"
        seatThreeShowTotalMark.style.color = "hsl(var(--secondary-clr))"
       
        // bob 
        seatFour.innerHTML = `
          <img src="images/bob.png">
        `
        seatFour.style.backgroundColor = "hsl(var(--bob-clr))"
        seatFourName.textContent = "Bob"
        seatFourName.style.color = "hsl(var(--bob-clr))"
        seatFourShowTotalMark.style.backgroundColor = "hsl(var(--bob-clr))"
        seatFourShowTotalMark.style.color = "hsl(var(--secondary-clr))"

    }else if(characterId === 3){
        // cesar
         seatOne.innerHTML = `
           <img src="images/cesar.png">
         `
         seatOne.style.backgroundColor = "hsl(var(--cesar-clr))"
         seatOneName.textContent = "Cesar"
         seatOneName.style.color = "hsl(var(--cesar-clr))"
         seatOneShowTotalMark.style.backgroundColor = "hsl(var(--cesar-clr))"
         seatOneShowTotalMark.style.color = "hsl(var(--secondary-clr))"

         // bett 
         seatTwo.innerHTML = `
           <img src="images/bett.png">
         `
         seatTwo.style.backgroundColor = "hsl(var(--bett-clr))"
         seatTwoName.textContent = "Bett"
         seatTwoName.style.color = "hsl(var(--bett-clr))"
         seatTwoShowTotalMark.style.backgroundColor = "hsl(var(--bett-clr))"
         seatTwoShowTotalMark.style.color = "hsl(var(--secondary-clr))"

         // bob 
         seatThreeShowTotalMark.style.backgroundColor = "hsl(var(--bob-clr))"
         seatThreeShowTotalMark.style.color = "hsl(var(--secondary-clr))"
        
         // anna 
         seatFour.innerHTML = `
           <img src="images/anna.png">
         `
         seatFour.style.backgroundColor = "hsl(var(--anna-clr))"
         seatFourName.textContent = "Anna"
         seatFourName.style.color = "hsl(var(--anna-clr))"
         seatFourShowTotalMark.style.backgroundColor = "hsl(var(--anna-clr))"
         seatFourShowTotalMark.style.color = "hsl(var(--secondary-clr))"

     }else if(characterId === 4){
        // bett
         seatOne.innerHTML = `
           <img src="images/bett.png">
         `
         seatOne.style.backgroundColor = "hsl(var(--bett-clr))"
         seatOneName.textContent = "Bett"
         seatOneName.style.color = "hsl(var(--bett-clr))"
         seatOneShowTotalMark.style.backgroundColor = "hsl(var(--bett-clr))"
         seatOneShowTotalMark.style.color = "hsl(var(--secondary-clr))"

         // bob 
         seatTwo.innerHTML = `
           <img src="images/bob.png">
         `
         seatTwo.style.backgroundColor = "hsl(var(--bob-clr))"
         seatTwoName.textContent = "Bob"
         seatTwoName.style.color = "hsl(var(--bob-clr))"
         seatTwoShowTotalMark.style.backgroundColor = "hsl(var(--bob-clr))"
         seatTwoShowTotalMark.style.color = "hsl(var(--secondary-clr))"

         // anna 
         seatThreeShowTotalMark.style.backgroundColor = "hsl(var(--anna-clr))"
         seatThreeShowTotalMark.style.color = "hsl(var(--secondary-clr))"
        
         // cesar 
         seatFour.innerHTML = `
           <img src="images/cesar.png">
         `
         seatFour.style.backgroundColor = "hsl(var(--cesar-clr))"
         seatFourName.textContent = "Cesar"
         seatFourName.style.color = "hsl(var(--cesar-clr))"
         seatFourShowTotalMark.style.backgroundColor = "hsl(var(--cesar-clr))"
         seatFourShowTotalMark.style.color = "hsl(var(--secondary-clr))"

    }
}


function getDeckId()  {
    fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=6')
        .then(res => res.json())
        .then(data =>{
             deckId = data.deck_id
        })
} 
getDeckId()     

drawBtn.addEventListener('click',() => {

  fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=8`)
        .then(res => res.json())
        .then(data => {
          for(let i = 0; i < cardsHolder.length; i++){
            cardsHolder[i].innerHTML = `<img src=${data.cards[i].image}>`
            if(data.cards[i].value === "2"){
              data.cards[i].value = 2           
            }else if(data.cards[i].value === "3"){
              data.cards[i].value = 3
            }else if(data.cards[i].value === "4"){
              data.cards[i].value = 4
            }else if(data.cards[i].value === "5"){
              data.cards[i].value = 5
            }else if(data.cards[i].value === "6"){
              data.cards[i].value = 6
            }else if(data.cards[i].value === "7"){
              data.cards[i].value =7
            }else if(data.cards[i].value === "8"){
              data.cards[i].value =8
            }else if(data.cards[i].value === "9"){
              data.cards[i].value = 9
            }else if(
              data.cards[i].value === "10" ||
              data.cards[i].value === "KING" ||
              data.cards[i].value === "QUEEN" ||
              data.cards[i].value === "JACK"
            ){
              data.cards[i].value = 10
            }else if(
              data.cards[i].value === "ACE"
            ){
              data.cards[i].value = 11
            }  
          } 
          seatOneResult = data.cards[0].value + data.cards[1].value
          seatTwoResult = data.cards[2].value + data.cards[3].value
          seatThreeResult = data.cards[4].value + data.cards[5].value
          seatFourResult = data.cards[6].value + data.cards[7].value
          
          ifSeatFourIsTrue()
        })
        gameButtons.style.display = "none"
})

function dialogueRandom(){
  return Math.floor(Math.random() * 3)
}

function random(){
  return Math.floor(Math.random() * 5) + 1
}

function removeActiveSeatFromAllSeats(){
  for(seatItem of seats){
    seatItem.classList.remove('active-seat')
  }
}

function removeAllBubbleChat(){
  for(bubbleChatItem of bubbleChat){
    bubbleChatItem.style.opacity = 0
    bubbleChatItem.textContent = ""
  }

}



function ifSeatFourIsTrue(){

  if(seatFourTurn){
    removeActiveSeatFromAllSeats()
    removeAllBubbleChat()
    // adding bubble chat and active seat to seat four
    seats[3].classList.add('active-seat')
    // note: there are only3 bubble chat
    bubbleChat[2].style.opacity = "1"
   // makeAvatarThinking
   let makeAvatarFourThinking = setInterval(() => {
       bubbleChat[2].textContent += "."
     },1000)
    // shows the decided move
     setTimeout(() => {
      clearInterval(makeAvatarFourThinking)
      if(seatFourResult <= 13){
        // the avatar will say draw
        bubbleChat[2].textContent = avatarDialogue[0]
        drawLastCardSeatFour()
        seatCardsHolderHiders[2].style.backgroundImage =`linear-gradient(
                                                          to right,
                                                          rgb(48, 196, 164) 31%,
                                                          transparent 31% 35%,
                                                          rgb(48, 196, 164) 35% 66%,
                                                          transparent 66% 100%
                                                        );`
        seatFourTurn = false
        seatThreeTurn = false
        seatTwoTurn = false
        seatOneTurn = true
        gameRestart = false
        gameEnd = false
        setTimeout(ifSeatOneIsTrue,1500)
      }else if(seatFourResult >= 17 || seatFourResult === 21){
        // the avatar will say check
        lastCard[3].style.display = "none"
        seatFourCardHolder.style.top = "55%"
        seatFourCardHolder.style.left = "25%"

        bubbleChat[2].textContent = avatarDialogue[2]
        seatFourTurn = false
        seatThreeTurn = false
        seatTwoTurn = false
        seatOneTurn = true
        gameRestart = false
        gameEnd = false
        setTimeout(ifSeatOneIsTrue,1500)
        
      }else{
        bubbleChat[2].textContent = avatarDialogue[dialogueRandom()]
        if(bubbleChat[2].textContent === "Draw"){
          drawLastCardSeatFour()
          seatCardsHolderHiders[2].style.backgroundImage =`linear-gradient(
                                                            to right,
                                                            rgb(48, 196, 164) 31%,
                                                            transparent 31% 35%,
                                                            rgb(48, 196, 164) 35% 66%,
                                                            transparent 66% 100%
                                                          );`
          seatFourTurn = false
          seatThreeTurn = false
          seatTwoTurn = false
          seatOneTurn = true
          gameRestart = false
          gameEnd = false
          setTimeout(ifSeatOneIsTrue,1500)
        }else if(bubbleChat[2].textContent === "Fold"){
          seatFourCardHolder.style.display = "none"
          isSeatFourOutted = true
          seatFourTurn = false
          seatThreeTurn = false
          seatTwoTurn = false
          seatOneTurn = true
          gameRestart = false
          gameEnd = false
          setTimeout(ifSeatOneIsTrue,1500)
        }else if(bubbleChat[2].textContent === "Check"){

          lastCard[3].style.display = "none"
          seatFourCardHolder.style.top = "55%"
          seatFourCardHolder.style.left = "25%"

          seatFourTurn = false
          seatThreeTurn = false
          seatTwoTurn = false
          seatOneTurn = true
          gameRestart = false
          gameEnd = false
          setTimeout(ifSeatOneIsTrue,1500)
        }  
      }
    },1000 * random())

  }
}

function drawLastCardSeatFour(){
  fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
  .then(res => res.json())
  .then(data => {

    for(let i = 0; i < data.cards.length; i++){
      if(data.cards[i].value === "2"){
        data.cards[i].value = 2           
      }else if(data.cards[i].value === "3"){
        data.cards[i].value = 3
      }else if(data.cards[i].value === "4"){
        data.cards[i].value = 4
      }else if(data.cards[i].value === "5"){
        data.cards[i].value = 5
      }else if(data.cards[i].value === "6"){
        data.cards[i].value = 6
      }else if(data.cards[i].value === "7"){
        data.cards[i].value =7
      }else if(data.cards[i].value === "8"){
        data.cards[i].value =8
      }else if(data.cards[i].value === "9"){
        data.cards[i].value = 9
      }else if(
        data.cards[i].value === "10" ||
        data.cards[i].value === "KING" ||
        data.cards[i].value === "QUEEN" ||
        data.cards[i].value === "JACK"
      ){
        data.cards[i].value = 10
      }else if(
        data.cards[i].value === "ACE"
      ){
        data.cards[i].value = 11
      }
      lastCard[3].innerHTML = `
      <img src=${data.cards[0].image}>
   `
      seatFourResult += data.cards[0].value

   }
  })
}



function ifSeatOneIsTrue(){
 if(seatOneTurn){
  removeActiveSeatFromAllSeats()
  removeAllBubbleChat()
  seats[0].classList.add('active-seat')
  bubbleChat[0].style.opacity = "1"
  let makeAvatarOneThinking = setInterval(() => {
     bubbleChat[0].textContent += "."
   },1000)
       // shows the decided move
      setTimeout(() => {
        clearInterval(makeAvatarOneThinking)
        if(seatOneResult <= 13){
          // the avatar will say draw
          bubbleChat[0].textContent = avatarDialogue[0]
          drawLastCardSeatOne()
          seatCardsHolderHiders[0].style.backgroundImage =`linear-gradient(
                                                            to right,
                                                            rgb(48, 196, 164) 31%,
                                                            transparent 31% 35%,
                                                            rgb(48, 196, 164) 35% 66%,
                                                            transparent 66% 100%
                                                          );`
          seatFourTurn = false
          seatThreeTurn = false
          seatTwoTurn = true
          seatOneTurn = false
          gameRestart = false
          gameEnd = false
          setTimeout(ifSeatTwoIsTrue,1500)
        }else if(seatOneResult >= 17 || seatOneResult === 21){
          // the avatar will say check
          lastCard[0].style.display = "none"
          bubbleChat[0].textContent = avatarDialogue[2]
          seatFourTurn = false
          seatThreeTurn = false
          seatTwoTurn = true
          seatOneTurn = false
          gameRestart = false
          gameEnd = false
          setTimeout(ifSeatTwoIsTrue,1500)
        }else{
          bubbleChat[0].textContent = avatarDialogue[dialogueRandom()]
          drawLastCardSeatOne()
          if(bubbleChat[0].textContent === "Draw"){
            seatCardsHolderHiders[0].style.backgroundImage =`linear-gradient(
                                                              to right,
                                                              rgb(48, 196, 164) 31%,
                                                              transparent 31% 35%,
                                                              rgb(48, 196, 164) 35% 66%,
                                                              transparent 66% 100%
                                                            );`
            seatFourTurn = false
            seatThreeTurn = false
            seatTwoTurn = true
            seatOneTurn = false
            gameRestart = false
            gameEnd = false
            setTimeout(ifSeatTwoIsTrue,1500)
          }else if(bubbleChat[0].textContent === "Fold"){
            seatOneCardHolder.style.display = "none"
            isSeatOneOutted = true
            seatFourTurn = false
            seatThreeTurn = false
            seatTwoTurn = true
            seatOneTurn = false
            gameRestart = false
            gameEnd = false
            setTimeout(ifSeatTwoIsTrue,1500)
          }else if(bubbleChat[0].textContent === "Check") {
            lastCard[0].style.display = "none"
            seatFourTurn = false
            seatThreeTurn = false
            seatTwoTurn = true
            seatOneTurn = false
            gameRestart = false
            gameEnd = false
            setTimeout(ifSeatTwoIsTrue,1500)
          } 
        }
      },1000 * random())
    }
}

function drawLastCardSeatOne(){
  fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
  .then(res => res.json())
  .then(data => {

    for(let i = 0; i < data.cards.length; i++){
      if(data.cards[i].value === "2"){
        data.cards[i].value = 2           
      }else if(data.cards[i].value === "3"){
        data.cards[i].value = 3
      }else if(data.cards[i].value === "4"){
        data.cards[i].value = 4
      }else if(data.cards[i].value === "5"){
        data.cards[i].value = 5
      }else if(data.cards[i].value === "6"){
        data.cards[i].value = 6
      }else if(data.cards[i].value === "7"){
        data.cards[i].value =7
      }else if(data.cards[i].value === "8"){
        data.cards[i].value =8
      }else if(data.cards[i].value === "9"){
        data.cards[i].value = 9
      }else if(
        data.cards[i].value === "10" ||
        data.cards[i].value === "KING" ||
        data.cards[i].value === "QUEEN" ||
        data.cards[i].value === "JACK"
      ){
        data.cards[i].value = 10
      }else if(
        data.cards[i].value === "ACE"
      ){
        data.cards[i].value = 11
      }
      lastCard[0].innerHTML = `
      <img src=${data.cards[0].image}>
   `
      seatOneResult += data.cards[0].value

   }
  })
}

function ifSeatTwoIsTrue(){
  if(seatTwoTurn){
    removeActiveSeatFromAllSeats()
    removeAllBubbleChat()
    seats[1].classList.add('active-seat')
    bubbleChat[1].style.opacity = "1"

    let makeAvatarTwoThinking = setInterval(() => {
       bubbleChat[1].textContent += "."
     },1000)
         // shows the decided move
        setTimeout(() => {
          clearInterval(makeAvatarTwoThinking)
          if(seatTwoResult <= 13){
            // the avatar will say draw           
            bubbleChat[1].textContent = avatarDialogue[0]
            drawLastCardSeatTwo()
            seatCardsHolderHiders[1].style.backgroundImage =`linear-gradient(
                                                              to right,
                                                              rgb(48, 196, 164) 31%,
                                                              transparent 31% 35%,
                                                              rgb(48, 196, 164) 35% 66%,
                                                              transparent 66% 100%
                                                            );`
            seatFourTurn = false
            seatThreeTurn = true
            seatTwoTurn = false
            seatOneTurn = false
            gameRestart = false
            gameEnd = false
            setTimeout(ifSeatThreeIsTrue,1500)
          }else if(seatTwoResult >= 17 || seatTwoResult === 21){
            // the avatar will say check
            lastCard[1].style.display = "none"
            seatTwoCardHolder.style.right = "25%"   
            seatTwoCardHolder.style.top = "55%"   
            bubbleChat[1].textContent = avatarDialogue[2]
            seatFourTurn = false
            seatThreeTurn = true
            seatTwoTurn = false
            seatOneTurn = false
            gameRestart = false
            gameEnd = false
            setTimeout(ifSeatThreeIsTrue,1500)
          }else{
            bubbleChat[1].textContent = avatarDialogue[dialogueRandom()]
            if(bubbleChat[1].textContent === "Draw"){
              drawLastCardSeatTwo()
              seatCardsHolderHiders[1].style.backgroundImage =`linear-gradient(
                                                                to right,
                                                                rgb(48, 196, 164) 31%,
                                                                transparent 31% 35%,
                                                                rgb(48, 196, 164) 35% 66%,
                                                                transparent 66% 100%
                                                              );`
              seatFourTurn = false
              seatThreeTurn = true
              seatTwoTurn = false
              seatOneTurn = false
              gameRestart = false
              gameEnd = false
              setTimeout(ifSeatThreeIsTrue,1500)
            }else if(bubbleChat[1].textContent === "Fold"){
              seatTwoCardHolder.style.display = "none"  
              isSeatTwoOutted = true          
              seatFourTurn = false
              seatThreeTurn = true
              seatTwoTurn = false
              seatOneTurn = false
              gameRestart = false
              gameEnd = false
              setTimeout(ifSeatThreeIsTrue,1500)
            }else if(bubbleChat[1].textContent === "Check"){          
              lastCard[1].style.display = "none"
              seatTwoCardHolder.style.right = "25%"   
              seatTwoCardHolder.style.top = "55%"             
              seatFourTurn = false
              seatThreeTurn = true
              seatTwoTurn = false
              seatOneTurn = false
              gameRestart = false
              gameEnd = false
              setTimeout(ifSeatThreeIsTrue,1500)
            }    
          }
        },1000 * random())
      }
}
function drawLastCardSeatTwo(){
  fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
  .then(res => res.json())
  .then(data => {

    for(let i = 0; i < data.cards.length; i++){
      if(data.cards[i].value === "2"){
        data.cards[i].value = 2           
      }else if(data.cards[i].value === "3"){
        data.cards[i].value = 3
      }else if(data.cards[i].value === "4"){
        data.cards[i].value = 4
      }else if(data.cards[i].value === "5"){
        data.cards[i].value = 5
      }else if(data.cards[i].value === "6"){
        data.cards[i].value = 6
      }else if(data.cards[i].value === "7"){
        data.cards[i].value =7
      }else if(data.cards[i].value === "8"){
        data.cards[i].value =8
      }else if(data.cards[i].value === "9"){
        data.cards[i].value = 9
      }else if(
        data.cards[i].value === "10" ||
        data.cards[i].value === "KING" ||
        data.cards[i].value === "QUEEN" ||
        data.cards[i].value === "JACK"
      ){
        data.cards[i].value = 10
      }else if(
        data.cards[i].value === "ACE"
      ){
        data.cards[i].value = 11
      }
      lastCard[1].innerHTML = `
      <img src=${data.cards[0].image}>
   `
      seatTwoResult +=   data.cards[0].value

   }
  })
}

function ifSeatThreeIsTrue(){

  if(seatThreeTurn){
    removeActiveSeatFromAllSeats()
    removeAllBubbleChat()
    gameButtons.style.display = "flex";
    drawBtn.style.display = "none"
    drawOneCardBtn.style.display = "flex" 
    checkBtn.style.display = "flex"
    foldButton.style.display = "flex"
  
    drawOneCardBtn.addEventListener('click', (e) => {

      // to stop event bubbling
      e.stopImmediatePropagation()

      if(audioOn){
        if(characterId === 1){
          cesarDrawMaleVoiceLine.play()
        }else if(characterId === 2){
          bettDrawFemaleVoiceLine.play()
        }else if(characterId === 3){
          bobDrawMaleVoiceLine.play()
        }else if(characterId === 4){
          annaDrawFemaleVoiceLine.play()
        }
      }else if(!audioOn){
        if(characterId === 1){
          cesarDrawMaleVoiceLine.pause()
        }else if(characterId === 2){
          bettDrawFemaleVoiceLine.pause()
        }else if(characterId === 3){
          bobDrawMaleVoiceLine.pause()
        }else if(characterId === 4){
          annaDrawFemaleVoiceLine.pause()
        }
      }

      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
      .then(response => response.json())
      .then(responseData => {

        for(let i = 0; i < responseData.cards.length; i++){
          if(responseData.cards[i].value === "2"){
            responseData.cards[i].value = 2           
          }else if(responseData.cards[i].value === "3"){
            responseData.cards[i].value = 3
          }else if(responseData.cards[i].value === "4"){
            responseData.cards[i].value = 4
          }else if(responseData.cards[i].value === "5"){
            responseData.cards[i].value = 5
          }else if(responseData.cards[i].value === "6"){
            responseData.cards[i].value = 6
          }else if(responseData.cards[i].value === "7"){
            responseData.cards[i].value =7
          }else if(responseData.cards[i].value === "8"){
            responseData.cards[i].value =8
          }else if(responseData.cards[i].value === "9"){
            responseData.cards[i].value = 9
          }else if(
            responseData.cards[i].value === "10" ||
            responseData.cards[i].value === "KING" ||
            responseData.cards[i].value === "QUEEN" ||
            responseData.cards[i].value === "JACK"
          ){
            responseData.cards[i].value = 10
          }else if(
            responseData.cards[i].value === "ACE"
          ){
            responseData.cards[i].value = 11
          }
          lastCard[2].innerHTML = `
          <img src=${responseData.cards[0].image}>
          `
          seatThreeResult +=   responseData.cards[0].value

          seatFourTurn = false
          seatThreeTurn = false
          seatTwoTurn = false
          seatOneTurn = false
          gameEnd = true
          gameRestart = false
          setTimeout(ifGameEndTrue,1500)
       }
      })
    })
    checkBtn.addEventListener('click',() => {
      lastCard[2].style.display = "none" 
      seatTwoCardHolder.style.display = "none"

      if(audioOn){
        if(characterId === 1){
          cesarCheckMaleVoiceLine.play()
        }else if(characterId === 2){
          bettCheckFemaleVoiceLine.play()
        }else if(characterId === 3){
          bobCheckMaleVoiceLine.play()
        }else if(characterId === 4){
          annaCheckFemaleVoiceLine.play()
        }
      }else if(!audioOn){
        if(characterId === 1){
          cesarCheckMaleVoiceLine.pause()
        }else if(characterId === 2){
          bettCheckFemaleVoiceLine.pause()
        }else if(characterId === 3){
          bobCheckMaleVoiceLine.pause()
        }else if(characterId === 4){
          annaCheckFemaleVoiceLine.pause()
        }
      }

      seatFourTurn = false
      seatThreeTurn = false
      seatTwoTurn = false
      seatOneTurn = false
      gameEnd = true
      setTimeout(ifGameEndTrue,1500)
    })
    foldButton.addEventListener('click', () => {
      seatThreeCardHolder.style.display = "none"
      if(audioOn){
        if(characterId === 1){
          cesarFoldMaleVoiceLine.play()
        }else if(characterId === 2){
          bettFoldFemaleVoiceLine.play()
        }else if(characterId === 3){
          bobFoldMaleVoiceLine.play()
        }else if(characterId === 4){
          annaFoldFemaleVoiceLine.play()
        }
      }else if(!audioOn){
        if(characterId === 1){
          cesarFoldMaleVoiceLine.pause()
        }else if(characterId === 2){
          bettFoldFemaleVoiceLine.pause()
        }else if(characterId === 3){
          bobFoldMaleVoiceLine.pause()
        }else if(characterId === 4){
          annaFoldFemaleVoiceLine.pause()
        }
      }

      isSeatThreeOutted = true
      seatFourTurn = false
      seatThreeTurn = false
      seatTwoTurn = false
      seatOneTurn = false
      gameEnd = true
      setTimeout(ifGameEndTrue,1500)
    })
  }
}


function ifGameEndTrue(){

  if(gameEnd){
    for(let seatCardsHolderHider of seatCardsHolderHiders){
      seatCardsHolderHider.style.display = "none"
    }


    seatOneShowTotalMark.style.display = "flex"
    seatTwoShowTotalMark.style.display = "flex"
    seatThreeShowTotalMark.style.display = "flex"
    seatFourShowTotalMark.style.display = "flex"

    // if seat one is out, change the result display
    if(!isSeatOneOutted){
      seatOneShowTotalMark.textContent = seatOneResult
    }else{
      seatOneShowTotalMark.textContent = "Outted"
    }
    // if seat two is out, change the result display
    if(!isSeatTwoOutted){
    seatTwoShowTotalMark.textContent = seatTwoResult
    }else{
      seatTwoShowTotalMark.textContent = "Folded"
    }
    // if seat three is out, change the result display
    if(!isSeatThreeOutted){
      seatThreeShowTotalMark.textContent = seatThreeResult
      }else{
        seatThreeShowTotalMark.textContent = "Folded"
      }
    // if seat four is out, change the result display
    if(!isSeatFourOutted){
      seatFourShowTotalMark.textContent = seatFourResult
      }else{
        seatFourShowTotalMark.textContent = "Folded"
      }


    gameButtons.style.display = "none"
    winnerDisplay.style.display = "block"
    winnerDisplay.style.transform = "translateX(-50%) translateY(50%)"

    checkIfPlayerInOrOut()
    ruleOutTheResultIfPlayerIsOutted()
    checkWinner()
    checkForTie()
    checkIfAllFold()

    // waiting some time before wiping out
    setTimeout(() => {
      
      seatOneShowTotalMark.style.display = "none"
      seatOneShowTotalMark.textContent = ""

      seatTwoShowTotalMark.style.display = "none"
      seatTwoShowTotalMark.textContent = ""

      seatThreeShowTotalMark.style.display = "none"
      seatThreeShowTotalMark.textContent = ""

      seatFourShowTotalMark.style.display = "none"
      seatFourShowTotalMark.textContent = ""



      for(let seatCardHolder of seatCardsHolders){
        seatCardHolder.style.display = "flex"
      }

      seatTwoCardHolder.style.top = "66%"
      seatTwoCardHolder.style.right = "24%"

      seatFourCardHolder.style.top = "66%"
      seatFourCardHolder.style.left = "24%"

      for(let i = 0 ; i < cardsHolder.length; i++){
        cardsHolder[i].innerHTML = ""
      }
      for(let i = 0 ; i < lastCard.length; i++){
        lastCard[i].innerHTML = ""
        lastCard[i].style.display = "block"
      }

      for(let seatCardsHolderHider of seatCardsHolderHiders){
        seatCardsHolderHider.style.backgroundImage =`linear-gradient(
                                                      to right,
                                                      rgb(48, 196, 164) 31%,
                                                      transparent 31% 35%,
                                                      rgb(48, 196, 164) 35% 66%,
                                                      transparent 66% 100%
                                                    );`
      }                                              
    },2500)
    
    // resetting values
    seatOneResult = 0
    seatTwoResult = 0
    seatThreeResult = 0
    seatFourResult = 0


    seatOneTurn = false
    seatTwoTurn = false
    seatThreeTurn = false
    seatFourTurn = false

    isSeatOneOutted = false
    isSeatTwoOutted = false
    isSeatThreeOutted = false
    isSeatFourOutted = false

    seatOneWon = false
    seatTwoWon = false
    seatThreeWon = false
    seatFourWon = false

    gameRestart = true
    gameEnd = false

    setTimeout(() => {
        if(gameRestart){

          for(let seatCardsHolderHider of seatCardsHolderHiders){
            seatCardsHolderHider.style.display = "block"
          }
          winnerDisplay.style.display = "none"

          fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=8`)
                .then(res => res.json())
                .then(data => {
                  for(let i = 0; i < cardsHolder.length; i++){
                    cardsHolder[i].innerHTML = `<img src=${data.cards[i].image}>`
                    if(data.cards[i].value === "2"){
                      data.cards[i].value = 2           
                    }else if(data.cards[i].value === "3"){
                      data.cards[i].value = 3
                    }else if(data.cards[i].value === "4"){
                      data.cards[i].value = 4
                    }else if(data.cards[i].value === "5"){
                      data.cards[i].value = 5
                    }else if(data.cards[i].value === "6"){
                      data.cards[i].value = 6
                    }else if(data.cards[i].value === "7"){
                      data.cards[i].value =7
                    }else if(data.cards[i].value === "8"){
                      data.cards[i].value =8
                    }else if(data.cards[i].value === "9"){
                      data.cards[i].value = 9
                    }else if(
                      data.cards[i].value === "10" ||
                      data.cards[i].value === "KING" ||
                      data.cards[i].value === "QUEEN" ||
                      data.cards[i].value === "JACK"
                    ){
                      data.cards[i].value = 10
                    }else if(
                      data.cards[i].value === "ACE"
                    ){
                      data.cards[i].value = 11
                    }  
                  } 
                  seatOneResult = data.cards[0].value + data.cards[1].value
                  seatTwoResult = data.cards[2].value + data.cards[3].value
                  seatThreeResult = data.cards[4].value + data.cards[5].value
                  seatFourResult = data.cards[6].value + data.cards[7].value
                  
                  seatFourTurn = true
                  seatOneTurn = false
                  seatTwoTurn = false
                  seatThreeTurn = false 
                  gameRestart = false
                  gameEnd = false
                  ifSeatFourIsTrue()
                })
      }
      
    },2500)
  }
}

function checkWinner(){
  if(
    seatOneResult > seatTwoResult &&
    seatOneResult > seatThreeResult &&
    seatOneResult > seatFourResult && 
    seatOneResult < 22 &&
    isSeatOneOutted === false
    ){
      seatOneWon = true
        if(characterId === 1){
          winnerDisplay.innerHTML = "<h3>Bob is the Winner !</h3>"
        }else if(characterId === 2){
          winnerDisplay.innerHTML = "<h3>Anna is the Winner !</h3>"
        }else if(characterId === 3){
          winnerDisplay.innerHTML = "<h3>Cesar is the Winner !</h3>"
        }else if(characterId === 4){
          winnerDisplay.innerHTML = "<h3>Bett is the Winner !</h3>"
        }
 
    }else if(
      seatTwoResult > seatOneResult &&
      seatTwoResult > seatThreeResult &&
      seatTwoResult > seatFourResult &&
      seatTwoResult < 22 &&
      isSeatTwoOutted === false
    ){

      seatTwoWon = true

        if(characterId === 1){
          winnerDisplay.innerHTML = "<h3>Anna is the Winner !</h3>"
        }else if(characterId === 2){
          winnerDisplay.innerHTML = "<h3>Cesar is the Winner !</h3>"
        }else if(characterId === 3){
          winnerDisplay.innerHTML = "<h3>Bett is the Winner !</h3>"
        }else if(characterId === 4){
          winnerDisplay.innerHTML = "<h3>Bob is the Winner !</h3>"
        }

    }else if(
      seatThreeResult > seatOneResult &&
      seatThreeResult > seatTwoResult &&
      seatThreeResult > seatFourResult &&
      seatThreeResult < 22 &&
      isSeatThreeOutted === false
    ){
      seatThreeWon = true
      winnerDisplay.innerHTML = "<h3>You are the Winner !</h3>"
     
    }else if(
      seatFourResult > seatOneResult &&
      seatFourResult > seatTwoResult &&
      seatFourResult > seatThreeResult &&
      seatFourResult < 22 && 
      isSeatFourOutted === false
    ){
      seatFourWon = true
      console.log('working four')
      console.log('seatFour won')

        if(characterId === 1){
          winnerDisplay.innerHTML = "<h3>Bett is the Winner !</h3>"
        }else if(characterId === 2){
          winnerDisplay.innerHTML = "<h3>Bob is the Winner !</h3>"
        }else if(characterId === 3){
          winnerDisplay.innerHTML = "<h3>Anna is the Winner !</h3>"
        }else if(characterId === 4){
          winnerDisplay.innerHTML = "<h3>Cesar is the Winner !</h3>"
        } 

    }
}

function checkIfPlayerInOrOut(){
  if(seatOneResult > 21){
    isSeatOneOutted = true
  }
  if(seatTwoResult > 21){
    isSeatTwoOutted = true
  }
   if(seatThreeResult > 21){
    isSeatThreeOutted = true
  }
  if(seatFourResult > 21){
    isSeatFourOutted = true
  }
}

function ruleOutTheResultIfPlayerIsOutted(){
  // give different negative number when folded so they wont equal each other in folded state
  if(isSeatOneOutted){
    seatOneResult = -1
  } 
  if(isSeatTwoOutted){
    seatTwoResult = -2
  }
  if(isSeatThreeOutted){
    seatThreeResult = -3
  }
  if(isSeatFourOutted){
    seatFourResult = -4
  }
}

function checkForTie(){
  if(
    (seatOneResult === seatTwoResult ||
    seatOneResult === seatThreeResult ||
    seatOneResult === seatFourResult) &&
    (!seatOneWon && !seatTwoWon && !seatThreeWon && !seatFourWon)
  ){
    winnerDisplay.innerHTML = "It's a Tie"
  }else if(    
    (seatTwoResult === seatOneResult ||
     seatTwoResult === seatThreeResult ||
     seatTwoResult === seatFourResult) &&
    (!seatOneWon && !seatTwoWon && !seatThreeWon && !seatFourWon)){
      winnerDisplay.innerHTML = "It's a Tie"
  }else if(
    (seatThreeResult === seatOneResult ||
     seatThreeResult === seatTwoResult ||
     seatThreeResult === seatFourResult) &&
    (!seatOneWon && !seatTwoWon && !seatThreeWon && !seatFourWon)
  ){
    winnerDisplay.innerHTML = "It's a Tie"
  }else if(
    (seatFourResult === seatOneResult ||
     seatFourResult === seatTwoResult ||
     seatFourResult === seatThreeResult) &&
    (!seatOneWon && !seatTwoWon && !seatThreeWon && !seatFourWon)
  ){
    winnerDisplay.innerHTML = "It's a Tie"
  }
}

function checkIfAllFold(){
  if(
    isSeatOneOutted && 
    isSeatTwoOutted &&
    isSeatThreeOutted &&
    isSeatFourOutted
  ){
    winnerDisplay.innerHTML = "No Winner"
  }
}

window.addEventListener('load', () => {
  if(window.innerWidth < window.innerHeight){
    window.alert('Please rotate ur phone ')
  }
})




settingToggle.addEventListener('click', () => {
  optionsFirstRow.classList.toggle('options__first-row--unfold')
})



