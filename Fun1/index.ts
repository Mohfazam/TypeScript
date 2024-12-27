import promptsync from "prompt-sync";
// npm install --save-dev @types/prompt-sync          == need to run this command before using prompt-sunc
const prompt = promptsync();

function name() {
  const name = prompt("What is your name? : ");

  console.log(`Hello ${name}`);
}

name();
