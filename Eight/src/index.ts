interface user{
    readonly id: string;
    name: string;
    age: number;
    readonly email: string;
    readonly password: string;
}

type UpdateProps1 = Pick<user, 'id' | 'email' | 'password'>
type UpdateProps2 = Pick<user, 'age' | 'name'>

type UpdatePropsOptional = Partial<user>;

const user1: Readonly<user> = {
    name: "Sarwar",
    age: 10,
    id: "1111", 
    email: "mohd.sarwar.code@gmail.com",
    password: "qwertyuiop"
}

const user2: UpdateProps2 = {
    name: "mohfazam",
    age: 20
}

function sumOfAge(x:UpdateProps2, y:UpdateProps2):number{
    return x.age + y.age;
}

console.log(sumOfAge(user1, user2));

// user1.age = 20