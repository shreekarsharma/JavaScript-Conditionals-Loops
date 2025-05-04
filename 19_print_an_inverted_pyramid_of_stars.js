let n = 5;
for (let i = 1; i <= n; i++) {
  let line = "";
  let space = i - 1;
  let star = 2 * (n - i) + 1;
  for (let j = 1; j <= space; j++) {
    line += " ";
  }
  for (let k = 1; k <= star; k++) {
    line += "*";
  }
  console.log(line);
}
