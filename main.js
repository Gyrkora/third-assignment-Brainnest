//global variables
const rps = ['rock', 'paper', 'scissors'];
const rpsDatabase = {
	rock: { rock: 0.5, paper: 0, scissors: 1 },
	paper: { rock: 1, paper: 0.5, scissors: 0 },
	scissors: { rock: 0, paper: 1, scissors: 0.5 },
};
//The initial Score before being incremented
let botWin = 0;
let playerWin = 0;

//This funtion handles the users confirmation to play the game
function handlesUserGameRequestInputs() {
	let playerConfirm = confirm(
		'Hi this is a rock, paper and scissors game, press OK if your want to play?'
	);

	if (playerConfirm) {
		uservali();
	} else {
		throw console.log('If You decide to play the Game kindly refresh the page');
	}
}
handlesUserGameRequestInputs();

//user name validation
function uservali() {
	user = prompt('Hello! what is your name?');
	if (user === '') {
		alert('Please Enter Your Name');
		uservali();
	} else if (!user) {
		let conf = confirm(
			'Sorry but you pressed "Cancel!":( Press "Ok"to Enter name or Cancel to exit'
		);
		if (conf) {
			uservali();
		} else {
			throw console.log(
				'If You decide to play the Game kindly refresh the page to begin'
			);
		}
	} else {
		return user;
	}
}

alert(`Welcome to Rock, Paper, Scissors game ${user} click "OK!" to begin `);

//The function to allow Bot to choose randomly
function computerPlay() {
	let randomSelection = rps[Math.floor(Math.random() * 3)];
	return randomSelection;
}
// This funtion takes return  the usersChoice with what happens when he decide to click okay or cancel
function userChoice() {
	let playerChoice = prompt('Choose Rock, Paper or Scissors');

	if (playerChoice === null) {
		let roundconf = confirm(
			'You pressed "Cancel", press "Ok" to go back or "Cancel" to close the Game'
		);
		if (roundconf) {
			userChoice();
		} else {
			console.clear();
			throw console.log(
				'If You decide to play the Game kindly refresh the page to begin'
			);
		}
	}

	playerChoice = playerChoice.toLowerCase().trim();

	if (!rps.includes(playerChoice)) {
		alert('Incorrect entry ');
		return userChoice();
	}

	return playerChoice;
}

//The playRound function take both the bots and user's choice and return an object with botScore and playerScore
function playRound(playerSelection, computerSelection) {
	let playerScore, botScore;

	//this is how each picks the scores
	botScore = rpsDatabase[computerSelection][playerSelection];
	playerScore = rpsDatabase[playerSelection][computerSelection];

	if (botScore === 1) {
		message = `Bot won! ${computerSelection} beat ${playerSelection}`;
		console.log(`Bot chose ${computerSelection}`);
		console.log(`You chose! ${playerSelection}`);
		console.log(message);
		return message, { botScore: 1, playerScore: 0 };
	} else if (botScore === 0.5) {
		message = `You tied!`;
		console.log(`Bot chose ${computerSelection}`);
		console.log(`You chose! ${playerSelection}`);
		console.log(message);
		return { botScore: 0, playerScore: 0 };
	} else {
		message = `You won! ${playerSelection} beat ${computerSelection}`;
		console.log(`Bot chose ${computerSelection}`);
		console.log(`You chose! ${playerSelection}`);
		console.log(message);
		return { botScore: 0, playerScore: 1 };
	}
}

// this funtion return  a new score based on the winner by incrementing
function scoreCounter(count) {
	botWin += count.botScore;
	playerWin += count.playerScore;
	console.log(count.botScore);

	return [botWin, playerWin];
}

// this is the  actuall game funtion which all other funtion connects to be run in a loop
function game() {
	for (i = 0; i < 5; i++) {
		score = playRound(userChoice(), computerPlay());
		scoreCounter(score);
		console.log('scores \n', `Computer:${botWin}`, `${user}:${playerWin}`);
		console.log(`End of round ${i + 1}`);
		if (i < 4) {
			alert(`Press OK to play Round ${i + 2}`);
		}
	}
}

game();

// This funtion declares the winener after ever five interation
function winnerDeclare() {
	let totalScore = scoreCounter(score);
	if (totalScore[1] > totalScore[0]) {
		console.log(
			`Congrats:) The Overall Winner is ${user} with ${totalScore[1]} points scores`
		);
		replay();
	} else if (totalScore[0] > totalScore[1]) {
		console.log(
			`The Overall Winner is Computer with ${totalScore[0]} points scores`
		);
		replay();
	} else {
		console.log('This was a draw match');
		replay();
	}
}

winnerDeclare();

// this funtion replays the game  depending on the users reponds after every 5 rounds
function replay() {
	let replayConfirm = confirm(
		'Would You like to play again..Press "ok" to replay or "cancle" to quite'
	);
	if (replayConfirm) {
		while (replayConfirm) {
			botWin = 0;
			playerWin = 0;
			console.clear();
			game();
			replay();
		}
	} else {
		alert('Hope You Enjoyed see You Another time');
		console.clear();
		throw console.log('If You decide to play the Game kindly refresh the page');
	}
}
