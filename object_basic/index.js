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

// ======================= Objectni muzlatish ================================
//Biz object malumotlarini o'zgarishini oldini olish yoki o'zgartirishni taqiqlab
//qo'yish uchun uni muzlatib qo'yishimiz mumkin
// let account = {
//   name: "Webbrain Academy",
//   major: "Frontend IT academy",
//   founded: 2020,
//   "full name": "Joonibek Orifjonov",
//   0: 156,
// };

// // Object.freeze(account); // bunda objectga ma'lumot qo'shib, o'zgartirib yoki o'chirib bo'lmaydi
// // bu muzlatish gaqat shu koddan keyin yozilgan o'zgartirishlarga amal qiladi
// // bu koddan yuqorida objectni hohlagancha o'zgartirish mumkin

// Object.seal(account); // bu freeze dan farqli ravishda malumot qo'shib yoki o'chirib bo'lmaydi ammo obj dagi mavjud malumotni o'zgartirish mumkin

// //object malumotlari muzlatilgan yoki seal qilinganligini tekshirish mumkin
// console.log(Object.isFrozen(account));

// console.log(Object.isSealed(account));

// ============= OBJECTDAN NUSXA OLISH =================================

// objectdan nusxa olishda yuqorida ko'rilganidek obj3 = obj1 qilinsa obj3 hamda obj1
//bitta manzilga bog'lanib qoladi hamda bittasining qiymati o'zgarsa albatta ikkinchisining
//ham qiymati o'zgaradi shunday xolat bo'lmasligi uchun quyidagicha deep copy qilinadi

// const obj1 = {name:1, surename:2}

// const obj2 = structuredClone(obj1)

//structuredClone ishlatilganda obj1 obj2 ga full copy boladi. birining qiymati o'zgarganda ikkinchisiniki o'zgarmaydi
//structuredClone node ning 17 yoki undan yuqori versiyalarida ishlaydi

// ==================================================================================
//object valuesini tashqarida elon qilingan o'zgaruvchiga almashtirish mumkin
//Masalan:

// let name = "Webbrain Academy";
// let major = "Frontend";

// const obj = {
//   name: name,
//   major: major,
// };

// //object qoidalariga ko'ra agar value hamda key ning qiymati bir xil bo'lsa ularni qisqartirib faqat bittasini qoldirish mumkin
// //Masalan:

// const obj1 = {
//   name,
//   major,
// };

// ======================================================================================
//objectning ichida qaysidir key bor yoki yoo'qligini aniqlash mumkin

// const obj = {
//   name: "Webbrain",
//   major: "Frontend",
// };

// console.log("name" in obj); // agar obj ichida name nomli key bo'lsa true qaytaradi

// ===============================================================================
//Object key va valuelarini for loop orqali olish

// const object = {
//   name: "Jonibek",
//   surename: "Orifjonov",
//   age: 29,
//   major: "Frontend",
//   profession: "React",
// };

// for (let i in object) { // bu usulda objectdagi keylar olinadi
//   console.log(i);
// }

// for (let i in object) {
//   console.log(object[i]);  // bu objectning valuelarini olishda ishlatiladi
// }

// const values = Object.values(object); // object valuelarini array sifatida qaytaradi

// for (let i = 0; i < values.length; i++) {
//   console.log(values[i]);
// }
