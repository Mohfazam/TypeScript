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
    age: 19,
    address:{
        city: "Hyderabad",
        country: "India",
        pincode: 500034 
    }

}

console.log(user1);