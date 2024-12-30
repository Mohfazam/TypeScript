console.log("hello");

type Admin = {
    name: string;
    role: string;
}

type User =  Admin;

let user1: User = {
    name: "sarwar",
    role: "User"
} 

let user2: User = {
    name: "Mohfazam",
    role: "Admin"
} 

function greet(value :Admin | User): string{
    return `Welcome ${value.name} and role is ${value.role}`;
}

let result = greet(user1);
console.log(result);
console.log(greet(user2));