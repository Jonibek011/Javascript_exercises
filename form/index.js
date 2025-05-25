//Form elementlari
//input, textarea, select, button, label

//DOM orqali tanlab olish
// const form = document.querySelector("form");
// const input = document.querySelector('input[name="email"]');

//Form xodisalari (events)
//submit hodisasi

//Form yuborilganda trigger bo'ladi
// form.addEventListener("submit", (e) => {
//   e.preventDefault(); //sahifa reload bo'lishini to'xtatadi
//   //malumotlarni olish va validatsiya qilish
// });

//input, change, focus, blur hodisalari

//input xodisasi qachon ishga tushadi
//foydalanuvchi input maydoniga biror belgi kiritganida yoki o'chirganida
//har bir harakatda ishga tushadi

//Qo'llanilishi
// -- Real-time validatsiya
// --Live qidiruv
// -- Input qiymatini ko'rsatish
// const input = document.querySelector('input[name="email"]');
// input.addEventListener("input", (e) => {
//   console.log(e.target.value);
// });

// change xodisasi -qachon ishga tushadi
//Input qiymatini o'zgartirib, so'ng focus bo'lganda (yani boshqa joyga bosilganda) ishga tushadi
//Qo'llanilishi
// -- select, chekbox, radio elementlari bilan ishlashda
// -- formani yakunlashdan oldin  o'zgarishni aniqlash
// -- Fayl yuklanganda fayl tanganganini aniqlash

//input har bir o'zgarishda ishlaydi, change esa faqat focus tashlangandan keyin

//Focus xodisasi - qachon ishga tushadi
// input maydoniga foydalanuvchi bosganda yoki tab tugmasi orqali kirsagina ishga tushadi
//Qo'llanilishi
// -- input tanlanganini aniqlash
// -- styling (masalan faollashtirilgan input uchun border rangini o'zgartirish)
// -- foydalanuvchiga maslaxatlar berish (masalan: parol kamida 8 ta belgidan iborat bo'lsin)

// input.addEventListener("focus", () => {
//   console.log("Inputga fokus berildi");
// });

//Blur xodisasi - qachon ishga tushadi
// input maydonidan chiqib ketganda (yani boshqa elementga o'tishda ishga tushadi)
//Qo'llanilishi
// --Foydalanuvchi inputdan chiqib ketganda validatsiya qilish
// input.addEventListener("blur", (e) => {
//   console.log("inputdan chiqildi");
// });

//=================================
//3)Form malumotlarini olish
//input.value
// const name = document.querySelector('inpu[name="name"]').value;

//FormData API
//yuborilayotgan form malumotlarini object sifatida olish

// const form = document.querySelector("form");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const formData = new FormData(form);

//   const email = formData.get("email");
//   const password = formData.get("password");

//   console.log(email, password);
// });

//formData metodlari
//append() - formdata obyectiga yangi kalit qiymat juftligi qo'shadi,
//agar kalit mavjud bo'lsa, eski qiymat o'zgarmaydi - yangi qiymat qo'shiladi
// const fd = new FormData();
// fd.append("name", "Ali");
// fd.append("name", "Vali"); // bir xil kalit, lekin boshqa qiymat

// console.log(fd.getAll("name")); // ['Ali', 'Vali']

//set(name, value) - kalit mavjud bo'lsa, faqat birinchi qiymatni yangilaydi, qolganlarini o'chiradi,
//kalit mavjud bo'lmasa yangisini qo'shadi

// const fd = new FormData();
// fd.append("name", "Ali");
// fd.append("name", "Vali");

// fd.set("name", "Jasur"); // endi faqat 'Jasur' qoladi

// console.log(fd.getAll("name")); // ['Jasur']

//get(name) - Berilgan kalit uchun birinchi qiymatni qaytaradi
// const fd = new FormData();
// fd.append("email", "test@example.com");

// console.log(fd.get("email")); // test@example.com

//getAll(name) -- kalit bir necha marta ishlatilgan bo'lsa barcha natijalarni massiv shaklida qaytaradi
// const fd = new FormData();
// fd.append("color", "red");
// fd.append("color", "green");

// console.log(fd.getAll("color")); // ['red', 'green']

//has(name) - formData ichida kalit mavjudmi yo'qmi shuni qaytaradi
// const fd = new FormData();
// fd.append("username", "webuser");

// console.log(fd.has("username")); // true
// console.log(fd.has("password")); // false

//delete(name) - berilgan kalit bo'yicha hamma qiymatlarni o'chiradi
// const fd = new FormData();
// fd.append("token", "123abc");
// fd.delete("token");

// console.log(fd.has("token")); // false

//entries() - barcha kalit-qiymat juftliklarini iterator orqali aylantirishga imkon beradi
// const fd = new FormData();
// fd.append("name", "Ali");
// fd.append("email", "ali@example.com");

// for (let [key, value] of fd.entries()) {
//   console.log(`${key}: ${value}`);
// }
// name: Ali
// email: ali@example.com

//demak formData object ga xos hislatlarni nomoyon qiladi
// bundan kelib chiqadiki formdatadan object yasash mumkin

const newObj = Object.fromEntries(FormData.entries());
