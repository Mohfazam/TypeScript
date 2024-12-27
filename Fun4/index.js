"use strict";
function display(str) {
    console.log(str);
}
function delayedFun(display) {
    setTimeout(() => {
        display("Hello");
    }, 5000);
}
