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

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(form);

  const email = formData.get("email");
  const password = formData.get("password");

  console.log(email, password);
});
