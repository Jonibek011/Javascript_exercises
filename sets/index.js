//set - bu faqat noyob (takrorlanmaydigan) qiymatlarni saqlovchi kolleksiya
//setda qiymatlarning tartibi saqlanadi lekin index olmaydi

// set yaratilishi
// const newSet = new Set()

// const mySet = new Set([1, 2, 2, 3, 4, 4, 5]);
// console.log(mySet); // set console ga malumot qaytarganda Set(length) -set ning uzunligini qaytaradi va {} ni ichida setning qiymatlarini qaytaradi

// const arr = ["olma", "anor", "olcha", "olma"];

// const newSet = new Set(arr);
// console.log(newSet);

//===========================================================================
//Set metodlari
const newSet = new Set();

//add(value) - setga malumot qo'shadi agar u yo'q bo'lsa
newSet.add("olma");
console.log(newSet); //Set(1) { 'olma' }
// add metodi setga faqat bitta malumot qo'sha oladi
//agar parametriga bir nechta malumot berilsa ularning faqat birinchisini set ga qo'shadi
