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
// const newSet = new Set();

//add(value) - setga malumot qo'shadi agar u yo'q bo'lsa
// newSet.add("olma");
// console.log(newSet); //Set(1) { 'olma' }
// add metodi setga faqat bitta malumot qo'sha oladi
//agar parametriga bir nechta malumot berilsa ularning faqat birinchisini set ga qo'shadi

//=============================================================
//.has(value) - set ichida qiymatni qidiradi topsa true topmasa false qaytaradi, arraydagi includes kabi
// console.log(newSet.has("olma")); //true

//===============================================================
//delete(value) -set ichidan qiymatni o'chiradi

// newSet.delete("olma");
// console.log(newSet);

//===============================================================

//clear() - set ichidagi hamma qiymatlarni o'chiradi
// newSet.clear();
// console.log(newSet);

//==============================================================

//size() - set ichidagi qiymatlar sonini ko'rsatadi
// console.log(newSet.size); // = size qavslarga ega emas

//==============================================================

// forEach() - setdagi har bir element ustida amaliyot bajaradi

// const set = new Set([1, 2, 3, 4, 5]);
// set.forEach((s) => {
//   console.log(s + 1);
// });

//==============================================================

//values() - set ichidagi qiymatlarni iterator shaklida chiqaradi

// const set = new Set([1, 2, 3, 4, 5]);
// const setItems = set.values();
// console.log(setItems);

// const set4 = new Set([100, 200, 300]);
// for (let value of set4.values()) {
//   console.log(value); // 100, 200, 300
// }

// (Note: Set uchun values() va keys() bir xil natija beradi, chunki Set faqat qiymatlar saqlaydi.)

//==================================================================================================================================
// SETDAN ARRAY YASASH USULLARI

// 1) spread operatori bilan
// const newSet = new Set([1, 2, 3, 4, 5]);

// const arr = [...newSet];

// console.log(arr); // [ 1, 2, 3, 4, 5 ]

// 2) Array.from() bilan

// let arr1 = Array.from(newSet);

// console.log(arr1); //[ 1, 2, 3, 4, 5 ]

// const set = new Set(["apple", "banana", "cherry"]);
// set.delete("banana");
// const arr = Array.from(set);
