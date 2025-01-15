console.log("Hello World from nine");

interface user{
    id: number;
    name: string;
    age: number
}

const users:{[key: string]:user} = {

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