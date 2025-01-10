console.log("Hello");

interface User{
    name: string;
    age: number;
};

const sarwar: User= {
    name: "Sarwar",
    age: 19
}

const azam: User= {
    name: "azam",
    age: 10
}

function sumOfAge(a:User, b:User){
    return a.age + b.age;
}

let ans = sumOfAge(sarwar, azam);

console.log(ans);