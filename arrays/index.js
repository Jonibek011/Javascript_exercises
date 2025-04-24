// let arr = [
//   1,
//   2,
//   3,
//   "webbrain",
//   function () {},
//   true,
//   false,
//   null,
//   undefined,
//   "olma",
// ];

// // arrayga access qilish
// console.log(arr[0]); //1
// console.log(arr[arr.length - 1]); //olma
// console.log(arr[-1]); //undefined - arrayga to'g'ridan to'g'ri manfiy son bilan murojat qilish mumkin emas

//====================================================================================
//at() - arrayda ham huddi stringdagi kabi ishlaydi, berilgan indexdagi qiymatni qaytaradi

// console.log(arr.at(-1)); //olma

//============================================================================
//Arrayni elon qilish
// const arr = new Array() //[]
// const ar = [] // []
//yuqoridagilarning har bir bo'sh array yasab beradi, new bilan array yasash konstructor array deyiladi
// constructor array bir nechta xususiyatga egan

// 1) agar new Array() ga bitta raqam parametr berilsa u arrayni lengthini bildiradi
// let arr = new Array(5);
// console.log(arr); // [<5 empty items>] - ichida beshta bo'sh item bo'lgan array yasab beradi
// console.log(arr.length); // 5

// agar parametriga ikkita son berilsa ikkita sondan iborat bo'lgan array yaratadi

// let arr = new Array(5, 1);
// console.log(arr); // [5,1]
// console.log(arr.length); // 2

//agar parametriga string berilsa ham uni arrayga aylantiradi
// let arr = new Array("5");
// console.log(arr); // ['5']
// console.log(arr.length); // 1

//===========================================================================

//arrayga qiymat biriktirish - bosh arrayga indexlar orqali qiymat biriktirish mumkin
// let arr = [];
// arr[0] = "hello";
// console.log(arr); // ['hello']

// // agar bo'sh arrayga birdaniga birinchi yoki undan yuqori indexga qiymat biriktirsak shu indexgacha bo'lgan indexlarning qiymati bo'sh item bo'lib qoladi

// arr[10] = "world";
// console.log(arr); // ['hello', <9 empty items>, 'world']

/////////////////////////////////////////////////////////////////
//Array.isArray(arr) - datani array yoki yo'qligini aniqlash uchun ishlatiladi

//===================================================================
// let arr = [];

// console.log(arr == 0); //true
// console.log(arr == "0"); // false

// ====================================================================
//Arrayni loop qilish
let arr = [1, 2, 3, 4, 5, 6, 7, 8];

for (let i of arr) {
  console.log(i);
}
