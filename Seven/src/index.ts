console.log("Hello");

interface User{
    id: string;
    name: string;
    age: number;
    email: string;
    password: string;
};

type UpdateProps = Pick<User, 'name' | 'age' | 'email'>

const sarwar: UpdateProps= {
    name: "Sarwar",
    age: 19,
    email: "1@"
}

const azam: UpdateProps= {
    name: "azam",
    age: 10
}

function sumOfAge(a:UpdateProps, b:UpdateProps){
    return a.age + b.age;
}

// let ans = sumOfAge(sarwar, azam);

// console.log(ans);