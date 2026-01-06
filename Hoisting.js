//How to run the file ? : node Hoisting.js

getName();
console.log(getName);
console.log(x);

var x = 7;

var getName = () => {
  return console.log("JavaScript Series");
};
