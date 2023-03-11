function handlesUserGameRequestInputs() {
	let yes = 1,
		no = 0;
	let playerSelection = confirm(
		'Hi this is a rock, paper and Scissors game, do you want to play?'
	);
	if (playerSelection) return yes;
	else return no;
}

function game() {
	let userChoiceOfWantingToPlay = handlesUserGameRequestInputs();
	if (userChoiceOfWantingToPlay == 1) {
		let errorFound = false;
		do {
			let inputText = handleUserInputsWhilePlaying();
			if (inputText == on) {
				alert('Wrong Input, Please try again');
			} else if (inputText == -1) {
				break;
			} else {
				//computerSelection = computerPlay();
				//console.log(`computer has selected ${computerSelection}`);
				//evaluatePoints();
				//checkWinner();
				/--------------  MAIN LOOP HERE --------------------------------/;
			}
		} while (!errorFound);
	} else {
		console.log(
			'We are sorry that you dont want to play, Please reload the page to start the game again'
		);
	}
}

function handleUserInputsWhilePlaying() {
	playerSelection = window.prompt(
		'This is a rock, paper, scissors game\nTo play this game make sure you type in only\n Rock,Paper or scissors\nor you wont be allowed to play the current round'
	);
	console.log(`You have selected ${playerSelection}`);
	if (playerSelection != null) {
		playerSelection = playerSelection.toLowerCase().trim();
		let gameLock = 1;
		if (
			playerSelection == gameOptions[0] ||
			playerSelection == gameOptions[1] ||
			playerSelection == gameOptions[2]
		) {
			gameLock = off;
			return gameLock;
		} else {
			gameLock = on;
			return gameLock;
		}
	} else {
		console.log(
			'We are sorry to say goodbye, but good news you can restart the game by refreshing this page'
		);
		return -1;
	}
}
