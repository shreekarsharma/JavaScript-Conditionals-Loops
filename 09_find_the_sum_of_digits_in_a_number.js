let number = 123456789;
let temp = number;
let mod = 0;
let result = 0;
while(temp>0){
    mod = Math.floor(temp % 10);
    temp = Math.floor(temp / 10);
    result += mod;
}
console.log("The sum of digits of "+number+" is "+result);
