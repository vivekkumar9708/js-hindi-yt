let score = "33abc"

console.log(typeof score);
console.log(typeof (score));

//Convert string to number/bool/
let ValueInNumber = Number(score)
console.log(typeof ValueInNumber);
console.log(ValueInNumber);

//Conversion
//"33" => 33
//"33abc" => Nan
//true => 1
//false => 0


let isLoogectIn = 1
let booleanIsLoogedIn = Boolean(isLoogectIn)
console.log(booleanIsLoogedIn);

// ****************************Operation*******************************************
let value = 3
let negValue = -value//Negative value
console.log(negValue);


//Adding two string
let str1 = "Hello"
let str2 = " Vivek"

let str3 = str1 + str2
console.log(str3);


//Conversion
//console.log("1" + 2);//Not best pratics
//console.log(1 + "2");//Not best pratics
//console.log("1" + 2 + 2);//Not best pratics
//console.log((1 + 2) * 5 % 3);// best pratise for code 

console.log(+true);//Not good pratise

