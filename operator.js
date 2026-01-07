let x = 5 + 5;
let y = "5" + 5;
let z = "Hello" + 5;
let a = 5 + 2 + "hello" + 5;

//document.getElementById("demo").innerHTML = x + "<br>" + y + "<br>" + z;
/* use document.getElementById("demo").innerHTML, if ypu want to check the result on browser. 
This will give error because in vs code we are using node.js. and not browser. */

console.log(x);
console.log(y);
console.log(z);
console.log(a);

/* JavaScript Assignment Operators 
    1. += => x+=y => x = x + y 
    2. == is the equal to 
    3. === is the equal value and equal type
*/

let text = "Hello";
text += " World";
console.log(text);

let b = 10;
b += 5;
console.log(b);

/* why is the below true? : because both are strings text1 and text2 and when strings , it compares first charaters  "20" -> "2" and "5" -> "5"
and since 2 <5 so the below is true */

/* Always convert strings to numbers when doing numeric comparisons:
Number("33") < Number("22") // false
*/
let text1 = "20";
let text2 = "5";
let result = text1 < text2;

console.log(result);

// since strings it takes as : "3" < "5" and since it 3 is not less than 5 , it ouputs false
let text11 = "33";
let text22 = "25";
let finalResult = text11 < text22;
console.log(finalResult);

// now if 1 is string and the other is number , Js takes both as numbers and compare as 2 < 25 , yes so it outputs true
let num1 = 2;
let num2 = "25";
let output = num1 < num2;
console.log(output);
