var backImages = {
    photo1: "https://upload.wikimedia.org/wikipedia/commons/4/43/Cute_dog.jpg",
    photo2: "https://upload.wikimedia.org/wikipedia/commons/e/e4/Mating_of_Lampides_boeticus_%28Linnaeus%2C_1767%29_-_Pea_Blue.jpg",
    photo3: "https://upload.wikimedia.org/wikipedia/commons/e/e4/Purple_roller_%28Coracias_naevius_mosambicus%29.jpg",
    photo4: "https://upload.wikimedia.org/wikipedia/commons/1/16/SL_Bundala_NP_asv2020-01_img30.jpg"
}
let idNumber = 0;
class card {
    constructor (backImage){
        this.backImage = backImages[backImage];
        this.cards = document.querySelector(".cards");
    }
    create(cardNumber) {
    this.cards.innerHTML += `<div class="card ccard${cardNumber}" id = "card${idNumber}">
                            <div class="image item item${cardNumber}"><img src="${this.backImage}" alt="hiddenImage"></div>
                            </div>`;
    idNumber++;
    }
}

function setGame(gameType){
    
    let cards = document.querySelector(".cards");

    for (i= 1; i <= gameType; i++){ //add 2 types of cards
        let backImage = `photo${i}`; //to have a name to class
        let newCard = new card(backImage);
        cards +=  `${newCard.create(i)}`;
        cards +=  `${newCard.create(i)}`;
    }
    let startGame = document.querySelector(".startGame");
    startGame.style.display = "none";
    setTimeout(shuffleCards,200);
    
    
}

function shuffleCards() {
    let numberOfCards = document.querySelectorAll(".card").length;
    for (i = 0 ; i < numberOfCards; i++){
        let cardId = document.getElementById(`card${i}`);
        let random = Math.floor(Math.random() * 11);
        cardId.style.order = `${random}` ;
    }
}

function turnCardsBack(){
    let turnBackitem = document.querySelector(`#${flipped[0]}`);
    let turnBack = turnBackitem.querySelector("img");
    turnBack.style.display = "none";
    flipped.shift();
}
let flip = 0;
let flipped =[];
let cardComparison = [];

document.addEventListener("click", (e) => {
    let elementId = e.target.parentElement.id;
    console.log(e.target.classList[2]);
    let elementImg = e.target.querySelector("img");
    if(elementImg){
    cardComparison.push(e.target.classList[2]);
    flipped.push(elementId);
    elementImg.style.display = "block";
    flip++;
       if (flip % 2 == 0){
        if(cardComparison[0] == cardComparison[1]){
            cardComparison = [] ;
            flipped = [];
        }else{
        cardComparison = [];
        setTimeout(turnCardsBack, 2000);
        setTimeout(turnCardsBack, 2000);
        }
        } 
    }
});