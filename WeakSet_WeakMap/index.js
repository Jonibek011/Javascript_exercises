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

// const allowedUser = new WeakSet();

// const login = (user) => {
//   allowedUser.add(user);
// };

// const checkUser = (user) => {
//   if (allowedUser.has(user)) {
//     console.log("access granted");
//   } else {
//     console.log("access denied");
//   }
// };

// let user1 = { name: "Ali" };
// let user2 = { name: "Vali" };

// login(user1);

// checkUser(user1); //access granted
// checkUser(user2); //access denied

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

//========================================================================
// 1. WeakSet yaratasan. (masalan: activeSessions)
// ✅ 2. login(user) funksiyasi: foydalanuvchini sessiyaga qo'shadi.
// ✅ 3. logout(user) funksiyasi: foydalanuvchini sessiyadan olib tashlaydi.
// ✅ 4. checkSession(user) funksiyasi: foydalanuvchi sessiyada bormi-yo'qmi tekshiradi.

// const activeSessions = new WeakSet();

// const login = (user) => {
//   activeSessions.add(user);
// };

// const logout = (user) => {
//   activeSessions.delete(user);
// };

// const checkSession = (user) => {
//   return activeSessions.has(user);
// };

// let user1 = { name: "Ali" };
// let user2 = { name: "Vali" };

// login(user1);

// console.log(checkSession(user1));
// console.log(checkSession(user2));

// logout(user1);

// console.log(checkSession(user1));
// console.log(checkSession(user2));

//===============================================================================================================

//WeakMap - bu maxsus turdagi map bo'lib, kalit so'z sifatida faqat object saqlaydi
// garbage collection bilan ishlaydi, agar object boshqa joyda ishlatilmasa, avtomatik o'chirib yuboriladi
//size yoki forEach kabi metodlari yoq
//Metodlari
//.set(key, value)
//.get(value)
//.delete(value)
//.has(value)

//elon qilinishi
const user = new WeakMap();

//qachon ishlatamiz
//Maxfiy malumotlar saqlash uchun  - masalan foydalanuvchi sessiya malumotlari, cashing qilish,
//kompyuter xotirasini boshqarish

//Garbage collection bilan ishlashda - object o'chsa WeakMap dan ham o'chadi -xotira tozalanadi
