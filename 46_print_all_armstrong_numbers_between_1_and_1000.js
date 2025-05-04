let mod = 0;
let temp = 0;
let result = 0;
for (let i = 1; i <= 1000; i++) {
  let num = i;
  let numLength = num.toString().length;
  result=0;
  for (let j = 0; j < numLength; j++) {
    mod = Math.floor(num % 10);
    temp = Math.floor(num / 10);
    num = temp;
    result += Math.pow(mod, numLength);
  }
  if (i === result) {
    console.log(i);
  }
}
