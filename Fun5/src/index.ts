interface User{
    name: string;
    age: number;
}

let user1: User = {
    name: "sarwar",
    age: 19
}

let user2: User = {
    name: "Mohfazam",
    age: 19
}

function sumofAges(x: User, y:User):number{
    return x.age+y.age;
}

let result = sumofAges(user1, user2);
console.log(result);