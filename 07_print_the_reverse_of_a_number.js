let number = 12345;
let temp = number;
let length = number.toString().length;
let reverse = 0;
let mod = 0;
let num = 0;
for (i = 1; i <= length; i++) {
  mod = Math.floor(temp % 10);
  num = Math.floor(temp / 10);
  temp = num;
  reverse = (reverse * 10) + mod;
}
console.log("Reverse of " + number + " is " + reverse);
