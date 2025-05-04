let string = "hello world";
let stringLength = string.length;
for (let i = 0; i < stringLength; i++) {
  if (string[i] === " ") {
    continue;
  }
  let count = 0;
  for (j = 0; j < stringLength; j++) {
    if (string[i] === string[j]) {
      count++;
    }
  }
  let alreadyCounted = false;
  for (let k = 0; k < i; k++) {
    if (string[i] === string[k]) {
      alreadyCounted = true;
      break;
    }
  }
  if (alreadyCounted) {
    continue;
  }
  console.log(string[i] + " has occurred " + count + " times");
}
