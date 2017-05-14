var a = 2; // a = 2
a = a - 1; // a = 1
a++; // a = 2
var b = 8; // b = 8
b += 2; // b = 10
var c = a + b * b; // c = 2 + 10 * 10 = 102
var d = a * b + b; // d = 2 * 10 + 10 = 30
var e = a * (b + b); // e = 2 * (10 + 10) = 40
var f = a * b / a; // f = 2 * 10 / 2 = 10
var g = b / a * a; // g = 10 / 2 * 2 = 10

console.log("a = " + a);
console.log("b = " + b);
console.log("c = " + c);
console.log("d = " + d);
console.log("e = " + e);
console.log("f = " + f);
console.log("g = " + g);