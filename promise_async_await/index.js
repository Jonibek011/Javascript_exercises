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

//========== Promise.all() ===========================
//Promise.all() -- bir nechta promiselarni birgalikda bajaradi va barchasi muvaffaqiyatli bajarilandan so'ng bitta natija qaytaradi. Agar ulardan bittasi ham xato bersa, butun promise.all reject bo'ladi

// let p1 = new Promise(resolve => setTimeout(() => resolve("1-son"), 1000));
// let p2 = new Promise(resolve => setTimeout(() => resolve("2-son"), 2000));
// let p3 = new Promise(resolve => setTimeout(() => resolve("3-son"), 1500));

// Promise.all([p1, p2, p3])
//   .then((result) => console.log("Hammasi tugadi", result))
//   .catch((err) => console.log("Xatolik", err));

//=========== Promise race() ================================
//Promise.race() - ro'yxatdagi birinchi bajarilganini (yoki rad etilganini) natija sifatida qaytaradi. Qolganlarini kutmaydi

// Promise.race([promise1, promise2, promise3])
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err));

// const getData = (callback) => {
//   const request = new XMLHttpRequest();
//   request.open("GET", "todos.json");
//   request.send();

//   request.addEventListener("readystatechange", () => {
//     if (request.status === 200 && request.readyState === 4) {
//       const data = JSON.parse(request.responseText);
//       callback(undefined, data);
//     } else {
//       callback("Something went wrong", undefined);
//     }
//   });
// };

// getData((err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// });

// const getData = (source) => {
//   return new Promise((resolve, reject) => {
//     const request = new XMLHttpRequest();
//     request.open("GET", source);
//     request.send();
//     request.addEventListener("readystatechange", () => {
//       if (request.status === 200 && request.readyState === 4) {
//         const data = JSON.parse(request.responseText);
//         resolve(data);
//       } else if (request.readyState === 4) {
//         reject("Malumot olishda xatolik yuz berdi");
//       }
//     });
//   });
// };

// getData("./todos.json")
//   .then((data) => {
//     console.log(data);
//     return getData("./todos1.json");
//     //return "Hammasi yaxshi"
//   })
//   .then((data) => console.log(data)) //Hammasi yaxshi
//   .catch((err) => console.log(err));

//birinchi .then dan return qilingan malumot ikkinchi .then ga kelib tushadi

//================================================================
//Promise.allSettled() - hammasi tugaguncha kutadi, xato bo'lsa ham
//Promise.all() dan farqai agar promise larning bir nechtasi xato javob qaytarsa va
//bir nechtasiga malumot kelsa ularni har birini alohida qaytaradi

// Promise.allSettled([Promise1, Promise2]).then((results) => {
//   results.forEach((result) => {
//     if (result.status === "fulfilled") {
//       console.log("Muvaffaqiyatli: ", result.value);
//     } else {
//       console.log("xato", result.reason);
//     }
//   });
// });

//=================================================================
// Promise.any() - birinchi muvaqqayatli natijani oladi
// bu promise.race ni optimallashtirilgan varyanti
//promise.race birinchi natijani qaytaradi agar u xatolik bo'lsa ham
//promise.any esa birinchi ijobiy natijani qaytaradi

Promise.any([promise1, promise2, promise3])
  .then((result) => {
    console.log("✅ Muvaffaqiyatli:", result);
  })
  .catch((error) => {
    console.error("❌ Hammasi xato:", error);
  });

//Promise.resolve(value) bu new Promise(resolve = > resolve(value) ) bilan bir xil

// Finally

//--finally() -- natijadan qatiy nazar ishlaydi

//finally() metodi Promise muvaffaqiyatli bo'ladimi yoki xato qiladimi - baribir ishlaydi

// promise
//   .then(result => { ... })     // resolve bo‘lsa
//   .catch(error => { ... })     // reject bo‘lsa
//   .finally(() => { ... });     // har doim ishga tushadi

//🎯 Maqsadi:
//Tozalash ishlari uchun (loading tugatish, spinnerni o'chirish, resurslarni yopish)

//🔍 Muhim eslatmalar:
//Agar promise tugagach, spinnerni o'chirish yoki foydalanuvchiga xabar chiqarish kerak bo'lsa -finally() eng yaxshi joy
//finally() yangi qiymat uzatmaydi, yani .then() yoki catch() dagi qiymatni o'zgartirmaydi
//finally da yozilgan coddan qiymat qaytarilsa ham u oldingi qiymatni o'zgartirmaydi.
//finally faqat promise zanjiri oxirida emas, har qanday joyda ishlatilishi mumkin

// button.disabled = true;
// fetch(url)
//   ...
//   .finally(() => {
//     button.disabled = false;
//   });
