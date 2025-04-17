//Numbers

// katta miqdordagi numberlarni o'qishga osonroq bo'lishi uchun underscore dan foydalaniladi
// console.log(100_000_000); // =100000000
// // 0 lar sonini qisqartirish uchun birinchi raqamdan keyin e yozib keyin 0 lar soni yoziladi
// console.log(1e6); // 1 000 000
// console.log(1e6 + 1); // 1 000 001
// console.log(1e-6); // 0.000 001

//=========================================================================
// toFixed(parametr) - bu metod float sonlarni nuqtadan keyin nechta raqamini qaytarishini belgilaydi.
//parametr ga berilgan raqamga teng ravishda nuqtadan keyingi raqamlarni qaytaradi

// let num = 0.1234;
// console.log(num.toFixed(2)); // 0.12

//Kamchiliklari
//1) qaytargan qiymatini yaxlitlab qaytaradi
//2) strining qiymat qaytaradi
// 3) string numberlar ustida ishlay olmaydi

//================================================================
//Number() - bu metod string tipidagi numberlarni number tipiga o'tkazish uchun ishlatiladi
// let num = "123";
// console.log(Number(num)); // 123

//Kamchiligi
// 1) agar string numberlar ustida arifmetik amal bajarilgan bo'lsa ("1+2"), uni o'qiy olmaydi
// Number() faqat string number qiymatlarni izlaydi "1+2" da + ishorasi borligi sababli uni raqam sifatida tanimaydi

// let num1 = "1 +2";

// console.log(Number(num1)); // NaN

//==================================================================

// parseInt vs parseFloat  - bu ikkala metodlar string tipidagi raqamlarni number tipiga o'tkazish uchun ishlatiladi
// parseInt() - string raqamdan integer number qaytaradi
//parseFloat() - string raqamdan float raqam qaytaradi, ammo agar string number integer bo'lsa parseFloat integer raqam qaytaradi

// let stringNum = "1.22";

// console.log(parseInt(stringNum)); // 1
// console.log(parseFloat(stringNum)); // 1.22

//Kamchiliklari
// Har ikkala metod string number ichida o'ziga tegishli qismni izlaydi
//ya'ni agar "0.1 + 0.2" string raqam berilsa parseInt faqat o'zi topgan birinchi raqamni qaytaradi yani 0 ni qaytaradi
// parseFloat esa o'zi topgan birinchi float raqamni qaytaradi ya'ni 0.1 ni qaytaradi

// let numStr = "0.1 + 0.2";
// console.log(parseInt(numStr)); // 0
// console.log(parseFloat(numStr)); // 0.1

//=========================================================================

//eval() string tipidagi numberlar orasida arifmetik amallar bajarilgan bo'lsa
// o'sha arifmetik amalni bajarib natijani numberga aylantirib qaytaradi

const num = "1+2";
const num1 = "123";
console.log(eval(num)); // 3
console.log(eval(num1)); // 123
