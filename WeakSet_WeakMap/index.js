//WeakSet bu - Set ga o'xshash lekin faqat object (yoki fuunction ) turlarini saqlovchi to'plam

//WeakSet hususiyatlari
// 1) faqat object va function saqlaydi
// 2) WeakSet ichidagi objectlarga faqat reference saqlanadi
// 3) agar object boshqa joyda ishlatilmasa - automatic xotiradan o'chadi (garbage collected)
// 4) WeakSet iterable emas - uni for ...of yoki .forEach() bilan aylantirib bo'lmaydi

//WeakSet yaratish

// const weakSet = new WeakSet();

// WeakSet ga faqat malumot qo'shish, o'chirish va ichidagi malumotlarni bor yoqligini tekshirish mumkin xolos
// shuning uchun WeakSet da .add(), delete() va has() metodlari ishlaydi xolos

// let obj1 = { name: "Ali" };
// let obj2 = { age: 25 };
// let obj3 = { city: "Tashkent" };

// weakSet.add(obj1);
// weakSet.add(obj2);
// weakSet.add(obj3);

// console.log(weakSet); //WeakSet { <items unknown> }
// console.log(weakSet.has(obj1)); //true

//WeakSet dan malumot olib bo'lmaydi yani uning get metodi yo'q va uni iteratsiya qilib bo'lmaydi
//WeakSet da objectlar maxfiy saqlanadi console.log qilib WeakSet ni tarkibini ko'rib bo'lmaydi
// WeakSet ning uzunligini ko'rib bo'lmaydi yani unda size metodi yo'q

//WeakSet ning Set dan farqlari
// 1) Faqat object va functionlar toplamini saqlaydi
// 2) object larni faqat manzilini saqlaydi, ishlatilmasa avtomatik carbage collection bo'ladi
// 3) O'xshash metodlari .add(), .delete(), .has()
// 4) WeakSet da mavjud emas .size, .clear(), values()
// 5) WeakSet dan malumot olib bo'lmaydi yani u iterable emas
// 6) WeakSet da malumotlar maxfiy saqlanadi va uning uzunligini bilib bo'lmaydi
// 7) WeakSetni object yoki arrayga aylantirib bo'lmaydi undan nusxa olib bo'lmaydi

// UNDA WEAKSET NIMA UCHUN ISHLATILADI

// 1) Autorizatsiya qilishda - userlarga tegishli object lar WeakSet ichida unique holatda saqlanadi
// va saytga kirishda user ga ruxsat berish jarayonida ushbu userning malumotlari bor yo'qligini tekshirish uchun
// WeakSet dan foydalanib .has() metodi orqali userni tekshirish mumkin

const allowedUser = new WeakSet();

const login = (user) => {
  allowedUser.add(user);
};

const checkUser = (user) => {
  if (allowedUser.has(user)) {
    console.log("access granted");
  } else {
    console.log("access denied");
  }
};

let user1 = { name: "Ali" };
let user2 = { name: "Vali" };

login(user1);

checkUser(user1); //access granted
checkUser(user2); //access denied

//Bu yerda allowedUser ichidagilarni hech kim ko'rib ololmaydi va agar foydalanuvchi o'chib ketsa
//u WeakSet dan ham avtomatik o'chib ketadi(xotira tozaligi uchun)

// 2) Bazida itemlarga ishlov berilganmi yoki yoqligini bilish muhib bo'ladi
// yani bizda objectlardan tashkil topgan item lar mavjud bo'lsa (user malumotlari bo'lishi mumkin)
// ularning har birini ustida qandaydir proccess o'tkazish zarur bo'lsa WeakSet orqali
// item ustida procces o'tkazilgan yoki yo'qligini bilish mumkin
//buning uchun procces o'tkazilgan itemlarni WeakSet ga .add(item) qilamiz va
// if item has bo'lsa WeakSet da konsole ga item already proccessed yozuvini chiqaramiz
// else bo'lsa uni proccess ga qo'shamiz

//3) Memory optimization (garvage Collection bilan birga)
//Weakset ichida saqlangan object dasturdan butunlay o'chsa avtomatik ravishda WeakSet dan xam o'chadi
// bu esa xotira o'z o'zidan tozalanishiga yordam beradi va katta loyihalarda server RAM ni tejaydi
