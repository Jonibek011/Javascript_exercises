//Javascriptda oddiy object {} orqali yaratiladi, ammo advanced object deganda quyidagilar nazarda tutiladi
// ---Computed properties (Hisoblangan kalitlar)
let key = "name";
let user = {
  [key]: "Ali", //bu yerda key ni o'rniga "name" S keladi
};

// console.log(user.name); // Ali

//---Short property syntax - yani agar kalit va qiymatning yozilishi bir xil bo'lsa ularning faqat bittasini yozish kifoya
let age = 25;
let person = { age }; // {age:25}

// ---Method shorthand - qisqartirib yozish metodlar uchun ham taaluqli
let user1 = {
  greet() {
    // bu yerda aslida greet:greet(){} bo'lishi kerak edi
    console.log("Salom");
  },
};

user1.greet(); // salom

//--- Object.assign() - bir yoki birnecha objectlarni birlashtirish

let a = { x: 1 };
let b = { y: 2 };
let c = Object.assign({}, a, b);
console.log(c); // {a:1, b:2}

//========= Getter and Setter ====================================
//Maqsadi:
// - Obyekt xususiyatlariga nazorat bilan kirish
// - avtomatik xisoblash yoki validatsiya qilish

// Getter
//Getter - xususiyatni olishda avtomatik funksiyani chaqiradi
// let user2 = {
//   firstName: "Ali",
//   lastName: "Valiyev",
//   get fullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };

// console.log(user2.fullName); // get bilan metod yaratilganda funksiyani chaqirish yani () bilan chaqirish shart emas

//Setter
//Setter - xususiyatga qiymat qo'yishda ishlaydi

// const user3 = {
//   firstName: "",
//   lastName: "",
//   set fullName(value) {
//     let parts = value.split(" ");
//     this.firstName = parts[0];
//     this.lastName = parts[1];
//   },

//   get fullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };

// user3.fullName = "Jonibek Orifjonov";

// console.log(user3.firstName); // Jonibek
// console.log(user3.fullName); // Jonibek Orifjonov

// Getter va setter nima uchun kerak
//1) malumotga kirishni nazorat qilish uchun
//oddiy objectlar har qanday qiymatni qabul qilishi mumkin, mantiqiy va mantiqsiz bo'lsa ham
let obj = { age: -5 }; // bu yerda hech qanday hatolik mavjud emas, ammo age ning manfiy qiymatda bo'lishi mantiqiy jixatdan noto'g'ri
// setter orqali buni to'g'rilash mumkin

// let obj1 = {
//   age: 0,
//   set setAge(value) {
//     if (value < 0) {
//       console.log("yosh manfiy qiymatga ega bo'lishi mumkin emas");
//     } else {
//       this.age = value;
//     }
//   },

//   get setAge() {
//     return this.age;
//   },
// };

// obj1.setAge = 5;

// console.log(obj1.setAge);

// setter objectga malumot uzatishni nazorat qiladi
//getter objectdan malumot olishni nazorat qiladi

// getter va setter bir objectda ishlatilsa malumot ustidan to'liq nazoratga ega bo'linadi
// lekin ularni alohida ishlatish mumkin

//agar objectga malumot qo'shish kerak bo'lsayu lekin uni o'qishni cheklash kerak bo'lsa faqat setter ishlatiladi
//bunda metod chaqirilganda undefined chiqadi

//agar objectdagi malumotlarni birlashtirib olish kerak bo'lsayu lekin unga malumot qo'shish zarur bo'lmasa getterdan foydalanish mumkin
