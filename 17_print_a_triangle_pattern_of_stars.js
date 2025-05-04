for (let i = 1; i <= 5; i=i+2) {
    let space = '';
    let star = '';
  for (let j = 5-i; j >= 1; j--) {
    space += ' ';
  }
  for(let k = 1; k <= i; k++){
    star += '*';
  }
  console.log(space+star)
}
