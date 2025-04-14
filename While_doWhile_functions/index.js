//Homework: how many prime numbers in 1 to 100
// An integer number greater than 1 is called prime if it cannot be devided
// whithout remainder byanithing exept 1 and itself
// const sum = 50;

// const tubson = (sum) => {
//   var prime = 0;
//   for (i = 2; i <= sum; i++) {
//     let tub = true;

//     for (j = 2; j < i; j++) {
//       if (i % j == 0) {
//         tub = false;
//         break;
//       }
//     }

//     if (tub) {
//       prime += 1;
//     }
//   }
//   console.log(prime);
// };

// tubson(50);

//==========================================
// let name = "webbrain";
// const test = () => {
//   let name = "Academy"; // varialble shadow
//   console.log(name);
// };

// console.log(name);
// test();

//========= Default parametr =======================
// Before ESX
// const telegram = (firstName, lastName) => {
//   if (lastName) console.log(firstName, lastName);
//   else console.log(firstName);
// };

// telegram("webbrain");

// const telegram = (firstName, lastName) => {
//   lastName ? console.log(firstName, lastName) : console.log(firstName);
// };

// telegram("webbrain");

// const telegram = (firstName, lastName) => {
//   console.log(firstName, lastName || "");
// };

// telegram("webbrain", "academy");

// ==== NOW ====
// const telegram = (firstName, lastName = "") => {
//   console.log(firstName, lastName);
// };

// telegram("webbrain", "academy");

// Question: Rewrite the code changing the for loop to while without alerting its behavior(the output should stay same)
// for (let i = 0; i < 3; i++) {
//   console.log(`number ${i}!`);
// }

//Answer
// let i = 0;
// while (i < 3) {
//   console.log(`number ${i}!`);
//   i++;
// }

// do {
//   console.log(`number ${i}!`);
//   i++;
// } while (i < 3);

// Question: The following function returns true if the parametr age is greater than 18.
//Otherwise it asks for a confirmation and return its result
// function checkAge(age){
//   if (age > 18){
//     return true
//   }else{
//     return confirm('Did parents allow you?')
//   }
// }

//Rewrite the function using '?' or '||'

// function checkAge(age) {
//   return age > 18 ? true : "Did parents allow you?";
// }

// console.log(checkAge(19));

// function checkAge(age) {
//   return age > 18 || "Did parents allow you?";
// }

// console.log(checkAge(17));

// return min number
// function min(a, b) {
//   // if (a > b) return b;
//   // else return a;

//   return a > b ? b : a;
// }
// console.log(min(2, -2));
