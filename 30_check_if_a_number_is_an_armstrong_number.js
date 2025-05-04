let number = 9474;
let numberLength = number.toString().length;
let mod = 0;
let temp = number;
let result = 0;
for (let i = 0; i < numberLength; i++) {
  mod = Math.floor(temp % 10);
  temp = Math.floor(temp / 10);
  let num = 1;
  for (let j = 0; j < numberLength; j++) {
    num = num * mod;
  }
  result = result + num;
}
if (number === result) {
  console.log(number + " is an armstrong number");
} else {
  console.log(number + " is not an armstrong number");
}
