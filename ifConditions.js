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
