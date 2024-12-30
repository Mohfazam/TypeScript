console.log("Hello");

interface User {
    name: string;
    age: number;
    address:{
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

console.log(user1);
let ans = isLegal(user1);
console.log(ans);
