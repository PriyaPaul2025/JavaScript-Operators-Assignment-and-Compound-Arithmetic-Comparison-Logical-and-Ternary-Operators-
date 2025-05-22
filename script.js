// //Input Taken from user and printing in console.

// //prompt()takes input from user in string formate +prompt()we can take number in input if their is a scring value and number is + then it performs string concatenation. Typrof check the data type of the variable/input, confirm is like a ok and cancel(user selects) box which return boolean value

// // let a = +prompt("Enter a number");
// // let b = +prompt("Enter a number");
// // let c = a + b;
// // console.log(c);
// // console.log("The type of c variable is", typeof c);
// // const response = confirm("Do you want to continue?"); // Confirm() use for userinteractions similar to prompt
// // console.log(response); // Check the value of confirm box

// //Show an output on console or error

// // console.log("Hello World"); // Use for debugging
// // alert("You may get error in future"); // Show custom alert
// // console.error("error error error"); // Custom error
// // console.warn("This is a warnning"); // Custom warning
// // console.info("This is extra info"); // Can share extra infomation

// //JavaScript Operators

// //Assignment Operators

// //= This operator assigns a value in a variable

// let a = 12;
// let b = 10;
// console.log(a + b);

// //Compound Assignment Operators

// //+= addes a new value and assign to the same variable

// let f = 123;
// f += 4;
// console.log(f);

// //-= remove the desire number and added new value to the same variable

// let g = 120;
// g -= 100;
// console.log(g);

// // *= multiply with old value with given number and saves new value in same variable

// let n = 3;
// n *= 6;
// console.log(n);

// // /= divide with old value with given number then saves in the new value in same variable

// let o = 10;
// o /= 5;
// console.log(o);

// // ** exponent means it is multiply by there own number 2x2 we just define how many time it should be multiply in this case 2 to the power of 2
// let s = 2;
// s **= 2;
// console.log(s);

// //Arithimatic Operator

// //+ addes the vale of the variable

// let c = 12;
// let d = 12;
// let e = c + d;
// console.log(e);

// //- substration

// let t = 80;
// let u = 10;
// let v = t - u;
// console.log(v);

// //* use for multiplication

// let h = 10;
// let i = 5;
// let j = h * i;
// console.log(j);

// // /= use for devision

// let k = 10;
// let l = 2;
// let m = k / l;
// console.log(m);

// // % modulo is use for the reminder which we get in LCM

// let p = 30;
// let q = 7;
// let r = p % q;
// console.log(r);

// // ** exponentiation 4 to the power of 2

// let w = 4;
// let x = 2;
// let y = w * x;
// console.log(y);

// Comparison Operators returns value in boolean true/false

// == compare if both the variable stores value are same or not if yes it returns true else false

// let a = 5;
// let b = "Hello";
// console.log(a == b); // This case it is false

// let a = 5;
// let b = 5;
// console.log(a == b); // This case it is true

// === compares the datatype and value of the variable is same or not is no then it returns false else true

// let a = 5;
// let b = "Hello";
// console.log(a === b); // This case it is false case datatype is not same

// let a = 5;
// let b = 5;
// console.log(a === b); // This case its true bcoz both variable have same value and datatype

// != not equals to checks if value is not same in variable

// let a = 2;
// let b = "hi";
// console.log(a != b); // This case a and b have different value so its true

// let a = 12;
// let b = 12;
// console.log(a != b); //This case a and b have same value so its false

// !== not equals to checks if value and datatype of both the variable is same of not

// let a = 12;
// let b = 12;
// console.log(a !== b); // This case a and b have same value and datatype so the return is false

// let a = 12;
// let b = "12";
// console.log(a !== b); //This case a and b have different datatype and  value so the return is true

//< greater then compares if the value 1 is greater then value 2

// let a = 12;
// let b = 10;
// console.log(a > b); // This case its true

// let a = 12;
// let b = 12;
// console.log(a>b); // this case its false

// let a = 12;
// let b = 100;
// console.log(a > b);// This case also its false

//> Smaller then same as above just symble is changes

// let a = 1;
// let b = 10;
// console.log(a < b); // This case its true

// let a = 12;
// let b = 12;
// console.log(a < b); // this case its false

// let a = 120;
// let b = 100;
// console.log(a < b); // This case also its false

// >= greater than or equals to

// let a = 12;
// let b = 10;
// console.log(a >= b); //true bcoz a is creater then b

// let a = 12;
// let b = 12;
// console.log(a >= b); // true bcox a and b have equal value

// let a = 1;
// let b = 10;
// console.log(a >= b); // False b is creater than a

// <= smaller than or equals to

// let a = 1;
// let b = 10;
// console.log(a <= b); // This case its true

// let a = 12;
// let b = 12;
// console.log(a <= b); // this case its true

// let a = 120;
// let b = 100;
// console.log(a <= b); // This case also its false

// Logical operators

//&& returns true is both the conditions are true

// let age = 20;
// if (age > 18 && age < 30) {
//   console.log("eligible");
// }   // Here the logic is if the user age is more then 18 and less then 30 print eligible this case both the conditions were true

// let age = 50;
// if (age > 18 && age < 30) {
//   console.log("eligible");
// } else {
//   console.log("not eligible");
// } // Here both conditions was false so else part was executed

// || returns true when any one the conditions are true

// let userlogin = true;
// let username = userlogin || "Guest";
// console.log(username);// Here the userlogin is true which means 1st condition is true

// let userlogin = false;
// let username = userlogin || "Guest";
// console.log(username);// Here first condition is false but another one is true so it shows true/guest

// ! reverse the boolean value

// let userlogin = false;
// if (!userlogin) {
//   console.log("Guest");
// } // here the ! operator reverse the userlogin value to true and the if part is executed

// let userlogin = true;
// if (!userlogin) {
//   console.log("Guest");
// } else {
//   console.log("Usrname");
// } // here the ! operator reverse the userlogin to false value and the else part is executed

// ternary Operator shorthand of if else

// let age = 100;
// if (age > 18) {
//   console.log("You can vote");
// } else {
//   console.log("try again once your age is 18");
// }

// Instead of writting like above example we can write same code with ternary operator in less line of code

// let age = 100;
// let canVote = age >= 18 ? "You can vote" : " Try again once your age is 18";
// console.log(canVote);
