// Given an list of Users, filter out the users that are legal to setDriver(age > 19)
console.log("Hello");

interface User{
    name: string;
    lastname: string;
    age: number;
}


function candrive(value: User):boolean{
    return value.age> 18;
}


let  user1: User = {
    name: "Sarwar",
    lastname: "Khan",
    age: 1
}

let ans = candrive(user1);
console.log(ans);