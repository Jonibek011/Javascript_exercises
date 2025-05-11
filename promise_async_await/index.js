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

const getData = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "https://dummyjson.com/products");
  request.send();

  if (request.status === 200) {
    let data = JSON.parse(request.responseText);
    console.log(data);
  } else {
    console.log("something is wrong");
  }
};

getData();
