var backImages = {
    photo1: "https://upload.wikimedia.org/wikipedia/commons/4/43/Cute_dog.jpg",
    photo2: "https://upload.wikimedia.org/wikipedia/commons/e/e4/Mating_of_Lampides_boeticus_%28Linnaeus%2C_1767%29_-_Pea_Blue.jpg",
    photo3: "https://upload.wikimedia.org/wikipedia/commons/e/e4/Purple_roller_%28Coracias_naevius_mosambicus%29.jpg",
    photo4: "https://upload.wikimedia.org/wikipedia/commons/1/16/SL_Bundala_NP_asv2020-01_img30.jpg"
}

class card {
    constructor (backImage){
        this.backImage = backImages[backImage];
        this.cards = document.querySelector(".cards");
    }
    create(cardNumber) {
    this.cards.innerHTML += `<div class="card ccard${cardNumber}">
                            <div class="image item item${cardNumber}"><img src="${this.backImage}" alt="hiddenImage"></div>
                            </div>`;
    
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
}


let flip = 0;
let flipped =[];

document.addEventListener("click", (element) => {
    element = element.target;
    let elementImg = element.querySelector("img");
    if(elementImg){
    flipped.push(element.classList[2]);
    console.log(flipped);
    elementImg.style.display = "block";
    flip++;
        if (flip % 2 == 0){
            console.log(flip);
            let turnBackitem = document.querySelectorAll(`.${flipped[0]}`);
            let turnBack = turnBackitem.querySelector("img");
            turnBack.style.display = "none";
            console.log(turnBack);
        }
    }
});