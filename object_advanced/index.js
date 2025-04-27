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
