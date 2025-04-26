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

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

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

// arr.splice(0);
// console.log(arr);

//splice() ga parametr berilmasa arrayni o'zgartirmaydi

// 1) array elementlarini o'chiradi
// arr.slice(2, 3);

// 2) arrayga yangi element qo'shadi
// arr.slice(2, 0, "hello"); // arrayning 2-indexidan boshlab 0 ta elementni o'chirib 'hello' ni qo'shadi

// 3) arrayni update qiladi
// arr.slice(2, 1, "hello"); // arrayning ikkinchi indexdagi elementini o'chirib o'rniga 'hello' ni yozadi

// slice() ikkita parametr oladi, birinchi parametr copy qilishni qaysi indexdan boshlashi
//ikkinchi parametr qaysi indexgacha kesib olishi

//slice() va splice() ning farqlari
//1) slice() faqat ikkita parametr qabul qiladi, splice esa ikki va undan ortiq parametr qabul qilishi mumkin
//2) slicening ikkichi parametri qaysi indexgacha kesib olishni ko'rsatadi, splicening ikkinchi parametri nechta elementni kesib olishni ko'rsatadi
//3) slice asosiy arrayni o'zgartirmaydi malumotni copy qilib oladi, splice esa asosiy arrayni o'zgartiradi malumotni cut qilib oladi
// 4) slice() faqat array qismini copy qilib olish uchun ishlatiladi, splice array malumotlarini o'chiradi, qo'shadi va update qiladi

//.concat() - stringdagi singari bir arrayga boshqa arraylarni qo'shish  uchun ishlatiladi

// indexOf() lastIndexOf() - huddi stringdagi singari ishlatiladi
//includes() ham stringdagi singari ishlatiladi

//reverse() - array elementlarini teskarisiga o'girib beradi, yani oxirgi elementi birinchi elementga oxiridan bitta oldingisi ikkinchi elementga aylanadi vaxakozo

//arrayda qaysi harf necha marta qatnashganini topish
// const countLetter = (arr) => {
//   let obj = {};
//   for (let item of arr) {
//     let result = item.split("");
//     for (let letter of result) {
//       if (letter in obj) {
//         obj[letter] += 1;
//       } else {
//         obj[letter] = 1;
//       }
//     }
//   }

//   for (let [key, value] of Object.entries(obj)) {
//     console.log(`${key}: ${value}`);
//   }
// };

// let arr = ["webbrain", "academy"];

// countLetter(arr);

// =====================================================================================================
//Advanced array methods

//forEach() - arrayni har bir elementini ketma ket olib, callback functionni chaqiradigan metod
// bu metod yangi array qaytarmaydi
// asosan 2 ta parametr oladi, birinchisi arrayning har bir elementiga beriladigan nom, ikkichisi har bir array elementining indexsi
// const arr = ["olma", "anor", "banan", "nok"];

// arr.forEach((arrayElementi, index) => {
//   console.log(index, arrayElementi);
// });

// forEach() return qilmaydi undefined qaytaradi
//forEach da break yoki continue ishlatib bo'lmaydi (for dan farqai)

//numbers degan array bor, uning ichidagi barcha sonlarni konsolga chiqar:

// const numbers = [2, 4, 6, 8, 10];
// numbers.forEach((number) => {
//   console.log(number);
// });

// const numbers = [2, 4, 6, 8, 10];
// numbers.forEach((number) => {
//   console.log(number * 2);
// });

// const numbers = [2, 4, 6, 8, 10];
// numbers.forEach((number, index) => {
//   console.log(`${index} = ${number}`);
// });

//===========================================================================

// .map() - arrayning haar bir elemtni ustida amal bajarib yangi array qaytaruvchi metod
//map(element, index, array) - map ham uchta parametr qabul qiladi, asosan ikkita parametr bilan ishlanadi

//[1, 3, 5, 7, 9] arrayini ol, har bir elementni 3 barobarga ko'paytirib yangi array hosil qil

// let arr = [1, 3, 5, 7, 9];

// const newArray = arr.map((eachNumber) => {
//   return eachNumber * 3;
// });

// console.log(newArray);

//[10, 20, 30] arrayidan, har bir sonning kvadratini oladigan yangi array hosil qil

// const arr = [10, 20, 30];

// const newArr = arr.map((eachNumber) => {
//   return eachNumber ** 2;
// });
// console.log(newArr);

//[5, 10, 15] arrayidan, har bir sonni stringga o'girib yangi array yarat

// let arr = [5, 10, 15];

// const newArr = arr.map((eachNumber) => {
//   return eachNumber.toString();
// });

// console.log(newArr);

//=============================================================================================

//filter() - array ichidan faqat shartga mos keladiganlarini yangi array sifatida qaytaradi
//filter ichiga berilgan callback ham uchta parametr oladi ikkichi va uchinchisi optional
// filter((element, index, array) => {})

//[5, 12, 18, 7, 3] arraydan 10 dan katta sonlarni ajratib ol.
// let arr = [5, 12, 18, 7, 3];
// let newArr = arr.filter((number) => number > 10);
// console.log(newArr);

//[1, 2, 3, 4, 5, 6] arraydan toqlarni ajratib ol

// const arr = [1, 2, 3, 4, 5, 6];

// const newArr = arr.filter((number) => number % 2 !== 0);
// console.log(newArr);

// ["apple", "banana", "cherry", "avocado"] arraydan "a" bilan boshlanadigan mevalarni ajratib ol.

// const arr = ["apple", "banana", "cherry", "avocado"];

// const newArr = arr.filter((element) => element[0] == "a");
// console.log(newArr);

//[10, 15, 20, 25, 30] arrayidan faqat 10 dan katta sonlarni ajratib olib, har birini 3 ga ko'paytir.

// const arr = [10, 15, 20, 25, 30];

// const newArr = arr.filter((num) => num > 10).map((num) => num * 2);
// console.log(newArr);

// [1, 2, 3, 4, 5, 6] arrayidan faqat toq sonlarni ajratib olib, har birining kvadratini ol.
// const arr = [1, 2, 3, 4, 5, 6];
// const newArr = arr.filter((num) => num % 2 !== 0).map((num) => num ** 2);
// console.log(newArr);

//["apple", "banana", "cherry", "avocado"] arrayidan "a" bilan boshlanadigan mevalarni ajratib olib, ularni katta harf bilan chiqar.

// const arr = ["apple", "banana", "cherry", "avocado"];

// const newArr = arr
//   .filter((element) => element[0] == "a")
//   .map((element) => element.toUpperCase());

// console.log(newArr);

//====================================================================================
//reduce() = arraydagi barcha elementlarni birlashtirib yagona qiymat yaratadi

//.reduce((accumulyator, currentValue, index, array) => {}, initialValue)

//[1, 2, 3, 4, 5] arrayidan barcha sonlarni yig'ib chiq (yakuniy qiymatni qaytar)
// let arr = [1, 2, 3, 4, 5];

// let sumAll = arr.reduce((acc, curr) => {
//   return acc + curr;
// });
// console.log(sumAll);

// [10, 20, 30] arrayidan barcha sonlarni ko'paytir

// const arr = [10, 20, 30];
// const newArr = arr.reduce((acc, curr) => {
//   return acc * curr;
// }, 1);

// console.log(newArr);

//["apple", "banana", "cherry"] arrayidagi barcha mevalarni birlashtirib, bitta stringga aylantir.

// const arr = ["apple", "banana", "cherry"];

// let newString = arr.reduce((acc, curr) => {
//   return acc + " " + curr;
// }, "");

// console.log(newString);

//===============================================================================================

//find() - array ichida berilgan shartga mos keluvchi birinchi elementni qaytaradi
// agar mos element topilmasa undefined qaytaradi
//.find((element,index, array) => {return shart})

//[2, 4, 6, 8, 10] arrayidan 6 dan katta birinchi sonni top.
// let arr = [2, 4, 6, 8, 10];
// let num = arr.find((a) => a > 6);
// console.log(num);

//["apple", "banana", "avocado", "cherry"] arrayidan "a" bilan boshlanadigan birinchi mevani top.

// let arr = ["apple", "banana", "avocado", "cherry"];

// let str = arr.find((element) => element[0] == "a");
// console.log(str);

//===================================================================================

//some() - array ichida kamida bitta element shartga mos kelsa, true qaytaradi
//agar hech biri mos kelmasa false qaytaradi

//.some((element, index, array) => {})

//[1, 3, 5, 7, 9] arrayidan juft son bor-yo'qligini tekshir.

// let arr = [1, 3, 5, 7, 9];
// console.log(arr.some((a) => a % 2 == 0));

//["cat", "dog", "elephant"] arrayidan 5 harfdan uzun so'z bor-yo'qligini tekshir.
// const arr = ["cat", "dog", "elephant"];

// console.log(arr.some((element) => element.length > 5));

//=================================================================================

//every() = berilgan shart array elementlarining har biriga mos kelsa true qaytaradi
// birorta element mos kelmay qolsa false qaytaradi

//[2, 4, 6, 8, 10] arrayidan hammasi juft sonmi deb tekshir.
// let arr = [2, 4, 6, 8, 10];
// console.log(arr.every((num) => num % 2 == 0));

//["apple", "banana", "avocado"] arrayidan hamma meva nomi kamida 5 harfdan uzunmi deb tekshir.

let arr = ["apple", "banana", "avocado"];

console.log(arr.every((meva) => meva.length > 5));
