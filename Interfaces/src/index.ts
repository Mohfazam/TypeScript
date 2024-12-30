// console.log("Hello");

interface Address{
    city:string;
        country: string;
        pincode: number
}

class manager implements People{
    name: string;
    age: number;

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }
}

interface User {
    name: string;
    age: number;
    address?: Address
}

interface Office {
    address?: Address
}

interface People{
    name: string;
    age: number;
    // greet: () => string;
}

let person1: People = {
    name: "Sarvar",
    age: 99,
    // greet: () => {
    //     return "HI"
    // }
}

let user1: User ={
    name: "Sarwar",
    age: 79,
    address:{
        city: "Hyderabad",
        country: "India",
        pincode: 500034 
    }
}

let user2: User ={
    name: "Mohfazam",
    age: 19

}


function isLegal(user:User): boolean{
    if(user.age > 18 && user.age <= 70){
        return true;
    }
    else if(user.age > 70){
        return false;
    }
    else if(user.age < 18){
        return false;
    }
    else{
        console.log("Wrong input");
        return false;
    }
}




function canDrive(user: User){
    let ans = isLegal(user);
    if(ans){
        console.log(`\n${user.name} can drive\n`);
    }
    else{
        console.log(`\n${user.name} can't drive\n`);
    
    }
}

canDrive(user1);
canDrive(user2);
canDrive(person1);
// console.log(person1.greet());