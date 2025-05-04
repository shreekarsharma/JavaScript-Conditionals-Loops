let a = 12;
let b = 15;
let max = a > b ? a : b;
while (true) {
  if (max % a == 0 && max % b == 0) {
    console.log(max + " is the LCM of " + a + " and " + b);
    break;
  }
  max++;
}
