// Date objectini yaratish usullari
//Javaskriptda Date objectini 4 xil usul bilan yaratish mumkin
//1.1 new Date()
// const now = new Date();
// console.log(now); // 2025-04-28T04:29:57.144Z

//1.2 new Date(milliseconds) - 1970 - yil 1-yanvardan boshlab millisecondlar bo'yicha vaqt yaratadi

// const dateFromMs = new Date(10000);
// console.log(dateFromMs); //1970-01-01T00:00:10.000Z - bunda parametrga kiritilgan har bir 1000 uchun 1 sekund qo'shadi

//1.3 new Date(dateString) - sana va vaqtni string farmatida berib yaratish

// const dateFromString = new Date("1996-02-12");
// console.log(dateFromString); //1996-02-12T00:00:00.000Z
// kiritilmagan parametrlarni 0 sifatida oladi

//1.4 new Date(year, month, day, hours, minutes, seconds, milliseconds)
// har bir parametr alohida beriladi
// month 0 dan boshlanadi

//Javascriptda Date objectida ikkita asosiy turdagi metodlar bor
//1) Sana va vaqtni o'qish uchun metodlar (get metodlar)
//2) Sana va vaqtni o'zgartirish uchun metodlar (set metodlar)

//GET metodlar
// 1) getFullYear() - yilni to'liq qaytaradi

// const now = new Date();
// console.log(now.getFullYear()); // 2025

//2) getMonth() - oyni qaytaradi (0-11)
// console.log(now.getMonth()); // 3

//3) getDate() - oyni ichidagi kunni qaytaradi
// console.log(now.getDate()); // 28

//4) getDay() - hafta kunini qaytaradi (0-6) yakshanba = 0, dushanba =1
// console.log(now.getDay()); // 1

//getHours(), getMinutes(), getSeconds(), getMilliseconds() - vaqtni olish

// getTime() - 1970-yil 1-yanvardan beri o'tgan millisecond larni qaytaradi (timestamp)

// console.log(now.getTime()); // 1745820969388

//Date.now() - hozirgi vaqtni timestamp qiymatini beradi (to'g'ridan to'g'ri chaqiriladi)

// console.log(Date.now()); //1745821074226

//SET metodlar
// 1) setFullYear() - yilni o'zgartiradi

// const now = new Date();
// now.setFullYear(2030);
// console.log(now.getFullYear()); //2030

//2)setMonth(month) - oyni o'zgartiradi
//3)setDate(day) = kunni o'zgartiradi
// setHours(), setMinutes() ...

// agar hisoblash chegaradan chiqib ketsa javascript uni avtomatik to'g'rilaydi
// misol uchun 32-aprel => 2-mayga aylanadi
