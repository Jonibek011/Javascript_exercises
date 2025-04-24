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
// let arr = [1, 2, 3, 4, 5, 6, 7, 8];

// for (let i of arr) {
//   console.log(i);
// }

//============== Array metodlari =========================================

//.length - arrayni uzunligini qaytaradi

//.push() - arrayning oxiriga element qo'shadi

// let arr = [1, 2, 3];
// arr.push(4);
// arr.push(5);
// console.log(arr);

//.pop() - arrayni oxirgi elementini ajratib olib uni qaytaradi
// asl arrayni o'zgartiradi
// array bo'sh bo'lsa undefined qaytaradi

// shift() - arrayni boshidan malumot chiqarib yuboradi
//unshift(parametr) - arrayni boshidan malumot qo'shadi

//splice() - arraydan malumotni o'chirish qo'shish va update qilish uchun ishlatiladi

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// arr.splice(3, 2);
// console.log(arr);

// splice() asosan 3 ta parametr qabul qiladi va undan ko'p ham qabul qilishi mumkin, uchinchi va undan keyingi
//parametrlar optional

// birinchi parametr qaysi indexdan kesib olishni boshlashni ko'rsatadi
// ikkinchi parametr nechta elementni kesib olishni ko'rsatadi
// uchinchi va undankeyingi parametrlar kesib olingan elementlar o'rniga qo'yilishi
//kerek bo'lgan datalar

//splice kesib olgan array elementlarini array sifatida qaytaradi
// let newArr = arr.splice(2, 3);
// console.log(newArr); // [3,4,5]

//splice() ga parametr sifatida 0 ning o'zi berilsa arrayning hamma elementlarini kesib olib qaytaradi

arr.splice(0);
console.log(arr);

//splice() ga parametr berilmasa arrayni o'zgartirmaydi

// 1) array elementlarini o'chiradi
arr.slice(2, 3);

// 2) arrayga yangi element qo'shadi
arr.slice(2, 0, "hello"); // arrayning 2-indexidan boshlab 0 ta elementni o'chirib 'hello' ni qo'shadi

// 3) arrayni update qiladi
arr.slice(2, 1, "hello"); // arrayning ikkinchi indexdagi elementini o'chirib o'rniga 'hello' ni yozadi
