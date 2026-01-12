// Make a "Good day" greeting if the hour is less than 18:00:

let time = new Date().getHours();

if (time < 18) {
  console.log("Good Day");
}

// Nested If
let age = 16;
let country = "USA";
let text = "You can Not drive!";

if (country == "USA") {
  if (age >= 16) {
    text = "You can drive!";
  }
}
console.log(text);

//Nested if statements can make your code more complex.
//A better solution is to use the logical AND operator:
let age1 = 6;
let country1 = "USA";
let text1 = "You can Not drive!";

if (country1 == "USA" && age1 >= 16) {
  text1 = "You can drive!";
}
console.log(text1);

//Switch Statements

let day;
let Presentday = new Date().getDay();

//The getDay() method returns the weekday as a number between 0 and 6.

switch (Presentday) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
}
console.log("Today is " + day);

let present;
switch (new Date().getDay()) {
  case 1:
    present = "Today is Saturday";
    break;
  case 2:
    present = "Today is Sunday";
    break;
  default:
    present = "Looking forward to the Week";
}
console.log(present);

//The ?? operator returns the right operand when the left operand is nullish (null or undefined), otherwise it returns the left operand.
let name = null;
let textData = "missing";
let resultData = name ?? textData;
console.log(resultData);
