//How to write string type variable?
var strType = "Arnob";
console.log(strType);

//How to write number type variable?
var AB = 20;
console.log(AB);

//How to write boolean type variable?
var boolType = false;
console.log(typeof boolType);

//How to make any letter/perragraph to uppercase? 
var G = "Hi I'm Arnob";
console.log(G.toUpperCase());

//How to make any letter/perragraph to lowercase?
var H = "Hi I'm Arnob";
console.log(H.toLocaleLowerCase());

//How to split an element from element group?
var myFd = "Arnob,Hridoy,Emdad";
console.log(myFd.split("Arnob"));

//How to know the position of elements?
console.log(myFd.indexOf("Arnob"));

//How to make a string type variable to number type variable and ADD?
var num1 = 22;
var num2 = "33";
num2 = parseFloat(num2);
var Total = num1 + num2;
console.log(Total);

//How to make a negative number to positive number?
var No1= -20;
var sum= Math.abs(No1);
console.log(sum);

//If the number is .5 then it would be 1 in Math.round method and if it less than .5 then i would be 0. 
var voter = 0.5;
var sum = Math.round(voter);
console.log(sum);

//If the number is .00001 or more little but bigger than 0 it would be 1 in Math.ceil method.
var voter1 = 0.0001;
var sum = Math.ceil(voter1);
console.log(sum);

//If the number is .99999 or more than it but not 1 it wouldn't be 1 in Math.floor method, it would be 0.
var voter2 = 0.0001;
var sum = Math.floor(voter2);
console.log(sum);

//It will show to you different results in different time.
var lotary = Math.random()*10;
console.log(lotary);
