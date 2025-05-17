// curry cunction - bu funksiyalarni yozish va chaqirish uslublaridan biri bo'lib,
// u bir nechta argumentli funksiyani ketma-ket bitta argumentli funksiyalar zanjiriga
//aylantirish g'oyasiga asoslangan

//Currying - bu funksiya birdan ortiq argument qabul qilish o'rniga, har safar
//bitta argument qabul qilib, keyingi funksiyani qaytaradigan shaklga o'zgartirishdir

// function curriedMultiply(q) {
//   return function (b) {
//     return a * b;
//   };
// }

// curriedMultiply(2)(3); //6

// 2. Currying nima uchun kerak
// a) Code reuse(qayta foydalanish)
// const multiplyBy2 = curriedMultiply(2);
// multiplyBy2(10); // 20
//b) function composition(bir nechta kichik funksiyalardan murakkab funksiyalar yasash)
// c)Partial application - funksiyaga kerakli argumentlarning faqat bir qismini berish

//3) Curryingni qanday yoziladi
// a) qo'lda yozish
// function curry(f) {
//   return function (a) {
//     return function (b) {
//       return f(a, b);
//     };
//   };
// }

// function f(a, b) {
//   return a + b;
// }

// const curried = curry(f);
// console.log(curried(2)(3));

//b) currying uchun umumiy curry funksiyasi(N argumentli)
function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn(...args);
    } else {
      return function (...nextArgs) {
        return curried(...args.concat(nextArgs));
      };
    }
  };
}
function sum(a, b, c) {
  return a + b + c;
}

const curriedSum = curry(sum);
console.log(curriedSum(1)(2)(3)); // 6
console.log(curriedSum(1, 2)(3)); // 6
console.log(curriedSum(1)(2, 3)); // 6

//🧩 5. Currying real hayotda qayerda ishlatiladi?
//React:
const handleChange = (fieldName) => (event) => {
  setForm({ ...form, [fieldName]: event.target.value });
};

//chaqirilishi
<input onChange={handleChange("email")} />;

// bu funksiya butun boshli form componentini qiymatlarini boshqaradi
//fildName ga inputning name i keladi, event esa javascript event hisoblanadi, u funksiya ishlaganda qaytadigan qiymat
//form esa useStatedagi [form, setForm] hisoblanadi

//6.Currying cheklovlari va ehtiyot choralari:
// --Juda chuqur currying xolatlari kodni tushunishni qiyinlashtirishi mumkin
//Currying faqat kerakli joylarda qo'llanilishi maqsadga muvofiq
// Javascriptdagi .length xususiyati yordamida argumentlar sonini aniqlash mumkin
