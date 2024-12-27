function greet(user: {
    name: string;
    age: number;
}) {
    console.log(`name: ${user.name} and age is : ${user.age}`);
}
const user: { name: string, age: number } = {name : "Sarwar", age: 25};

greet(user);