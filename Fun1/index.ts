import  promptsync from "prompt-sync";

const prompt = promptsync();

const name = prompt("What is your name?");

console.log(`Hello ${name}`);