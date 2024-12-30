console.log("Hello");

type employee = {
    name: string;
    age: number;
}

type manager = {
    name: string;
    department: string
}


type teamlead = employee & manager;

let t: teamlead = {
    name: "Sarwar",
    age: 21,
    department: "IT"
}

console.log(t);
