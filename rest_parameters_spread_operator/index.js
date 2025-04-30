// Rest parameterlar (...args)
//Rest parameterlar funksiya argumentlarini massiv sifatida yig'ib oladi

function sum(...args) {
  console.log(args);
}

// sum(1, 2, 3, 4, 5); //[ 1, 2, 3, 4, 5 ]

// ...args nomi ixtiyoriy muhimi ... bo'lishi shart
//bu yerda funksiya ga nechta argument kiritilsa ularni hammasini bitta arrayga saqlaydi

let str = "salom";
let str1 = "dunyo";
// sum(str, str1); //[ 'salom', 'dunyo' ]

let arr = [1, 2, 3, 4];
let arr1 = [5, 6, 7, 8];
// sum(arr, arr1); //[ [ 1, 2, 3, 4 ], [ 5, 6, 7, 8 ] ]

//MUHIM
//Rest parametri oxirgi parametr bo'lishi mumkin
//Har qanday miqdordagi argumentlarni qabul qiladi
//arguments obyektidan farqli ravishda rest massiv hisoblanadi

function sum1(arg1, arg2, ...args) {
  console.log(arg1, arg2); //salom dunyo
  console.log(args); //[ [ 1, 2, 3, 4 ], [ 5, 6, 7, 8 ] ]
}

// sum1(str, str1, arr, arr1);

// Berilgan argumentlar orasidan eng kattasini qaytaradigan funksiya yozing
function findMax(...nums) {
  return Math.max(...nums);
}

// console.log(findMax(2, 5, 3, 9, 1)); // 9

//======================================================================
//Arguments obyekti nima
//arguments - bu funksiya ichida mavjud bo'lgan maxsus obyekt
//u funksiyaga uzatilgan barcha argumentlarni o'zida saqlaydi

//Xususiyatlari
// - faqat function decloration va function expression da ishlaydi
// - arrow function larda yo'q
// Massiv emas, lekin massivga o'xshab .length va indexlar bor
// Uni Array.from(arguments) orqali arrayga aylantirish mumkin

function showArgs() {
  for (let i = 0; i < arguments.length; i++) {
    console.log(arguments[i]);
  }
}

let string = "salom";
let string2 = "dunyo";

showArgs(string, string2); // salom \n dunyo
