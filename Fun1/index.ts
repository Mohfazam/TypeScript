import promptsync from "prompt-sync";

const prompt = promptsync();

function name() {
  const name = prompt("What is your name? : ");

  console.log(`Hello ${name}`);
}

name();
