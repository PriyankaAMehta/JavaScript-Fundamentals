var x = 1;

a(); // we can invoke or access the function even before initilization because of hoisting
b();
console.log(x);

function a() {
  var x = 10;
  console.log(x);
}

function b() {
  var x = 100;
  console.log(x);
}
