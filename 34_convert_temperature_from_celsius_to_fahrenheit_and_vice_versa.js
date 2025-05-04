let temperature = 123;
let degree = "celsius"; //fahrenheit or celsius
switch (degree) {
  case "celsius":
    let fahrenheit = temperature * (9 / 5) + 32;
    console.log(temperature + "°C is equal to " + fahrenheit + "°F");
    break;
  case "fahrenheit":
    let celsius = (temperature - 32) * (5 / 9);
    console.log(temperature + "°F is equal to " + celsius + "°C");
    break;
  default:
    console.log("Wrong input");
    break;
}
