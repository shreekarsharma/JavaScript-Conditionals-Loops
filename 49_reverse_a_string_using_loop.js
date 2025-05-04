let string = "Hello World";
let reversedString = "";
let stringLength = string.length;
for(let i = stringLength-1;i>=0;i--){
    reversedString += string[i];
}
console.log(reversedString);
