function sum1(a: number, b: number){
    return a + b;
}

function sum2(c: number, d:number){
    return c + d;
}



function finalSum(x: number, y: number){
    return x+y;
}



const res1 = sum1(2,2);//4
const res2 = sum2(4,4);//8


const final = finalSum(res1, res2);//8+4 == 12

console.log(final);