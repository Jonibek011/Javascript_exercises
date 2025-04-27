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

const user = { name: "Ali" };
const info = { age: 25 };
const address = { city: "Tashkent" };

const newUser = Object.assign({}, user, info, address);
console.log(newUser);
