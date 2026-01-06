//How to run the file ? : node Hoisting.js
getName2();
getName();
console.log(getName);
console.log(x);

var x = 7;

var getName = () => {
  return console.log("JavaScript Series");
};

var getName2 = function () {
  return console.log("JavaScript Series");
};
