function display(str: string) {
  console.log(str);
}

function delayedFun(display: Function) {
  setTimeout(() => { 
    display("Hello"); 
  }, 2000); 
}

delayedFun(display);