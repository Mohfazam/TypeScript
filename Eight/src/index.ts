interface user{
    id: string;
    name: string;
    age: number;
    email: string;
    password: string;
}

type UpdateProps1 = Pick<user, 'id' | 'email' | 'password'>
type UpdateProps2 = Pick<user, 'age' | 'name'>

type UpdatePropsOptional = Partial<user>;

const user1: UpdateProps2 = {
    name: "Sarwar",
    age: 10
}

const user2: UpdateProps2 = {
    name: "mohfazam",
    age: 20
}

function sumOfAge(x:UpdateProps2, y:UpdateProps2):number{
    return x.age + y.age;
}

console.log(sumOfAge(user1, user2));