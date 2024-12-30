//Given an array of positive integers as input, return the maximum value in the array

function maximum(num: number[]): number{
    let max = -Infinity;

    for(let i = 0; i < num.length; i++){
        if(num[i] > max){
            max = num[i];
        }
    }
    return max;
}

let x = [2,4, 6, 82, 346, 347, 235, 387, 90000];

let ans = maximum(x);
console.log(ans);