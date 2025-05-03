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

//============== PARSING ================================
// bu bosqichda kodlar tokenlarga ajratiladi
//token - eng kichik manoli birlik let, x, =, 5,; kabi
//bu jarayon scanner deb ataladigan kichik modul orqali amalga oshiriladi
// tokenlar asosida kodning mantiqiy tuzilmasi (strukturasi) aniqlanadi
//Engine tokenlarni Abstract Syntax Tree nomli daraxt tuzilmasiga aylantiradi
//Nega bu bosqich muhim - Syntax error aynan shu bosqichda aniqlanadi
//Shu bosqichda xatolik aniqlansa, keyingi bosqichlarga o'tmaydi

//============= COMPILATION ======================================
// Compilyatsiya bu - javascript kodini mashina tushunadigan tilga o'girilishi
//Javascript engine Just-In-Time Compilation deb ataladigan  yondashuvni ishlatadi
//JIT avval interpretatsiya qilinadi, so'ng optimallashtirib kompilyatsiya qilinadi
// interpretatsiya bu javascript konding bytecode ga aylantirilishi
//bytecode esa javascript tili bilan mashina tilining o'rtasidagi til, bu tilni javascript engine o'qiydi

//Compilation bosqichi tarkibiy qismlari
//1. Interpreter
// - AST asosida bytecode ishlab chiqaradi
// - bu kod darxol bajarilishi mumkin
// - juda tez ishlaydi, lekin optimallashtirilmagan

//2.Profiler (Monitoring)
// - Kod bajarilayotgan paytda qaysi funksiyalar tezt-tez chaqirilayotganini, odatdagi qiymatlarni va boshqa statistikani kuzatadi
// - bu bosqich hot code ni aniqlaydi

//3.Compiler
// - Profiler kuzatgan hot code ni olib, optimallashtiradi va native machine code ga aylantiradi
// - natijada code juda tez ishlay boshlaydi

//========================= EXACUTION =============================
