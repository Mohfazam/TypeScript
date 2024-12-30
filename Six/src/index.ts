// Given an list of Users, filter out the users that are legal to setDriver(age > 19)
console.log("Hello");

interface User{
    name: string;
    lastname: string;
    age: number;
}


function candrive(value: User[]):User[]{
    let ans = [];
    for(let i = 0; i < value.length; i++){
        if( value[i].age > 18){
            ans.push(value[i]);
        }
    }
    return ans;
}


let users: User[] = [
    {name: "sarwar", lastname:"Khan", age:21},
    {name: "John", lastname:"Doe", age:41},
    {name: "Jane", lastname:"Doe", age:11}
];

let result = candrive(users);
console.log(result);