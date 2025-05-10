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
