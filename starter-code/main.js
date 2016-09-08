var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];


var board = document.getElementById('game-board');

function createBoard() {
	for (var i=0; i < cards.length; i++) {
		var cardElement = document.createElement('div');
		cardElement.className = 'card';
		cardElement.setAttribute('data-card', cards [i]);
		cardElement.addEventListener('click', isTwoCards);
		board.appendChild(cardElement);
	}
}

function isTwoCards() {
	cardsInPlay.push(this.getAttribute('data-card'));
		console.log(this.getAttribute('data-card'));
		if (this.getAttribute('data-card') === 'king') {
			this.innerHTML = "<img src='KingLl.jpg'>";
		} else {
			this.innerHTML = "<img src ='QueenCc.jpg'>";
		}
	if (cardsInPlay.length === 2) {
		isMatch(cardsInPlay);
		cardsInPlay = [];
		for (var i = 0; i < cards.length; i++) {
    		document.getElementsByClassName('card')[i].innerHTML = " ";
  		}
	}
}

function isMatch(cards) {
	if (cards[0] === cards[1]) {
	alert ("Match Made!");
	} else {
	 alert("Please try again :(");
	} 
}

createBoard();