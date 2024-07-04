//Date & Time Depth in JS
let myDate = new Date()
console.log(myDate);//Normal date
console.log(myDate.toString());//Convert into string
console.log(myDate.toDateString());//Current day date only 
console.log(typeof myDate);

//Create Specific date
let myCreatedDate = new Date (2023, 0, 3)

//Define yyyy-mm-dd
let myCreatedDate1 = new Date ("2023-01-15")

console.log(myCreatedDate1.toDateString());

//TimeStamp
let myTime = Date.now()
console.log(myTime);

//Convert into sec
console.log(Math.floor(Date.now())/1000);

//More date features with funcation
let newDate = new Date()
console.log(newDate);
console.log(newDate.getDay());
console.log(newDate.getMonth() + 1);
console.log(newDate.getFullYear());

//Add more funcation
newDate.toLocaleString('default', {
    weekday: "long"
})