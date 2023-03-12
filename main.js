//Global variables
const rps = ['rock', 'paper', 'scissors'];

const rpsDatabase = {
	rock: { rock: 0.5, paper: 0, scissors: 1 },
	paper: { rock: 1, paper: 0.5, scissors: 0 },
	scissors: { rock: 0, paper: 1, scissors: 0.5 },
};

//The initial Score before being incremented
let botWin = 0;
let playerWin = 0;
//===============================================================================================================
let initializeTheGame = 0;
//confirm funtion
function requestToPlay() {
	let yes = 1, no = 0;
	let conf = confirm(
		'Hi this is a rock, paper and Scissors game, do you want to play?'
	);
	if (conf == false) {
		return no;
	}
	return yes;
}
//=========================================================================================================
function Alert()
{
	console.log("We are sorry that you are missing out by not playing our game\nTo Start this game please please refresh the page");
	return alert('We are sorry that you are missing out by not playing our game\nTo Start this game please please refresh the page');
}
function checkPlayerName()
{
    let name = window.prompt('Please enter your name?');
    if(name == null)
    {
        Alert();
    }
    else if(name == false)
    {
        return checkPlayerName();
    }
    else
    {
		return name;
    }
}
function AlertPlayRound()
{
	return alert('Wrong Input please try again');
}
function playNow(name)
{
	userSelection = window.prompt(`Hi ${name} Please enter the words rock, paper or scissors to play this round\nto be allowed to play`);
    if(userSelection == null)
    {
        return Alert();
    }
	else if(userSelection == false)
	{
		return playNow(name);
	}
	else
	{
		return userSelection.toLowerCase().trim();
	}
}
function checkGameOptionsInputs(userSelection)
{
	if(userSelection == null)
    {
        return Alert();
    }
	else
	{
		if(userSelection != rps[0] || userSelection != rps[1] || userSelection != rps[2])
    	{
			return alert('Game Over: Please refresh this page and make sure to enter rock, paper or scissors while playing the game to continue with the round');	
    	}
		else
		{
			return userSelection;
		}
	}
	
}

let returnValue = requestToPlay();
if(returnValue == 0)
{
    Alert();
}
else
{
    let userName = checkPlayerName();
    if(userName)
    {
		let nameIsChecked = playNow(userName);
		if(nameIsChecked)
		{
			let userSelectedOption = checkGameOptionsInputs(nameIsChecked);
			//------------ Continue with the loop here ------------//
		}
    }  
}

//user name validation
function uservali() {
	user = prompt('Hello! what is your name?');
	if (user === '') {
		alert('Please Enter Your Name');
		uservali();
	} else if (user === null) {
		alert(
			'We are sorry that you dont want to play, Please reload the page to start the game again'
		);
		console.log('To play please refresh the page');
	} else {
		return user;
	}
}
// uservali();

// alert(`Welcome to Rock, Paper, Scissors game ${user} click OK! to begin `);

// //The function to allow Bot to choose randomly
// function computerPlay() {
// 	let computerChoice = rps[Math.floor(Math.random() * rps.length)];
// 	return computerChoice;
// }

// //The playRound function that return and object with botScore and playerScore
// function playRound(playerSelection, computerSelection) {
// 	let message, botScore;

// 	(botScore = rpsDatabase[computerSelection][playerSelection]),
// 		(playerScore = rpsDatabase[playerSelection][computerSelection]);

// 	console.log(`Bot chose ${computerSelection}`);
// 	console.log(`You chose! ${player}`);

// 	if (botScore === 1) {
// 		message = `Bot won! ${computerSelection} beat ${playerSelection}`;
// 		console.log(message);
// 		return message, { botScore: 1, playerScore: 0 };
// 	} else if (botScore === 0.5) {
// 		message = `You tied!`;
// 		console.log(message);
// 		return { botScore: 0, playerScore: 0 };
// 	} else {
// 		message = `You won! ${playerSelection} beat ${computerSelection}`;
// 		console.log(message);
// 		return { botScore: 0, playerScore: 1 };
// 	}
// }

// function rpsGame() {
// 	let botChoice, score;

// 	//Bot and users choice being assigned to variables
// 	botChoice = computerPlay();
// 	player = prompt('Choose Rock, Paper or Scissors').toLowerCase();

// 	//validation of rps selection
// 	if (player === rps[0] || player === rps[1] || player === rps[2]) {
// 		/*the playRound function receiving  argument
//             values and being assigned to score tobe able to use it object returns*/
// 		score = playRound(player, botChoice);

// 		// incrementing of scores after each round
// 		botWin += score.botScore;
// 		playerWin += score.playerScore;

// 		console.log('scores \n', `Computer:${botWin}`, `${user}:${playerWin}`);

// 		console.log(`End Of Round ${i + 1}`);

// 		// Alert before each round
// 		if (i < 4) {
// 			alert(`Press OK to play Round ${i + 2}`);
// 		}

// 		// Last message to declare the winner  of all rounds
// 		if (i === 4) {
// 			if (playerWin > botWin) {
// 				console.log(
// 					`The Overall Winner is ${user} with ${playerWin} points scores`
// 				);
// 			} else if (playerWin < botWin) {
// 				console.log(
// 					`The Overall Winner is Computer with ${botWin} points scores`
// 				);
// 			} else {
// 				console.log('This was a draw match');
// 			}
// 		}
// 	} else if (player === null) {
// 		return;
// 	}
// 	//Outcome if invalid entry
// 	else {
// 		alert('Enter a valid input! ( Rock, Paper or Scissors)');
// 		rpsGame();
// 	}
// }
// /*
// for (i = 0; i < 5; i++) {
// 	rpsGame();
// }*/
