console.log("Hello");

type employee = {
    name: string;
    age: number;
}

type manager = {
    name: string;
    age: number;
}


type teamlead = employee & manager;

let t: teamlead = {
    name: "Sarwar",
    age: 21
}