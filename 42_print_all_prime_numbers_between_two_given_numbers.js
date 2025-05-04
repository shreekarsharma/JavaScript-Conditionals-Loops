let num1 = 15;
let num2 = 75;
for (let i = num1; i <= num2; i++) {
  if (i < 2) {
    continue;
  }
  let isPrime = true;
  for (j = 2; j < i; j++) {
    if (i % j === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    console.log(i);
  }
}
