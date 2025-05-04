let number = 572491;
let oddSum = 0;
let evenSum = 0;
let mod = 0;
let temp = 0;
let num = number;
let numberLength = number.toString().length;
for (let i = 0; i < numberLength; i++) {
  mod = Math.floor(num % 10);
  if (mod % 2 === 0) {
    evenSum += mod;
  } else {
    oddSum += mod;
  }
  temp = Math.floor(num / 10);
  num = temp;
}
console.log("Sum of even digits = " + evenSum);
console.log("Sum of odd digits = " + oddSum);
