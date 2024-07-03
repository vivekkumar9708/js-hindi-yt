const account_Id = 144994 // Value constant
let accountEmail = "vivek@google.com"
var accountPass = "12345"
accountcity = "WB"// This is not good please use only const and let keyword for assignment
let accountstate;// if you have not define any value in JS,then its undefined 
/*
Prefer not to use var keyword
because of issue in block scope and funcational scope.
*/
 // account_Id = 2// Not allowed in JS
accountEmail = "Vivekgamil.com" //Value change 
accountPass = "123"//Value change
accountcity = "TATA"//Value change
 console.log(account_Id);

 console.table([account_Id, accountEmail, accountPass, accountcity, accountstate])