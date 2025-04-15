//Berilgan objectning qiymati numberga teng bo'lganlarini valuesini qaytaring

const obj = {
  name: "Jonibek",
  age: 29,
  merried: true,
};

// for (let i in obj) {
//   let res = obj[i];
//   if (typeof res == "number") {
//     console.log(res);
//   }
// }

// Objectning valuesi stringga teng bo'lganlarini console ga chiqaring

// for (let i in obj) {
//   res = obj[i];
//   if (typeof res == "string") {
//     console.log(res);
//   }
// }

//Objectning valuesi boolean qiymatga ega bo'lganini consolega chiqaring

// for (let i in obj) {
//   let res = obj[i];
//   if (typeof res == "boolean") {
//     console.log(res);
//   }
// }

//Objectning qiymati string bo'lganini key bilan birga chiqaring

// for (let i in obj) {
//   let res = obj[i];
//   if (typeof res == "string") {
//     console.log(`${i}:${res}`);
//   }
// }

//Objectning valuesi boolean qiymatga ega bo'lganini key bilan birga chiqaring

// for (let i in obj) {
//   let res = obj[i];
//   if (typeof res == "boolean") {
//     console.log(`${i}:${res}`);
//   }
// }

//Objectning bo'sh yoki bo'sh emasligini aniqlovchi funksiya yozing

// function isEmpty(object) {
//   const keys = Object.keys(object);
//   if (keys.length == 0) {
//     return true;
//   } else return false;
// }

// console.log(isEmpty(obj));

//Objectning qiymatlaridagi raqamlarni kamayish tartibida chiqaring
// const salary = {
//   John: 150,
//   Pete: 120,
//   Jane: 200,
// };

// const arr = Object.values(salary).sort((a, b) => b - a);
// for (let i in arr) {
//   console.log(arr[i]);
// }

//Object ichidagi qiymatlar yig'indisini hisoblash

// const salaries = {
//   Alice: 120,
//   Bob: 90,
//   Charlie: 150,
// };

// const arr = Object.values(salaries);
// let res = 0;
// for (let i of arr) {
//   res += i;
// }

// console.log(res);

//Faqat boolean qiymatga ega bo'lgan elementlarni key value birgalikda chiqarish
// const settings = {
//   darkMode: true,
//   notifications: false,
//   fontSize: "medium",
//   autoSave: true,
// };

// // for (let i in settings) {
// //   if (typeof settings[i] == "boolean") {
// //     console.log(`${i}: ${settings[i]}`);
// //   }
// // }

// for (let [key, value] of Object.entries(settings)) {
//   if (typeof value == "boolean") {
//     console.log(`${key}: ${value}`);
//   }
// }

//Eng katta qiymatga ega userni topish

// const scores = {
//   Anna: 75,
//   John: 82,
//   Mike: 91,
//   Lisa: 88,
// };
// let res = 0;
// let name = "";
// for (let key in scores) {
//   if (res < scores[key]) {
//     res = scores[key];
//     name = key;
//   }
// }
// console.log(name);

//Faqat true qiymatga ega bo'lganlarni alohida objectga yig'ish

// const permissions = {
//   canEdit: true,
//   canDelete: false,
//   canView: true,
//   isAdmin: false,
// };

// const newObj = {};

// for (let i in permissions) {
//   if (permissions[i] === true) {
//     newObj[i] = true;
//   }
// }
// console.log(newObj);

//Ismlar uzunligini o‘lchab, yangi object yasash

// const users = ["Ali", "Zafar", "Madina", "Nur"];
// const newUsers = {};
// for (let i of users) {
//   newUsers[i] = i.length;
// }

// console.log(newUsers);

//Object ichidagi qiymatlarni tartiblab, eng katta 2 ta qiymatga ega userni chiqaring

// const points = {
//   Aziz: 75,
//   Lola: 92,
//   Tim: 88,
//   Sam: 95,
//   Raya: 90,
// };
// let res = 0;
// let name = "";
// for (let i in points) {
//   if (res < points[i]) {
//     res = points[i];
//     name = i;
//   }
// }
// const points2 = structuredClone(points);
// delete points2[name];

// let res2 = 0;
// let name2 = "";
// for (let j in points2) {
//   if (res2 < points2[j]) {
//     res2 = points2[j];
//     name2 = j;
//   }
// }

// console.log(name, name2);

// =========================================================

// REDUCE()

// const names = ["Ali", "Zafar", "Madina"];

// const result = names.reduce((acc, curr) => {
//   acc[curr] = curr.length;
//   return acc;
// }, {});

// console.log(result);

//Arraydagi sonlar yig‘indisini reduce() bilan toping

// const numbers = [4, 7, 2, 9, 1];

// const result = numbers.reduce((acc, curr) => {
//   acc += curr;
//   return acc;
// }, 0);

// console.log(result);

// const result = numbers.reduce((acc, curr) => acc + curr, 0);
// console.log(result);

// Object qiymatlari yig‘indisini reduce() yordamida toping

// const salaries = {
//   Alice: 120,
//   Bob: 90,
//   Charlie: 150,
// };

// // const array = Object.values(salaries);
// // const result = array.reduce((acc, curr) => {
// //   acc += curr;

// //   return acc;
// // }, 0);

// const result = Object.values(salaries).reduce((a, c) => a + c, 0);

// console.log(result);

//reduce() yordamida eng katta maosh egasini toping
// const salaries = {
//   Alice: 120,
//   Bob: 90,
//   Charlie: 150,
//   Diana: 140,
// };
// const result = Object.entries(salaries).reduce((acc, curr) => {
//   return acc[1] < curr[1] ? curr : acc;
// });

// console.log(result[0]);

//reduce() yordamida eng uzun ismlarini aniqlash

// const names = {
//   John: "Smith",
//   Alice: "Johnson",
//   Bob: "Lee",
//   Charlie: "Brown",
//   Diana: "Smith",
// };

// const array = Object.entries(names);

// const result = array.reduce((acc, curr) => {
//   return acc[0].length + acc[1].length > curr[0].length + curr[1].length
//     ? acc
//     : curr;
// });

// console.log(result[0], result[1]);

//Eng ko‘p maosh olgan foydalanuvchini topish

// const employees = {
//   Jasur: { salary: 1000, position: "Developer" },
//   Malika: { salary: 1800, position: "Designer" },
//   Timur: { salary: 2200, position: "Manager" },
//   Zarnigor: { salary: 2000, position: "QA" },
// };

// const array = Object.entries(employees);

// const result = array.reduce((acc, curr) => {
//   let prevSelary = acc[1].salary;
//   let nextSelary = curr[1].salary;

//   return prevSelary > nextSelary ? acc : curr;
// });

// console.log(`${result[0]} -  ${result[1].position}`);
