let number = 123456789;
let temp = number;
let count = 0;
while (temp > 0) {
  temp = Math.floor(temp / 10);
  count++;
}
console.log("The number of digits " + number + " is " + count);