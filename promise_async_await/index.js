//Promise - bu asinxron operatsiyalarni boshqarish uchun ishlatiladigan obyect.
//Uning yordamida biz kelajakda bajarilgan amallarni (odatda serverdan malumot olish yoki boshqa uzoq davom etadigan operatsiyalar) boshqarishimiz mumkin

//Promise ning holatlari
//1) Pending (Kutish) - Promise hali bajarilmagan
//2)Resolved / Fullfilled (Bajarilgan) - Promise muaffaqiyatili bajarilgan
//3)Rejected (Rad etilgan) - Promise bajarilmagan yoki xato yuz bergan

//Promise yaratish:
// let promise = new Promise(function (resolve, reject) {
//   let success = true;
//   if (success) {
//     resolve("Operatsiya muvaffaqiyatli bajarildi");
//   } else {
//     reject("Xatolik yuz berdi");
//   }
// });

// promise
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error));

//then() va catch() metodlari:
//.then() - Promise muvaffaqiyatli bajarilganda ishlaydi ba qaytarilgan qiymatni qabul qiladi
//.catch() - Promise xato bilan tugaganida ishlaydi va xatoni qabul qiladi

// Promise zanjiri
//bir nechta asinxron operatsiyalarni ketma ket bajarish uchun promislarni zanjir qilish mumkin

// new Promise((resolve, reject) => {
//     resolve("Birinchi");
//   })
//     .then(result => {
//       console.log(result); // Birinchi
//       return "Ikkinchi";
//     })
//     .then(result => {
//       console.log(result); // Ikkinchi
//       return "Uchinchi";
//     })
//     .then(result => {
//       console.log(result); // Uchinchi
//     });
