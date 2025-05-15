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

//========= async await ===================================

// async await - bu promise ga asoslangan, ammo o'qilishi yanada osonlashgan sintaksis
//async - bu funksiya avtomatik promise qaytaradigan deb belgilaydi

// async function foo() {
//   return 1;
// }

//yuqoridagi funksiya aslida quyidagiga teng
// function foo() {
//   return Promise.resolve(1);
// }

// //Misol
// async function sayHello() {
//   return "Salom";
// }

// sayHello().then(alert); //"Salom"

//Await nima - faqat async funksiyalar ichida ishlaydi va u berilgan promise tugaguncha kutadi. tugagach natijani qaytaradi

// function timeout(ms) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }

// async function process() {
//   console.log("boshlanish");
//   await timeout(2000); // 2 soniya kutadi
//   console.log("2 soniyadan so'ng");
// }

// process();

//real hayotiy masala
async function getUser() {
  let response = await fetch("https://jsonplaceholder.typicode.com/users/1");
  let data = await response.json();
  console.log(data);
}

//Bu yerda nima bo'lyapti
//1) fetch orqali malumot so'rayapmiz - bu promise qaytaradi
//2)await fetch() - fetch tugashini kutamiz
//3) response.json() ham promise - uni ham await qilamiz
//4) natijani console ga chiqaramiz

//Await faqat promise bilan ishlaydi, agar unga oddiy qiymat berilsa, u darhol o'sha qiymatni qaytaradi

// Try catch bilan xatoni ushlash
//agar await ishlatilgan Promise da xato yuz bersa, bu xatoni try catch orqali ushlash mumkin
async function getuser() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/users/1");
    let data = await response.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}

//Parallel bajarish uchun Promise.all bilan birga
//Agar bir nechta await ketma-ket ishlatilsa, ular navbatma-navbat bajariladi. Tezroq natija olish uchun Promise.all() ishlatamiz

async function loadAll() {
  let urls = [
    "https://jsonplaceholder.typicode.com/users/1",
    "https://jsonplaceholder.typicode.com/users/2",
  ];

  let results = await Promise.all(urls.map((url) => fetch(url)));
  let data = await Promise.all(results.map((result) => result.json()));
  console.log(data);
}

//Async await bilan rekursiya, loop va boshqalar
//Loop ichida await ishlatish
async function loadUsers() {
  let ids = [1, 2, 3];

  for (let id of ids) {
    let request = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    let data = await request.json();
    console.log(data.name);
  }
}
//bu ketma ket bajariladi, parallel uchun yuqoridagi Promise.all usuli afzal
