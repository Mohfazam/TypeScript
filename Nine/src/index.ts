console.log("Hello World from nine");

interface user{
    id: number;
    name: string;
    age: number
}

const users:Record<string, user>= {

    "sarwar":{
        id: 1,
        name:"sarwar",
        age: 19
    },
    "mohfazam":{
        id: 2,
        name: "Mohfazam",
        age: 18 
    }
}

 function totalAge(x:{[key:string]:user}):number{
    let totalAge = 0;
    for(const key in x){
        totalAge += x[key].age;
    }

    return totalAge;
}

console.log("The Users Object is: ", users);
console.log("Total age is: ", totalAge(users));


const newUsers = new Map<string, user>();
newUsers.set("Mubashir", {id: 3, name: "Mubashir", age:28});
newUsers.set("Talha", {id: 4, name: "Talha", age:25});
newUsers.set("John", {id: 5, name: "John", age:22});

console.log("\n\n New Users are :", newUsers);