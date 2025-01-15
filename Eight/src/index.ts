interface user{
    name: string;
    age: number;
}

const user1: user = {
    name: "Sarwar",
    age: 10
}

const user2: user = {
    name: "mohfazam",
    age: 20
}

function sumOfAge(x:user, y:user):number{
    return x.age + y.age;
}

console.log(sumOfAge(user1, user2));