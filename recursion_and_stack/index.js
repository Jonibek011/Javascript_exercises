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

const fac = (n) => {};
