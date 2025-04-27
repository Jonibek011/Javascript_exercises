"use strict";

// ======== THIS ======================

// console.log(this); //agar globalda this chaqiriladigan bo'lsa u windowga teng bo'ladi.
//console ga chiqarilsa windowda element yo'qligi uchun {} bo'sh object qaytaradi,
// browser consolida chaqirilsa windowni qaytaradi

// function sayHi() {
//   console.log("Hi");
// }

// let user = {
//   name: "Webbrain",
//   sayHi,
//   sayBy() {
//     console.log(this);

//     console.log(`By ${this.name}`);
//     console.log(`By ${user.name}`); // Not recomended / chunki object ni nomi o'zgarishi mumkin va eski user garbage collection bo'lishi mumkin
//   },
// };

// user.sayBy();

// function show() {
//   console.log(this);
// }
// show(); // stiric mode da undefined, browserda window

// =============== Constructor funksiyalar ==========================

// function User(firstname, surename) {
//   this.firstname = firstname;
//   this.surename = surename;
//   //   console.log(this);
// }

// const newUser = new User("Jonibek", "Orifjonov");

// console.log(newUser.firstname);

//=================================================================

// let id1 = Symbol("id");

// // console.log(id1);
// let obj = {
//   id1: "webbrain",
// };

// console.log(obj.id1); //webbrain
// console.log(obj[id1]); //undefined
// console.log(obj["id1"]); //webbrain

// let obj2 = {
//   [id1]: "webbrain",
// };

// console.log(obj2[id1]); //webbrain

//===================================================================
//Object.assign() = bitta yoki bir nechta objectni bitta yangi objectga nusxalash yoki birlashtirish uchun ishlatiladi

//Object.assign(target, ...sources)
//agar target objectga sources objectlardan bir xil nomdagi property kelsa oxirgisi ustunlik qiladi
// Object.assign() shallow copy qiladi(yani faqat birinchi qatlamni nusxalaydi)

// const user = { name: "Ali" };
// const info = { age: 25 };
// const address = { city: "Tashkent" };

// const newUser = Object.assign({}, user, info, address);
// console.log(newUser);

// let obj = { name: "Ali", age: 3, address: { city: "Fergana" } };

// let newObj = Object.assign({}, obj);
// newObj.address.city = "Samarqand";
// console.log(newObj); //{ name: 'Ali', age: 3, address: { city: 'Samarqand' } }
// console.log(obj); //{ name: 'Ali', age: 3, address: { city: 'Samarqand' } }

//==============================================================
//slice(), spread operator, Array.from() hamda Object.assign() lar objectni shallow copy qiladi
// yani agar nusxa olinayotgan object ichida nested objectlar bo'lsa nested objectlarning referensini
//yani xotirada joylashgan manzilini nusxalaydi, natijada nested bo'lmagan key value larning qiymatlari yangi
//objectga butunlay ko'chadi yangi objectdagi ushbu qiymatlar o'zgartirilsa eski object o'zgarmaydi,
// nested objectlarning manzili ko'chib o'tganligi uchun yangi object chaqirilganda ko'chib o'tgan reference
// eski objectning nested objecti joylashgan reference ga murojaat qiladi va qiymat qaytaradi
// oqibatda yangi xosil qilingan objectdagi nested object o'zgartirilsa shu referenceda joylashgan
//eski objectdagi nested object ham o'zgaradi yani eski object ham o'zgaradi

//===================================
// structuredClone() metodi esa objectni full copy qiladi yani nested objectlarni ham butunlay
//nusxalab yangi object ga ko'chiradi, bu esa deap copy deyiladi

//JSON.parse(JSON.stringify()) orqali ham deap copy qilish mumkin

// const original = {
//   name: "Ali",
//   address: {
//     city: "Tashkent",
//     country: "Uzbekistan",
//   },
//   hobbies: ["football", "coding"],
// };

// Deep copy: JSON metodlari yordamida
// const deepCopy = JSON.parse(JSON.stringify(original));

// O'zgartirishlar faqat deep copy'ga ta'sir qiladi
// deepCopy.address.city = "Samarkand";
// deepCopy.hobbies[0] = "basketball";

// console.log(original);
// { name: 'Ali', address: { city: 'Tashkent', country: 'Uzbekistan' }, hobbies: [ 'football', 'coding' ] }

// console.log(deepCopy);
// { name: 'Ali', address: { city: 'Samarkand', country: 'Uzbekistan' }, hobbies: [ 'basketball', 'coding' ] }
//==========================================================================================

//Berilgan raqamlar arrayidan eng katta va eng kichik sonni toping

// const arr = [12, 4, 6, 15, 20, 9];
// // Javob: eng katta: 20, eng kichik: 4

// arr.sort((a, b) => a - b);
// console.log(`eng katta: ${arr.at(-1)}, eng kichik ${arr.at(0)}`);
//==========================================

//Berilgan stringni teskari qilib chiqarish

// const str = "hello";
// // Javob: "olleh"

// console.log(str.split("").reverse().join(""));

//========================================================
// Ob'ektda berilgan kalit mavjudligini tekshirib, uning qiymatini qaytaring.
//  Agar kalit mavjud bo'lmasa, "Kalit topilmadi" deb qaytaring.

// const getKey = (obj, key) => {
//   return obj[key]
//     ? console.log(`Javob: ${obj[key]}`)
//     : console.log("Kalit topilmadi");
// };

// const obj = {
//   name: "Ali",
//   age: 30,
//   job: "developer",
// };

// getKey(obj, "job");

//==================================================
// Array ichidagi barcha juft sonlarni ajratib olib, ularning yig'indisini hisoblang.
// const arr = [1, 2, 3, 4, 5, 6];
// // Javob: 12

// let result = arr.reduce((acc, curr) => {
//   if (curr % 2 === 0) {
//     acc += curr;
//   }

//   return acc;
// }, 0);

// console.log(result);

//==================================================
// Berilgan obyektga yangi metod qo'shing va uni chaqiring.

// const person = { name: "Ali", age: 30 };

// // Dynamic metodni qo'shish
// person.sayHello = function () {
//   return `Hello, my name is ${this.name}`;
// };

// person.byBy = function () {
//   return `Ok, by ${this.name}`;
// };

// console.log(person.byBy());

//========================================
//Berilgan stringda qaysi harf qancha marta takrorlanishini hisoblang.

// const str = "aabbbccccc";
// // Javob: { a: 2, b: 3, c: 5 }

// const countLetter = (str) => {
//   let res = str.split("");
//   let obj = {};
//   res.forEach((letter) => {
//     if (obj[letter]) {
//       obj[letter] += 1;
//     } else {
//       obj[letter] = 1;
//     }
//   });
//   return obj;
// };

// console.log(countLetter(str));

//================================================

// // Nested arrayni tekis qilib chiqing.
// const arr = [1, [2, 3], [4, 5, 6], 7];
// // Javob: [1, 2, 3, 4, 5, 6, 7]
// console.log(arr.flat());

//==========================================
//Berilgan arrayni Set yordamida takrorlanmas elementlarga ajrating.
// const arr = [1, 2, 2, 3, 4, 5, 5, 6];
// // Javob: [1, 2, 3, 4, 5, 6]
// let newSet = new Set(arr);
// let newArr = Array.from(newSet);
// console.log(newArr);

// Berilgan string ichidagi eng uzun so'zni toping
// const str = "This is a simple string example";
// // Javob: "example"

// const findLongest = (str) => {
//   let arr = str.split(" ");
//   let longestStr = "";
//   arr.forEach((word) => {
//     if (longestStr.length < word.length) {
//       longestStr = word;
//     }
//   });

//   return longestStr;
// };

// console.log(findLongest(str));

//============================================================
// Arrayni objectga va objectni arrayga aylantiring.
const obj = { a: 1, b: 2, c: 3 };

let arr = Object.entries(obj);
console.log(arr);
let objBack = {};
arr.forEach((item) => {
  let key = item[0];
  let value = item[1];
  objBack[key] = value;
});

console.log(objBack);
