// Your solution goes here 
function guessGame(count){

let count = count;

let guessed = prompt("Guess number between 1 to 100. "+count+" total chance.");
let guessedNumber = isNaN(guessed) ? prompt("Enter number only, give a number") : guessed;
let numToGuess = Math.round(100*(Math.random()));
//let numToGuess = 10;


while(count>0){
	
	if(numToGuess < guessedNumber){
		count--;
		let guessed1 = prompt("Guess a smaller number. "+count+" left");
		guessedNumber = isNaN(guessed1) ? prompt("Enter number only, give a number") : guessed1;
	}
	else if(numToGuess > guessedNumber){
		count--;
		let guessed2 = prompt("Guess a higher number. "+count+" left");
		guessedNumber = isNaN(guessed2) ? prompt("Enter number only, give a number") : guessed2;
	}
	else if(numToGuess == guessedNumber){
		alert("Guessed. Chances taken "+(10-count));
		count = 0;
		break;
	}
	
	//alert("Correct number was: "+numToGuess+" Chances taken: "+count);
	
	}
}


guessGame(10);