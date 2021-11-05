// Write a JavaScript program to check two given numbers and return true if one of the number is 50 or if their sum is 50 

var num1 = Number(prompt());
var num2 = Number(prompt());

console.log(num1 == 50 || num2 == 50 || (num1 + num2) == 50? true : false);