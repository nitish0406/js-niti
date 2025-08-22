const accountId = 144553
let accountEmail="nitish0406@gmail.com"
var accountPassword="12345"
accountCity="Moka"
let accountState;

// accountId=2 //not allowed
accountEmail="hr@gamil.com"
accountPassword="0406"
accountCity="Flacq"

console.log(accountId);

/*
Prefer not to use var 
because of issue in block and functional scope
*/

console.table([accountId,accountEmail, accountPassword, accountCity, accountState])
