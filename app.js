///
const cardArray = [
  {
    name: "charizard",
    img: "images/charizard.png",
  },
  {
    name: "dragonite",
    img: "images/draonite-5.png",
  },
  {
    name: "venasaur",
    img: "images/venasaur.png",
  },
  {
    name: "pickachu",
    img: "images/pickachu.png",
  },
  {
    name: "machamp",
    img: "images/machamp.png",
  },
  {
    name: "snorlax",
    img: "images/snorlax.png",
  },
  {
    name: "mew",
    img: "images/mew.png",
  },
  {
    name: "charizard",
    img: "images/charizard.png",
  },
  {
    name: "dragonite",
    img: "images/draonite-5.png",
  },
  {
    name: "venasaur",
    img: "images/venasaur.png",
  },
  {
    name: "pickachu",
    img: "images/pickachu.png",
  },
  {
    name: "machamp",
    img: "images/machamp.png",
  },
  {
    name: "snorlax",
    img: "images/snorlax.png",
  },
  {
    name: "mew",
    img: "images/mew.png",
  },
];

cardArray.sort(() => 0.5 - Math.random());

const gridDisplay = document.querySelector("#grid");
const resultDisplay = document.querySelector("#result");
let cardsChosen = [];
let cardsChosenIds = [];
const cardsWon = [];

function createBoard() {
  for (let i = 0; i < cardArray.length; i++) {
    const card = document.createElement("img");
    card.setAttribute("src", "images/pokemon.png");
    card.setAttribute("data-id", i);
    card.addEventListener("click", flipCard);
    gridDisplay.appendChild(card);
  }
}
createBoard();

function checkMatch() {
  const cards = document.querySelectorAll("img");
  const optionOneId = cardsChosenIds[0];
  const optionTwoId = cardsChosenIds[1];

  if (optionOneId == optionTwoId) {
    cards[optionOneId].setAttribute("src", "images/pokemon.png");
    cards[optionTwoId].setAttribute("src", "images/pokemon.png");
    alert("Clicked same card try a different card");
  }

  if (cardsChosen[0] == cardsChosen[1]) {
    alert("You are amazing! Found a match!");
    cards[optionOneId].setAttribute("src", "images/blank-1.png");
    cards[optionTwoId].setAttribute("src", "images/blank-1.png");
    cards[optionOneId].removeEventListener("click", flipCard);
    cards[optionTwoId].removeEventListener("click", flipCard);
    cardsWon.push(cardsChosen);
  } else {
    cards[optionOneId].setAttribute("src", "images/pokemon.png");
    cards[optionTwoId].setAttribute("src", "images/pokemon.png");
    alert("Sorry, not a match. Please try again");
  }
  resultDisplay.innerHTML = cardsWon.length;
  cardsChosen = [];
  cardsChosenIds = [];

  if (cardsWon.length == cardArray.length / 2) {
    resultDisplay.innerHTML =
      "Congratulations, you found them all Pokemon Master!";
  }
}

function flipCard() {
  const cardId = this.getAttribute("data-id");
  cardsChosen.push(cardArray[cardId].name);
  cardsChosenIds.push(cardId);
  this.setAttribute("src", cardArray[cardId].img);
  if (cardsChosen.length === 2) {
    setTimeout(checkMatch, 500);
  }
}
