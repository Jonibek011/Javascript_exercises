//Garbage collection - bu Javascript tomonidan xotirani avtomatik boshqarish mexanizmidir.
//asosan u keraksiz bo'lib qolgan objectlarni aniqlab xotiradan o'chiradi

//Garbage collection ni amalga oshirish uchun Javascript objectlarni reachable va unreachable ga ajratadi
// Reachable -- agar objectga global o'zgaruvchi, funksiyada elon qilingan local o'zgaruvchi yoki boshqa yo'l bilan bog'lanishni iloji bo'lsa u reachable hisoblanadi
// Unreachable -- object ga bog'lanishni imkoni bo'lmasa u unreachable hisoblanadi

// garbage collector eng yuqori global objectdan boshlab objectlar reachable yoki unreachable ligini
//tekshirib chiqadi va topilgan unreachable objectlarni o'chiradi

//objectga faqat WeakMap yoki WeakSet orqali bog'lanish mumkin bo'lsa garbage collector uni o'chiradi
