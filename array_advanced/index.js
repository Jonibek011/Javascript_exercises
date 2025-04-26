//Immutibality - asl arrayni o'zgartirmasdan yangi array yaratish
//maqsad: kodni tozaligi, debugging, asl arrayni saqlab qolish va hk
//arraylarda immutable likni quyidagi metodlarni ishlatib saqlab qolish mumkin
// slice(), concat(), map(), filter(), reduce(), spread operator

// Xulosa:
// Hech qachon eski arrayni o'zgartirma! Yangi array yarat!

// Bu professional yondashuv hisoblanadi va har bir yaxshi developer shunday qiladi.

//Destructuring - array yoki object ichidagi malumotlarni oson ajratib olish usuli

const arr = [10, 20, 30];

const [first, second, third] = arr;

console.log(first); // 10
console.log(second); // 20
console.log(third); // 30
