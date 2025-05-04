let num = 5;
num = num.toString();
let number = 2551358125795635;
number = number.toString();
let count = 0;
let numberLength = number.length;
for (let i = 0; i < numberLength; i++) {
    if(number[i] === num){
        count++;
    }
}
console.log("the number "+ num + " appears " + count + " times in " + number);
