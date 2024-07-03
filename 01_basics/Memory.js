//Stack(send copy) (Primitive) Heap(Send value)(Non primitive datatype)

let myte = "Vivek"
let anotheryt = myte

anotheryt  = "Kumar"

console.log(myte);
console.log(anotheryt);

let user1 = {
    email:"gmail.com",
    age:4,
}

let user2 = user1

user2.email = "vivekgmail.com"
console.log(user1.email);
console.log(user2.email);