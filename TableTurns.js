var OutputTableTurns_class = require("./OutputTableTurns.js");
var table = [];
var rowsj = [];

module.exports.tableTurns = function tableTurns(turns,n,m) {
	turns.forEach((value, index) => {
	if(index == 0)
	rowsj[index] = 0;	
	else if(index < (turns.length) / 2)
		rowsj[index] = 2;	
	else rowsj[index] = 1;		
});

 for (let j = 0; j < turns.length; j++) 
{
	table[j] = rowsj.join('');
	let a = rowsj.splice(turns.length-1,1)
	rowsj.unshift(a[0]);
}
	if(typeof(n)!="undefined"){
	if(table[n][m] == 2)
		console.log('lose');
	if(table[n][m] == 1)
		console.log('Win');
	if(table[n][m] == 0)
		console.log('Draw');
	}else {
	    OutputTableTurns_class.outputTableTurns(turns,table);
	}
}