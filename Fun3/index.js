"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
// npm install --save-dev @types/prompt-sync          == need to run this command before using prompt-sunc
const prompt = (0, prompt_sync_1.default)();
function isLegal(age) {
    if (age >= 18) {
        return true;
    }
    else {
        return false;
    }
}
const ans = isLegal(Number(prompt("Enter your age: ")));
if (ans) {
    console.log("Can Drive");
}
else {
    console.log("Can't drive");
}
