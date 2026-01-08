//If the hour is less than 18, create a "Good day" greeting, otherwise "Good evening"

let time = new Date().getHours();

if (time < 18) {
  greet = "Good day";
} else {
  greet = "Good evening";
}

console.log(greet);

/*If time is less than 10:00, create a "Good morning" greeting, if not, but 
time is less than 20:00, create a "Good day" greeting, otherwise a "Good evening": */

let time1 = new Date().getHours();
if (time1 < 10) {
  greet1 = "Good morning";
} else if (time1 < 20) {
  greet1 = "Good day";
} else {
  greet1 = "Good evening";
}

console.log(greet1);

//Ternary: If the value of age is < 18, set the value of text to "Minor", otherwise to "Adult":

let age = 18;
let output = age < 18 ? "Minor" : "Major";
console.log(output);
