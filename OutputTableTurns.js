module.exports.outputTableTurns = function outputTableTurns(turns,table) {
let str2 = 'name/ \t| '; 

turns.forEach(function(item, i, turns) {
   str2 += turns[i] + '\t|'; 
});
console.log(str2);

turns.forEach(function(item, i, turns) {
	str2 = '';
	str2 += '\n '+turns[i]+ ' \t| ';
	table.forEach(function(item, j, turns) {
		
   	if(table[i][j] == 2)
		str2 +='Win' +'\t';		
	if(table[i][j] == 1)
		str2 +='Lose' +'\t';		
	if(table[i][j] == 0)
		 str2 +='Draw' +'\t';
   });	
   console.log(str2);
});
}