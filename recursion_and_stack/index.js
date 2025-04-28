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

console.log(factorial(5)); //120

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

console.log(fibanacci(5)); // 5

//==============================================================
