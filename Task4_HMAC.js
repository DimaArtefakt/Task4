const crypto = require('crypto');
var token = crypto.randomBytes(32).toString('hex');
var sha3_256 = require('js-sha3').sha3_256;

 module.exports.hmac = function HMAC_modul(turns) {
    console.log('HMAC:');
	console.log(sha3_256(token + turns));
}
 module.exports.hmacKEY = function HMAC_KEY() {
	 console.log('HMAC KEY:');
    console.log(token);	
 }
 