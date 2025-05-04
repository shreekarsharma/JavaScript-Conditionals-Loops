let string = "The quick brown fox jumps over the lazy dog";
string = string.toLowerCase();
let stringLength = string.length;
let count = 0;
for (let i = 0; i < stringLength; i++) {
  if (
    string[i] === "a" ||
    string[i] === "e" ||
    string[i] === "i" ||
    string[i] === "o" ||
    string[i] === "u"
  ) {
    count++;
  }
}
console.log("The number of vowels are " + count);
