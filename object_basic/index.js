// Object yaratish yo'llari

//elon qilish
// const obj1 = {};
// //constructure
// const obj2 = new Object();
// console.log(obj2);

// let account = {
//   name: "Webbrain Academy",
//   major: "Frontend IT academy",
//   founded: 2020,
//   "full name": "Joonibek Orifjonov",
//   0: 156,
// };

// object elementlariga murojaat qilish
// console.log(account.name);
// console.log(account["name"]);
// console.log(account["full name"]); // bu qavslar [] orqali objectdan malumot olish key ikki so'zdan iborrat bo'lganda yoki key raqamga teng bo'lganda juda qo'l keladi
// console.log(account[0]);

// let key = "major"

// console.log(account.key); //undefined
// console.log(account[key]) // Frontend IT academy
// console.log(account["key"]); // undefined

// agar objectni ichida mavjud bo'lmagan keyga murojat qilsak dastur uni mavjud lekin qiymat biriktirilmagan deb hisoblaydi

// console.log(account.surename); // undefined
// console.log(account['surename']); // undefined

// ================================================================
// const obj1 = {};
// const obj2 = {};

// console.log(obj1 == obj2); // false

// const obj3 = obj1;

// console.log(obj1 == obj3); // true - sababi obj3 ni obj1 ga tenglaganimizda bitta referencega ikkita nom biriktirgan bo'lamiz

// ========== OBJECTDA QIYMAT O'ZGARTIRISH ================================

// let account = {
//   name: "Webbrain Academy",
//   major: "Frontend IT academy",
//   founded: 2020,
//   "full name": "Joonibek Orifjonov",
//   0: 156,
// };

// account.name = "Webbrain IT Academy";
// console.log(account.name);

// account["major"] = "Frontend academy";

// console.log(account.major);

//=============OBJECTGA QIYMAT BIRIKTIRISH ============================
// let account = {
//   name: "Webbrain Academy",
//   major: "Frontend IT academy",
//   founded: 2020,
//   "full name": "Joonibek Orifjonov",
//   0: 156,
// };

// account.surename = "Orifjonov";
// console.log(account.surename);
// console.log(account["surename"]);

// account["firstName"] = "Jonibek";
// account.firstName = "Jonibek";

// console.log(account.firstName);

//objectga ikkita bir xil kalit so'z biriktirilsa object ularning eng oxirgisini qiymatini oladi
// const obj = {
//     name: "name1",
//     name : "name2"

// }

// console.log(obj.name); // name2

//============ OBJECTDAN QIYMAT O'CHIRISH =================================

// let account = {
//   name: "Webbrain Academy",
//   major: "Frontend IT academy",
//   founded: 2020,
//   "full name": "Joonibek Orifjonov",
//   0: 156,
// };

// delete account.name;
// console.log(account.name); // undefined
