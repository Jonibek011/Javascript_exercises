// Berilgan raqamni bynary ga o'tkazib unda nechta 0 va nechta 1 borligini qaytaruvchi funksiya yozing

// function countBinary(num) {
//   let bnum = num.toString(2);

//   let all1 = 0;
//   let all0 = 0;

//   for (let i of bnum) {
//     if (i == 1) {
//       all1++;
//     } else all0++;
//   }
//   console.log(`1 lar soni ${all1} ta, 0 lar soni ${all0}`);
// }

// countBinary(20);

// Berilgan arraydagi raqamlarni eng katta va eng kichigini ayirmasini qaytaruvchi funksiya yozing

// const arr = [4, 9, 15, 18, 42];

// const getResult = (arr) => Math.max(...arr) - Math.min(...arr);

// console.log(getResult(arr));

// parametrga berilgan min max sonlar orasida random raqam qaytaruvchi funksiya yozing

// const randomNumber = (min, max) => {
//   num = Math.ceil(Math.random() * max);
//   while (num < min) {
//     num = Math.ceil(Math.random() * max);
//   }

//   console.log(num);
// };

// randomNumber(30, 50);

// Berilgan sonning faqat butun qismini oladigan funksiya yozing

// function floorNumber(num) {
//   return Math.floor(num);
// }

// floorNumber(4.8);

// Berilgan sonni 2 xonali kasr ko'rinishida qirqib chiqaradigan funksiya yozing.

// function FixedToDigits(num) {
//   return num.toFixed(2);
// }

// console.log(FixedToDigits(7));

// Sonni 3 xonali aniqlikda chiqaradigan funksiya yozing.

// const precisionNumber = (num) => num.toPrecision(3);
// console.log(precisionNumber(1.2345));

// Berilgan butun sonni har bir raqamiga ajratib, ularning yig'indisini topuvchi funksiya yoz.
// const sumNumber = (num) => {
//   let strNum = String(num);
//   let sum = 0;
//   for (let i of strNum) {
//     sum += +i;
//   }
//   return sum;
// };

// console.log(sumNumber(1234));

// Berilgan ikkita sonni oladigan va ikkalasining o'rtacha qiymatini qaytaradigan funksiya yoz.

// const average = (a, b) => (a + b) / 2;

//Berilgan sonni tekshirib, u musbat, manfiy yoki nolga tengligini aniqlab beradigan funksiya yoz.

// const checkNumber = (num) => {
//   let message = "";
//   if (num === 0) {
//     message = "0 ga teng";
//   } else if (num > 0) {
//     message = "Musbat";
//   } else message = "Manfiy";

//   return message;
// };

// console.log(checkNumber(-3));

const reverseNumber = (num) => {
  let strNum = String(num);
  return Number(strNum.split("").reverse().join(""));
};

reverseNumber(12345);
