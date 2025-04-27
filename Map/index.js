//Map - bu kalit va qiymat juftliklarini saqlaydigan kolleksiya
//key lar har qanday turdagi malumot bo'lishi mumkin

//========== Mapning yasalishi =========================

// const newMap = new Map() // bu bo'sh map to'plamini yaratadi

//mapga boshlang'ich qiymat ham berilishi mumkin, lekin kalit va qiymatlar array ichida array shaklida beriladi

// const newMap = new Map([
//   ["name", "Ali"],
//   ["age", 3],
//   ["isStudend", false],
// ]);

// console.log(newMap); //Map(3) { 'name' => 'Ali', 'age' => 3, 'isStudend' => false }

//Bundan tashqari boshlang'ich qiymat sifatida objectlarni iterable xolatga keltirib olib bersa bo'ladi
//Bunda objectni Object.entries() metodi orqali [[key, value], [key, value]] ko'rinishiga keltirib olinadi
// const obj = { name: "Ali", age: 3 };

// const newMap = new Map(Object.entries(obj));
//===========================================================================

// set() - mapga malumot qo'shish uchun ishlatiladi

// const newMap = new Map();
// newMap.set("meva", "olma");
// newMap.set("animal", "horse");
// newMap.set("animal", "horse"); // Map ham Set singari bir hil qiymatlarni faqat bir marta saqlaydi, takrorlanuvchi qiymatlarni saqlamaydi

// console.log(newMap); // Map(2) { 'meva' => 'olma', 'animal' => 'horse' }

// newMap.set("animal", "dog");
// console.log(newMap); //Map(2) { 'meva' => 'olma', 'animal' => 'dog' }
// demak Map bir hil qiymatlarni faqat bir marta saqlaydi
//undan tashqari bir xil key ga ega bo'lgan ikki qiymat berilsa ularning faqat oxirgi berilganini saqlaydi
// keylar unique bo'lishi kerak

// newMap.set("hayvon", "horse");
// console.log(newMap); //Map(3) { 'meva' => 'olma', 'animal' => 'dog', 'hayvon' => 'horse' }
// ko'rinib turganidek Mapda vaqat keylar unique bo'lishi kerak, qiymatlar takrorlanishi mumkin

// const obj = { key: "salom", key: 3 };
// console.log(obj); //{ key: 3 }
//malumot uchun objectlarda ham key unique bo'lishi kerak ekan va bir xil keyning oxirgisini qabul qilar ekan
