const options = ['rock', 'paper', 'scissors'];
const beat = [
	'Paper beats rock!',
	'Rock beats scissors!',
	'Scissors beats paper!',
];

function computerPlay() {
	let randomNumber;
	let choice;
	randomNumber = Math.floor(Math.random() * 3); /// Gets random number between 0 and 2 inclusive
	choice = options[randomNumber]; //chooses the first[0], second[1] or third[2] element in the array, depending on the random number
	console.log('Computer has chosen ' + choice);
	return choice;
}

function playRound(playerSelection, computerSelection) {
	///Checks if it's a tie
	if (playerSelection == computerSelection) {
		// console.log(`We have ${playerSelection} vs ${computerSelection}`)
		return ' it is a Tie';
	}
	///If not a tie, checks winner and returns it.
	else {
		switch (playerSelection) {
			case options[0]:
				if (computerSelection == options[1]) {
					console.log(beat[0]);
					return 'Computer';
				} else {
					console.log(beat[1]);
					return 'Player';
				}

			case options[1]:
				if (computerSelection == options[0]) {
					console.log(beat[0]);
					return 'Player';
				} else {
					console.log(beat[2]);
					return 'Computer';
				}

			case options[2]:
				if (computerSelection == options[0]) {
					console.log(beat[1]);
					return 'Computer';
				} else {
					console.log(beat[2]);
					return 'Player';
				}
		}
	}
}

function oneRound(playerName) {
	let choice = prompt(
		`Let's play, ${playerName}! Choose rock, paper or scissors!`
	).toLowerCase(); ///Gets the players response to lower case, no matter how they write it.
	///Checks the player enters a valid option, any other word or null won't work.
	if (
		(choice == options[0]) |
		(choice == options[1]) |
		(choice == options[2])
	) {
		let computerChoice, result;
		console.log(`${playerName} chose ${choice}!`);
		computerChoice = computerPlay();
		result = playRound(choice, computerChoice);
		///Checks winner/tie
		switch (result) {
			case 'Player':
				console.log(`${playerName} won the round!`);
				return 'Player';
			case 'Computer':
				console.log(`The computer won the round!`);
				return 'Computer';
			case 'Tie':
				console.log(`It's a tie!`);
				return 'Tie';
		}
	}
	///If the player choice is a word other than rock/paper/scissors or if it's null:
	else {
		alert('You need to choose a valid move! (Rock, paper, scissors)');
		return null;
	}
}

///Main function

function game() {
	let playerPoints = 0,
		computerPoints = 0,
		roundNumber = 1,
		replay;
	let playerName = prompt("What's your name?");
	///if the name is not null, which means something was provided in the input, start the game.
	if (playerName) {
		///Loop of 5 rounds, unless nothing was provided in the [rock, paper, scissors] input, in which case the round won't count.
		for (let i = 0; i < 5; i++) {
			///Calls the round function, giving the player name as a parameter to use in it.
			let round = oneRound(playerName);
			///Checks who won or if it was a tie/null.
			switch (round) {
				case 'Player':
					playerPoints++;
					console.log(
						`${playerName} = ${playerPoints} | Computer = ${computerPoints} | Round ${roundNumber}`
					);
					roundNumber++;
					break;
				case 'Computer':
					computerPoints++;
					console.log(
						`${playerName} = ${playerPoints} | Computer = ${computerPoints} | Round ${roundNumber}`
					);
					roundNumber++;
					break;
				case 'Tie':
					console.log(
						`${playerName} = ${playerPoints} | Computer = ${computerPoints} | Round ${roundNumber}`
					);
					roundNumber++;
					break;
				case null:
					i--;
					break;
			}
		}
		///Once it completes the 5 rounds, checks who won more rounds.
		switch (true) {
			case playerPoints > computerPoints:
				console.log(`${playerName} wins the game!`);
				break;
			case computerPoints > playerPoints:
				console.log('The computer wins the game!');
				break;
			///In case it's a tie...
			case computerPoints == playerPoints:
				let final = 'Tie';
				///... gets into a loop until the tie is solved.
				while (final == 'Tie') {
					console.log("It's a tie! let's try once more!");
					final = round();
				}
				if (final == 'Player') {
					console.log(`${playerName} wins! Congratulations!`);
				} else {
					console.log('The computer wins! Good luck next time!');
				}
		}
		///Once the game is finished, asks if the player wishes to restart the game.
		replay = confirm('Great game! Do you wanna play again?');
		///Case Yes, calls the main function again and restarts
		if (replay) {
			game();
		}
		///Case No, it returns the value stopping the code.
		return;
	}
	///If the name is null, which means nothing was provided in the input or it was cancelled, alert and restart the function
	else {
		alert('Please enter your name!');
		game();
	}
}

game();
