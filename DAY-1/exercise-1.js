//	Write a JavaScript program to calculate days left until next Christmas 
var xmas = new Date("25 December 2021");
var current_Day = new Date();
var difference_In_Time = xmas.getTime() - current_Day.getTime();
var difference_In_Days = difference_In_Time / (1000 * 3600 * 24);
console.log(difference_In_Days);