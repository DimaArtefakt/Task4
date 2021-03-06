var HMAC_class = require("./Task4_HMAC.js");
var TableTurns_class = require("./TableTurns.js");
var OutputTableTurns_class = require("./OutputTableTurns.js");
const readline = require('readline');

const rl = readline.createInterface({
  input:  process.stdin,
  output: process.stdout
});

function noCorectionOutput(err){
	console.log(err);
	process.exit();
}

var turns = process.argv.splice(2);
const d = [...new Set(turns)];

function inputOutput(){
	var rand = Math.floor(Math.random() * (turns.length));
	HMAC_class.hmac(turns[rand]);
	rl.question("Enter your move: ", (answer) => { 
    if(answer == 0){
	process.exit();
    }else if(answer > 0 && answer <= turns.length){
    console.log("Your move: ", turns[answer-1]);
    console.log("Computer move: ", turns[rand]);
	TableTurns_class.tableTurns(turns,rand,answer-1);
    HMAC_class.hmacKEY();
	inputOutput();		
	}else if(answer == '?'){
		TableTurns_class.tableTurns(turns);
		inputOutput();		
	}else
		noCorectionOutput('wrong character');
});
}

if(d.length == turns.length){
if ((turns.length) % 2 == 1 || turns.length  % 2 >= 5) {
console.log('Available moves:');
turns.forEach((value, index) => {
	console.log(index + 1 + ' - ' + turns[index]);	
});
console.log('0 - exit');
console.log('? - help');	
inputOutput();
} else noCorectionOutput('an even number of moves has been entered');	
}else noCorectionOutput('dubl');