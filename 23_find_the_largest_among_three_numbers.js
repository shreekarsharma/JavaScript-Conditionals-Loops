let a = 110;
let b = 220;
let c = 30;
if (a === b && b === c) {
  console.log("all three numbers are same");
} else if (a === b && a > c) {
  console.log(a + " and " + b + " are the same and largest");
} else if (a === c && a > b) {
  console.log(a + " and " + c + " are the same and largest");
} else if (b === c && b > a) {
  console.log(b + " and " + c + " are the same and largest");
} else if (a > b && a > c) {
  console.log(a + " is largest");
} else if (b > a && b > c) {
  console.log(b + " is largest");
} else {
  console.log(c + " is largest");
}
