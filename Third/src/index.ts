function greet(user: schema) {
    console.log(`Fist name: ${user.firstName} \nlast name: ${user.lastname} \nage : ${user.age}`);
}

type schema = {
    firstName: string,
    lastname: string,
    age: number
}

const user: schema = {firstName : "Sarwar", lastname:"khan", age: 25};

greet(user);