var wordList = ["macintosh", "jobs", "computer", "waz", "thinkdifferent", "apple", "lisa", "appleii", "quadra", "powerbook", "iphone", "ipod", "ipad", "newton", "macbook","performa", "powermac", "imac", "ibook", "macmini", "macbookair", "iwatch", ];
var wordInPlay;
var wordInPlayLetters = [];
var numberOfTurns = 8;
var turnsTaken = 0;
var playedLetters = [];
var loseRecord = 0;
var winRecord = 0;
var winningLetters = [];
var winningMatch = [];

//Sounds 
var laugh = new Audio('assets/sounds/laugh.wav');
var startup = new Audio('assets/sounds/startup2.wav');
var single_click = new Audio('assets/sounds/single_click.wav');
var moof = new Audio('assets/sounds/moof.wav');
var temple = new Audio('assets/sounds/temple.wav');


// Press Any Key To Start
document.onkeypress = function (event) {
	// Push any key to start display -> "Press any key to get started!" -> run gameStart()
	if (document.body.classList.contains("gameintro")) {
		document.body.classList.replace("gameintro", "gamerunning");

		//Remove intro screen
		var intro = document.getElementById("intro");
		intro.remove(1);
		setBoard();
	}
  startup.play();
};







// Setup Board
function setBoard() {

	//reset variables
	turnsTaken = 0;
	wordInPlayLetters = [];
	playedLetters = [];
	winningLetters = []
	winningMatch = []

	//Clear old Letter Tiles and Letters Played lists
	removeChildElements(document.getElementById("letterTiles"));
	removeChildElements(document.getElementById("playedLettersDisplay"));

	//Clear Image classes 
	var gallows = document.querySelector(".gallows");
	for (var i = 1; i <= numberOfTurns; i++ ) {
		gallows.classList.remove('image' + i);
	}

	// Randomly pic a new word form the wordList
	wordInPlay = wordList[Math.floor(Math.random() * wordList.length)];
	console.log(wordInPlay);
	console.log("---------");
	

	// Separate wordInPlay letters into wordInPlayLetters array
	for (var j = 0; j < wordInPlay.length; j++) {
		wordInPlayLetters.push(wordInPlay.charAt(j));
	}
	
	// Create the placeHolder tiles
	for (var k = 0; k < wordInPlayLetters.length; k++) {
		var listItem = document.createElement("li");
		var placeHolder = document.createTextNode("_");
		listItem.appendChild(placeHolder);
		document.getElementById("letterTiles").appendChild(listItem);
	}

	document.getElementById("turnsTaken").innerHTML = numberOfTurns;

	gamePlay()
}



<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script type="text/javascript" src="vocabList.js"></script>
<script type="text/javascript">
$(document).ready(function () {

	var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P",
	"Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "_"
	];


var vocabList = document.getElementById("vocabList.js");

fillLetters = vocabList[Math.floor(Math.random() * vocabList.length)];
console.log(fillWord);

for (var j = 0; j < vocabList.length; j++) {
var fillWord = vocabList[j].vocabWord;
var fillWord = document.createElement("container");
var blanksHolder = document.createTextNode("_");
fillWord.appendChild(blanksHolder);
document.getElementById("fillInBlanks").appendChild(fillLetters);

// push letters into array
for (var k = 0; k < fillWord.length; k++) {
	fillLetters.push(fillWord.charAt[k]);
}

var fillDef = vocabList[j].vocabDef;
var fillDef = document.createElement("P");
var definitionHolder = document.createTextNode(".");
fillDef.appendChild(definitionHolder);
document.getElementById("vocab").appendChild(fillDef);
};
