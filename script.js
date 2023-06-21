/* var backImages = {
    photo1: "https://upload.wikimedia.org/wikipedia/commons/4/43/Cute_dog.jpg",
    photo2: "https://upload.wikimedia.org/wikipedia/commons/e/e4/Mating_of_Lampides_boeticus_%28Linnaeus%2C_1767%29_-_Pea_Blue.jpg",
    photo3: "https://upload.wikimedia.org/wikipedia/commons/e/e4/Purple_roller_%28Coracias_naevius_mosambicus%29.jpg",
    photo4: "https://upload.wikimedia.org/wikipedia/commons/1/16/SL_Bundala_NP_asv2020-01_img30.jpg",
    photo5: "https://upload.wikimedia.org/wikipedia/commons/e/e0/%D0%A1%D0%BE%D1%80%D1%83%D1%81_%D0%BF%D0%B0%D0%BF%D0%BE%D1%80%D0%BE%D1%82%D0%BD%D0%B8%D0%BA%D0%B0_Polypodium_aureum_2.jpg",
    photo6: "https://upload.wikimedia.org/wikipedia/commons/a/a9/%D0%A1%D1%83%D1%80%D0%BE%D0%BA_%D1%87%D0%B5%D1%80%D0%BD%D0%BE%D1%88%D0%B0%D0%BF%D0%BE%D1%87%D0%BD%D1%8B%D0%B9_%28%D0%BA%D0%B0%D0%BC%D1%87%D0%B0%D1%82%D1%81%D0%BA%D0%B8%D0%B9%29.jpg",
    photo7: "https://upload.wikimedia.org/wikipedia/commons/9/90/14_05_2015_Gomphus_vulgatissimus_-_Common_Clubtail_-_Gemeine_Keiljungfer_05.jpg",
    photo8: "https://upload.wikimedia.org/wikipedia/commons/8/80/%D0%A1%D0%BE%D1%80%D1%83%D1%81_%D0%BF%D0%B0%D0%BF%D0%BE%D1%80%D0%BE%D1%82%D0%BD%D0%B8%D0%BA%D0%B0_Polypodium_aureum.jpg",
    photo9: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Bosc%27s_fringe-toed_lizard_%28Acanthodactylus_boskianus_asper%29_juvenile.jpg",
    photo10: "https://a-z-animals.com/media/tiger_laying_hero_background.jpg",
    photo11: "https://ideas.ted.com/wp-content/uploads/sites/3/2020/05/final_animals-homeschooling_credit-alamy.jpg",
    photo12: "https://upload.wikimedia.org/wikipedia/commons/f/f0/Pond_of_Kuruwapari_Chaudharitol-_Inaruwa%2C_Kosi_Municipality-WLV-2252.jpg",
    photo13: "",
    photo14: "",
    photo15: "",
} */

var backImages = {}
for (i=1; i < 15; i++){
    let picId = Math.floor(Math.random() * 1000);
    backImages[`photo${i}`] = `https://picsum.photos/id/${picId}/150/100`;
}
console.log(backImages);
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
    shuffleCards();

    setTimeout(hideTheCards, 4000);   
    
}
function hideTheCards() {
    let howManyCards = document.querySelectorAll(".card").length;
    
    for (i=0 ; i < howManyCards; i++){
        let card = document.getElementsByClassName(`item`)[i];
        let hideImg = card.querySelector("img");
        hideImg.style.display = "none";
    }
}
function shuffleCards() {
    let numberOfCards = document.querySelectorAll(".card").length;
    for (i = 0 ; i < numberOfCards; i++){
        let cardId = document.getElementById(`card${i}`);
        let random = Math.floor(Math.random() * 100);
        cardId.style.order = `${random}` ;
    }
}

function turnCardsBack(){
    let turnBackitem = document.querySelector(`#${flipped[0]}`);
    let turnBack = turnBackitem.querySelector("img");
    turnBack.style.display = "none";
    flipped.shift();
}

//the start of the game :)
let flip = 0;
let flipped =[];
let cardComparison = [];
function alert2 (){
    alert("Wait 2 seconds");

}
function stopEventListener(){
    
    document.removeEventListener("click",alert2);
}

function gameListener(){
document.addEventListener("click", (e) => {
    let elementId = e.target.parentElement.id;
    let elementImg = e.target.querySelector("img");
    if(elementImg){
    cardComparison.push(e.target.classList[2]);
    flipped.push(elementId);
    elementImg.style.display = "block";
    flip++;
    /* console.log(e.target.classList[2]); */
       if (flip % 2 == 0){
        document.addEventListener("click", alert2);
        setTimeout(stopEventListener,2200);
        
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
})
};
gameListener();