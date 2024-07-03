const name = "Vivek"
const age = 50

console.log(`Hello my name is ${name} and my age is ${age}.`);

//declare string in one more method

const gameName = new String('Viv-ek')
console.log(gameName);
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);//method
console.log(gameName.toUpperCase());//Function
console.log(gameName.charAt(3));
console.log(gameName.indexOf('e'));

//Divide into substring
const newString = gameName.substring(0, 3)
console.log(newString);


const newTrim = "                     SORRY                 "
console.log(newTrim);
console.log(newTrim.trim());

const url = "https://vivek.com/vivek%20Jha"

console.log(url.replace('%20', '-'));