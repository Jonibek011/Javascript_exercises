//Module - bu mustaqil fayl yoki kod bloki bo'lib, u o'zgaruvchilar, funksiyalar, klasslar
// va boshqalarni tashqi fayllarga eksport va import qilish imkonini beradis

//Har bir modul o'zining alohida scopiga iga - yani u ichidagi o'zgaruvchilar global emas, faqat modul ichida mavjud

// 1)-- ES Modules(ESM) - [standart]
// - Yangi, rasmiy ES6+ modullar
//- file lar .js yoki .mjs kengaytmali bo'lishi mumkin
//Brauzerlar va Node.js qo'llab quvvatlaydi

//2)Modul yaratish(export qilish)
// - named export
//file:main.js
// export const PI = 3.14;
// export function add(a, b) {
//   return a + b;
// }

// - default export
//file: utils.js
// export default function sayHello(name) {
//   console.log(`Hello ${name}`);
// }

//3) Modulni chaqirish(Import qilish)
// named import
//file:main.js
// import { PI, add } from "./math.js";

// console.log(PI);
// console.log(add(2, 3));

// - default import

import sayHello from "./utils.js";
sayHello("Ali");

// - Barchasini import qilish
import * as math from "./math.js";

//4) - Muhim qoidalar
// - import/export faqat modul fayllarida ishlaydi (type = "module" kerak)
// - import/export doim faylning yuqorisida bo'lishi kerak
// - Modul faqat bir marta bajariladi, keyingi importlar cashe dan olinadi
// - export default modulda faqat bitta bo'lishi mumkin
// Fayl nomlarida .js kengaytmasi yozish kerak (yoki .mjs agar kerak bo'lsa)

//5) Brouserda modullar
// HTML faylda sctipt tegi bilan modulni chaqirish
<sctipt type="module" src="main.js"></sctipt>;

//Modullarda defer avtomatik bo'ladi - yani fayl DOM yuklangandan keyin bajariladi

// 6) Dinamik import
//agar modulni faqat kerak bo'lganda yuklamoqchi bo'lsangiz

button.addEventListener("click", async () => {
  const module = await import("./math.js");
  console.log(module.add(3, 4));
});
