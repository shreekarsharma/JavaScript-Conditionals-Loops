let number1 = 15;
let number2 = 7;
let key = "%";
switch (key) {
  case "+":
    console.log(number1 + number2);

    break;
  case "-":
    console.log(number1 - number2);
    break;
  case "*":
    console.log(number1 * number2);
    break;
  case "/":
    console.log(number1 / number2);
    break;
  case "%":
    console.log(number1 % number2);
    break;
  default:
    console.log("Invalid operator");
    break;
}
