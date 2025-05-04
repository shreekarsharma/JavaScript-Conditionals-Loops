let a = 10;
let b = 110;
let c = 110;
if (a === b && b === c) {
  console.log("all three numbers are same");
} else if (a === b && a < c) {
  console.log(a + " and " + b + " are the same and smallest");
} else if (a === c && a < b) {
  console.log(a + " and " + c + " are the same and smallest");
} else if (b === c && b < a) {
  console.log(b + " and " + c + " are the same and smallest");
} else if (a < b && a < c) {
  console.log(a + " is smallest");
} else if (b < a && b < c) {
  console.log(b + " is smallest");
} else {
  console.log(c + " is smallest");
}
