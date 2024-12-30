// console.log("Hello");

interface User {
    name: string;
    age: number;
    address?: {
        city:string;
        country: string;
        pincode: number
    }
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
