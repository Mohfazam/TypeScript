import promptsync from "prompt-sync";
// npm install --save-dev @types/prompt-sync          == need to run this command before using prompt-sunc
const prompt = promptsync();

function isLegal(age: number){
    if(age >= 18){
        return true;
    }
    else{
        return false;
    }
}

const ans = isLegal(Number(prompt("Enter your age: ")));
if(ans){
    console.log("Can Drive");
}
else{
    console.log("Can't drive");
}