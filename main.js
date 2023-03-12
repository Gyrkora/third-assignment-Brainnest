const rps = ['rock', 'paper', 'scissors'];
const rpsDatabase = {
		'rock': { 'rock': 0.5, 'paper': 0, 'scissors': 1 },
		'paper': { 'rock': 1, 'paper': 0.5, 'scissors': 0 },
		'scissors': { 'rock': 0, 'paper': 1, 'scissors': 0.5 },
	};
//The initial Score before being incremented
let botWin = 0;
let playerWin = 0;


function handlesUserGameRequestInputs(){
    let playerSelection = confirm("Hi this is a rock, paper and Scissors game, press okay if your want to play?");
    if(playerSelection){
		uservali()
	}
	else{
		throw console.log( "If You decide to play the Game kindly refresh the page")	
		}
	}
handlesUserGameRequestInputs()

//user name validation
function uservali() {
	user = prompt('Hello! what is your name?');
	if (user === "") {
		alert('Please Enter Your Name');
		uservali();
	}else if(!user){
	     let conf= confirm("Sorry but you pressed Cancel!:( Press Okay to Enter name or Cancel to exit")
		 if(conf){
			uservali()
		 }else{
			throw console.log( "If You decide to play the Game kindly refresh the page")
		 }
	}
	else{
		return user
	}
}

alert(`Welcome to Rock, Paper, Scissors game ${user} click OK! to begin `)


//The function to allow Bot to choose randomly
function computerPlay() {
	let randomSelection = rps[Math.floor(Math.random() * 3)];
	return randomSelection;
}

//The playRound function that return and object with botScore and playerScore
function playRound(playerSelection, computerSelection) {
	let playerScore, botScore;

	;

	botScore = rpsDatabase[computerSelection][playerSelection],
	playerScore = rpsDatabase[playerSelection][computerSelection];

	

	if (botScore === 1) {
		message = `Bot won! ${computerSelection} beat ${playerSelection}`;
		console.log(`Bot chose ${computerSelection}`);
		console.log(`You chose! ${player}`);
		console.log(message);
		return message, { botScore: 1, playerScore: 0 };
	} else if (botScore === 0.5) {
		message = `You tied!`;
		console.log(`Bot chose ${computerSelection}`);
	console.log(`You chose! ${player}`);
		console.log(message);
		return { botScore: 0, playerScore: 0 };
	} else {
		message = `You won! ${playerSelection} beat ${computerSelection}`;
		console.log(`Bot chose ${computerSelection}`);
		console.log(`You chose! ${player}`);
		console.log(message);
		return { botScore: 0, playerScore: 1 };
	}
}

function rpsGame() {
	let botChoice, score;

	//Bot and users choice being assigned to variables
	botChoice = computerPlay();
	player = prompt('Choose Rock, Paper or Scissors').toLowerCase().trim();

	//validation of rps selection
	if (player === rps[0] || player === rps[1] || player === rps[2]) {
		/*the playRound function receiving  argument
            values and being assigned to score tobe able to use it object returns*/
		score = playRound(player, botChoice);

		// incrementing of scores after each round
		botWin += score.botScore;
		playerWin += score.playerScore;

		console.log('scores \n', `Computer:${botWin}`, `${user}:${playerWin}`);

		console.log(`End Of Round ${i + 1}`);

		// Alert before each round
		if (i < 4) {
			alert(`Press OK to play Round ${i + 2}`);
		}

		// Last message to declare the winner  of all rounds
		if (i === 4) {
			if (playerWin > botWin) {
				console.log(
					`The Overall Winner is ${user} with ${playerWin} points scores`
				);
			} else if (playerWin < botWin) {
				console.log(
					`The Overall Winner is Computer with ${botWin} points scores`
				);
			} else {
				console.log('This was a draw match');
			}
		}
	} else if (player === null) {
		return;
	}
	//Outcome if invalid entry
	else {
		alert('Enter a valid input! ( Rock, Paper or Scissors)');
		rpsGame();
	}
}

for (i = 0; i < 5; i++) {
	rpsGame();
}
