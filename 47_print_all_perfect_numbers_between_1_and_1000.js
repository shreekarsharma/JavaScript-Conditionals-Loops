for (let i = 1; i <= 1000; i++) {
  let result = 0;
  for (let j = 1; j < i; j++) {
    if (i % j === 0) {
      result += j;
    }
  }
  if (i === result) {
    console.log(i);
  }
}