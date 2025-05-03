//Javascript engine qanday ishlaydi
//Javascript engine bu - Javascript kodini o'qib, uni mashina kodiga aylantirib, bajaradigan dasturiy vosita
//har bir brauzer o'zining JS engineiga ega (Chrome - v8, firefox - SpiderMonkey)
// JS engine ni asosiy 5 bosqichga bo'lib tushuntirish mumkin

//1)Parsing(taxlil qilish bosqichi)
//Bu bosqichda js engine birinchi bo'lib kodni parsing qiladi, ya'ni matn sifatidagi kodni o'qiydi
// va uni Abstrackt Syntax Tree ga aylantiradi

//2) Compilation (Kompilyatsiya bosqichi)
// Bu bosqichda kodlar mashina tiliga o'giriladi
// bu bosqichda AST dan foydalanib, engine Intermediate Representation (IR) yaratadi
//bu bosqichda JIT (Just-in-time) compiler ishlaydi
//Engine kodni oldindan (Ahead-of-time) yoki real vaqtda (Just-in-time) mashina kodiga aylantiradi

//V8 buni ikki bosqichda amalga oshiradi
// 1)ignition - bytecode yaratiladi
// 2)eng tez ishlashi uchun optimallashtirilgan mashina kodi yaratiladi

//3)Exectution (Ijro bosqichi)
//Endi kompilyatsiyadan o'tgan kod Call Stack orqali bajariladi
//har bir funksiya chaqirilganda u stack frame sifatida stack ga qo'shiladi
//Engine Memory Heap va Stack orqali malumotlarni boshqaradi
