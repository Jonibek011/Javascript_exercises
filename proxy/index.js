//1) Proxy nima va nima uchun ishlatiladi
//Proxy - bu Javascript objectini o'rab, unga kirish yoki uni o'zgartirishni kuzatish
//ba boshqarish imkonini beruvchi vosita

//Nega kerak
// - objectga xususiyat qo'shishda/kirishda nazorat o'rnatish
// - reaktiv tizimlar yaratish (Vue, MobX)
// - Validatsiya, log yozish, xatoliklar oldini olish

//2) Asosiy sintaxis
// let proxy = new Proxy(target, handler)
//target - haqiqiy object
//handler - 'traplar' (funksiyalar majmuasi) mavjud bo'lgan OBJECT

//3) Eng ko'p ishlatiladigan trap lar
//get() ---- objectdan qiymat o'qilganda ishga tushadi
//set() ---- Objectga qiymat yozilganda ishga tushadi
//has() ---- in operatori ishlatilganda ishga tushadi
//deleteProperty() -- delete obj.prop ishlaganda chaqiriladi

//4. Eng oddiy get trap misolini tushunish
let user = {
  name: "Ali",
};

let proxy = new Proxy(user, {
  get(target, prop) {
    if (prop in target) {
      return target[prop];
    } else {
      return "Bunday malumot yo'qd";
    }
  },
});

console.log(proxy.name); // "Ali"
console.log(proxy.age); // "Bunday malumot yo'q"

//set(target, property, value, reciever)

let user1 = {};

let proxy1 = new Proxy(user, {
  set(target, prop, value) {
    if (typeof value === "string") {
      target[prop] = value;
      return true;
    } else {
      console.log("Faqat string yozish mumkin");
      return false;
    }
  },
});

proxy1.name = "Ali"; // OK
proxy1.age = 25; // Xatolik: "Faqat string yozish mumkin"
console.log(user); // { name: "Ali" }

//has(target, property)
let user2 = {
  name: "Ali",
};

let proxy2 = new Proxy(user, {
  has(target, prop) {
    return prop === "name"; // faqat name mavjud deb ko'rsatadi
  },
});

console.log("name" in proxy2); // true
console.log("age" in proxy2); // false
