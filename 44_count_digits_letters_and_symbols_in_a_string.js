let sentence = "My password is Pass@123!";
sentence = sentence.toLowerCase();
let sentenceLength = sentence.length;
let digits = 0;
let letters = 0;
let symbols = 0;
for (let i = 0; i < sentenceLength; i++) {
  if (sentence[i] === " ") {
    continue;
  } else if (sentence[i] >= "a" && sentence[i] <= "z") {
    letters++;
  } else if (sentence[i] >= "0" && sentence[i] <= "9") {
    digits++;
  } else {
    symbols++;
  }
}
console.log("There are " + letters + " letters");
console.log("There are " + digits + " digits");
console.log("There are " + symbols + " symbols");
