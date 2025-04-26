//set - bu faqat noyob (takrorlanmaydigan) qiymatlarni saqlovchi kolleksiya
//setda qiymatlarning tartibi saqlanadi lekin index olmaydi

// set yaratilishi
// const newSet = new Set()

// const mySet = new Set([1, 2, 2, 3, 4, 4, 5]);
// console.log(mySet); // set console ga malumot qaytarganda Set(length) -set ning uzunligini qaytaradi va {} ni ichida setning qiymatlarini qaytaradi

// const arr = ["olma", "anor", "olcha", "olma"];

// const newSet = new Set(arr);
// console.log(newSet);

// setni new Set() bilan yaratishda uning parametriga iterable value berish kerak
//1) eng kop beriladigani array
//const set = new Set([1,2,3])
// 2) string berish ham mumkin
//const set = new Set("hello")
//console.log(set) // Set(4) {'h','e','l','o'} e'tibor beradigan jihati
//string berilsa uning har bir belgisini alohida element sifatida saqlayapti
// hamda hello ikkita l bo'lsa ham ularning bittasini qabul qilyapti

// 3) number bersa nima bo'ladi
//const set = new Set(12345) //Error: 12345 is not iterable

// 4)object bersak nima bo'ladi
//const set = new Set({a:1, b:2}) //Error: object is not iterable

//===========================================================================
//Set metodlari
const newSet = new Set();

//add(value) - setga malumot qo'shadi agar u yo'q bo'lsa
// newSet.add("olma");
// console.log(newSet); //Set(1) { 'olma' }
// add metodi setga faqat bitta malumot qo'sha oladi
//agar parametriga bir nechta malumot berilsa ularning faqat birinchisini set ga qo'shadi
