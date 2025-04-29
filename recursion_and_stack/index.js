//              RECURSION
//recursiya - o'zini o'zi chaqiruvchi funksiyalardir

//recursiya ikki asosiy komponentga ega bo'ladi
//1) Base case (asosiy holat) - bu rekursiyaning to'xtash sharti, base case mabjud bo'lmasa,
//recursiya hech qachon tugamaydi va "stack overflow" xatosiga olib keladi, bu xolatda rekursiya jarayoni o'z o'zini to'xtatadi
//2) recursive case (rekursiv xolat) - bu rekursiv chaqiruvlarni amalga oshiradigan va masalani
//kichikroq qismlarga bo'lib, natijani olishga yordam beradigan qism

//MISOL:
// n factorialni xisoblash
const factorial = (n) => {
  if (n === 0) {
    return 1;
  }

  return n * factorial(n - 1);
};

// console.log(factorial(5)); //120

//fibanacci sonlarini hisoblash
//fibanacci soni degani o'zidan oldingi ikkita sonning yig'indisidan tashkil topgan sonlar ketma ketligi
// mison uchun fibanacci 5 bo'lsa 5 gacha bo'lgan son oralig'ida nechta fibanacci soni bor
// 0 va 1 fibanacci sonlarining boshlang'ich qiymati xisoblanadi
// 0 => 1 => 0 + 1 =1 => 1+1 =2 => 1+2 = 3 => 3 +2 = 5
// 0,1,1,2,3,5 = 5  5-fibanacci soni, hisoblash 1 dan boshlanadi

const fibanacci = (n) => {
  if (n === 0) return 0;
  if (n === 1) return 1;

  return fibanacci(n - 1) + fibanacci(n - 2);
};

// console.log(fibanacci(5)); // 5

//==============================================================
//Afzalliklari
//1) Kodni qisqartiradi: Rekursiya juda murakkab vazifalarni oddiy va qisqa kod bilan hal qiladi
// 2) Muammoni kichikroq qismlarga bo'lish
//3) To'g'ri yechimni topish: Bazi masalalar faqat rekursiv yo'l bilan yechiladi

//Kamchiliklari
//1)Performence - rekursiya juda ko'p chaqiruvlarni talab qilishi mumkin, bu esa bajarish vaqtini oshiradi
//2) stack overflow - agar rekursiya cheksiz davom etsa stack overflow xatosi yuzaga keladi

//=======================================================================
// Stack - bu malumotlarni saqlashning tartibli usuli, stack LIFO (last in first out) prinsipida ishlaydi
//Push: Stackga element qo'shish
//Pop: stackdan element olish
//Peak: stackning yuqori elementini ko'rish

// har bir rekursiv chaqiruv stackga yangi element qo'shadi va base case ga yetganida bu elementlar birma bir pop qilinadi

//====================================================================

//1 dan n gacha bo'lgan barcha sonlarni yig'indisini rekursiya yordamida toping.

const sumTo = (n) => {
  if (n === 1) return 1;

  return n + sumTo(n - 1);
};

// console.log(sumTo(5));

// Fibonacci sonlarini rekursiya yordamida toping.

const fibanacciSoni = (n) => {
  if (n === 0) return 0;
  if (n === 1) return 1;

  return fibanacciSoni(n - 1) + fibanacciSoni(n - 2);
};

// console.log(fibanacciSoni(5));

// Factorial (n!) ni rekursiya yordamida hisoblang.
const factorialN = (n) => {
  if (n === 1) return 1;

  return n * factorialN(n - 1);
};

// console.log(factorialN(5));

// Berilgan n soniga nisbatan, 1 dan n gacha bo'lgan barcha sonlarni rekursiya yordamida chiqarib bering.
const printNumber = (n) => {
  if (n == 0) return 0;
  printNumber(n - 1);
  console.log(n);
};

// printNumber(5);

// Masala: Berilgan sonning kuchiga (power) hisoblash uchun rekursiv funksiyani yozing.
//  Masalan, agar n = 3 va k = 4 bo'lsa, natija 3^4 = 81 bo'lishi kerak.

const power = (num1, num2) => {
  if (num2 === 1) return num1;

  return num1 * power(num1, num2 - 1);
};

// console.log(power(3, 4));

const fac = (n) => {
  if (n === 1) return 1;
  return n * fac(n - 1);
};

// Berilgan arraydagi raqamlar yig'indisini rekursiya yordamida hisoblang.

const sumArray = (arr) => {
  if (arr.length === 0) return 0;

  let num = arr.shift();
  return num + sumArray(arr);
};

// console.log(sumArray([1, 2, 3, 4, 5]));
//=====================================================================
//Berilgan string ichidagi barcha harflarni katta harfga o‘tkazadigan rekursiv funksiya yozing.
//Bunda harflarni katta kichikka ajratish uchun ASCII code dan foydalanamiz
//belgini ASCII kodini toppish uchun .charCodeAt(0) dan foydalanamiz

console.log("a".charCodeAt(0)); // 97
console.log("z".charCodeAt(0)); // 122

//demak charCode i 97 dan 122 gacha bo'lgan belgilar kichik harflar xisoblanadi

console.log("A".charCodeAt(0)); // 65
console.log("Z".charCodeAt(0)); // 90

//demak charCode i 65 dan 90 gacha bo'lgan belgilar Katta harflar xisoblanadi

// endi agar 97-65 qilsak javob 32, bu degani biror kichik harfning shu xarning katta belgisi orasida 32 farq bor
// yani a ning charCode idan 32 ayirsak A ga teng bo'ladi

//CharCode dan belgini topish uchun String.fromCharCode() dan foydalanamiz
console.log(String.fromCharCode(65)); // A

//shulardan foydalanib yuqoridagi masalani yechamiz

const toUpperCaseRecursion = (str) => {
  //dastlab base case ni tekshirib olamiz
  if (str.length === 0) return;
};
