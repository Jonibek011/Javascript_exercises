//String

//string asosan ikki xil usulda yasaladi

// let str1 = "webbrain";
// let str2 = new String("webbrain"); // constructor orqali string yasash

// console.log(str1, str2); // webbrain  [String: 'webbrain']
// // constructor funksiyalar doim object qaytarganligi sababli new String string ko'rinishidagi string qaytaradi

// console.log(str1 === "webbrain"); // true

// console.log(str2 === "webbrain"); // false - sababi str2 ning tarkibi [String: 'webbrain']

// //natijada
// console.log(str1 === str2); // false

// localeCompare() = bu metod berilgan ikkita string malumotni alfabit ketmaketligida qaysi biri birinchi kelishini
//qaytaradi. bunda parametrga berilgan string nuqtadan oldin kelgan stringa nisbatan solishtiriladi

// console.log(str1.localeCompare(str2));  - bu xolatda str2 str1 dan oldin keladimi degan ma'noda solishtirilmoqda
// agar javob true bo'lsa yani str2 alifbo bo'yicha str1 dan oldin kelsa 1 qaytadi agar aksincha bo'lsa -1 qaytadi agar
//ikkala string mutlaqo bir xil bo'lsa 0 qaytadi
// let str1 = "apple";
// let str2 = "banana";
// console.log(str2.localeCompare(str1)); // bu yerda str1 yani apple str2 yani banana dan alifbo ketma ketligi bo'yicha oldinroqda
// keladimi degan mantiq bilan solishtirilmoqda. birinchi harf solishtiriladi hamda a b dan oldin kelganligi sababli 1 qaytadi
//agar shu xolatda str2 str1 ga nisbatan solishtirilganda -1 qaytaradi

// agar solishtirilayotgan har ikkala str qiymati mutlaqo bir xil bo'lsa 0 qaytadi
// let str = "abc";
// let str2 = "abc";
// console.log(str2.localeCompare(str)); // 0

// agar berilgan ikki stringni birinchi harflari bir xil bo'lsa farq qiladigan harfgacha tekshirib boradi
//va farq qiladigan birinchi harflarni solishtirib natijani qaytaradi
// let str = "abcedf";
// let str2 = "abcdef";

// console.log(str.localeCompare(str2)); // bu yerda str2 str dan oldin keladimi degan mantiq bilan tekshirilmoqda
// dastlabki abc harflari ikkala stringda ham bir xil, shuning uchun undan keyingi harf tekshiriladi. bu yerda str2 da d harfi
// va str da e harfi solishtiriladi, d e dan oldin kelganligi sababli 1 qaytadi

//agar ikki stringni harflar ketma ketligi bir xil bo'lsayu lekin bittasi qisqaroq bittasi uzunroq bo'lsa qisqa string oldin keladi deb xisoblanadi
//masalan:
// let str = "web";
// let str1 = "webbrain";
// console.log(str.localeCompare(str1)); // bu yerda str1 yani webbrain str yani web dan oldin keladimi degan mantiq bilan tekshirilmoqda
// har ikkala stringninng birinchi uch harfi bir xil yani "web", undan keyin str tugab qolganligi sababli solishtirish uchun harflar qolmaydi
// va str1 hali tugamaganligi uchun metod uni kattaroq deb xisoblaydi va str yani web ni birinchi keladi deb xisoblaydi
// va yuqoridagi xolatda -1 qaytadi

// ==========================================================================
//String larga index orqali access qilish mumnin
// let str = "webbrain";
// console.log(str[0]); // w

//stringda bo'sh joylar xam xisobga olinadi va index oladi
// str = "a bcd";
// console.log(str[1]); // '' bosh string qaytadi

// Stirng immutable hisoblanadi yani uni tarkibini o'zgartirib bo'lmaydi

// str = "webbrain";
// str[0] = "v";
// console.log(str[0]); //w

// str[index] orqali access qilishda index uchun faqat musbat sonlar berilishi kerak manfiy sonlarda undefined qaytaradi
// console.log(str[-1]); // undefined

// Index orqali stringga access qilishda CharAt() metodidan ham foydalanish mumkin
// console.log(str.charAt(1)); // parametrga berilgan indexdagi value ni qaytaradi

// charAt() bilan str[index] orqali stringga access qilishning kichik bir farqi bor. agar stringni uzunligidan kichik bo'lgan
//index kiritilsa har ikkisi bir xil ishlaydi va bir xil qiymat qaytaradi. Lekin agar string uzunligidan katta son index sifatida berilsa charAt() bosh string qaytaradi
//str[] esa undefined qaytaradi

// console.log(str[100]); // undefined
// console.log(str.charAt(-1)); // "" bo'sh string

// demak ikkala usulning farqi charAt() ga mavjud bo'lmagan index yoki manfiy raqam berilsa bo'sh string qaytaradi
// str[] esa undefined qaytaradi

// ==============================================================================================================
// at() = ushbu metod ham charAt va str[] lar kabi berilgan index dagi qiymatni qaytaradi, farqli tarafi esa at() manfiy qiymat olishi ham mumkin
// console.log(str.at(0)); // w
// console.log(str.at(-1)); // n  - yani at() ga manfiy qiymat berilsa stringni oxiridan boshlab qiymat chiqara boshlaydi
//at(-1) string oxirgi indexsidagi qiymat at(-2) oxiridan bitta oldindagi indexning qiymati

// console.log(str.at(100)); // undefined -at() ham mavjud bo'lmagan indexlarda undefined qaytaradi

// toUppercase() stringni har bir harfini katta xarfga o'zgartirib beruvchi metod
//toLowercase() stringni har bir harfini kichik harfga o'zgartirib beruvchi metod
// ==============================================================================================

//indexOf() Bu metod ikkita parametr qabul qiladi va ikkinchi parametr optional
// bu metod string ni ichidan qidirilayotgan qismning indexini qaytaradi

// let str1 = "webbrain";
// console.log(str1.indexOf("bb")); //2
// bu misolda "webbrain" ichidan bb ketmaketligiga ega bo'lgan qismni qaytarishni aytyapmiz
// va bizga 2 ni qaytaryapti yani bb ketma ketligi 2-indexdan boshlanmoqda

//aytaylik bizga qaysidir indexdan keyingi qismda biror bo'lakni qidirmoqchimiz. bu xolatda indexOf ga ikkinchi parametrni berishimiz kerak

// str1 = "akmal";
//yuqoridagi stringda ikkita a harfi bor agar indexOf('a') bersak bizga 0-indexni qaytaradi. agar bizga
// birinchi indexdan keyin a harfi bor yo'qligini tekshirish zarur bo'sa
// console.log(str1.indexOf("a", 1)); // bu xolatda ikkinchi parametr qidiruvni qayerdan boshlashni belgilaydi, natija 3 ni qaytaradi

// javaskript katta va kichik harflarni alohida belgilar deb xisoblaydi shuning uchun
// agar:
// str = "Akmal"; // bo'lsa biz a ni qidiruvga bersak:
// console.log(str.indexOf("a")); // bu xolatda A ni ignore qiladi va  3 qaytaradi

// Shuni takidlash kerakki agar indexOf ga qidiruvga berilgan bo'lagimiz stringni ichidan topilmasa -1 qaytadi
// console.log(str1.indexOf("d")); // -1

// indexOf() bosh joylarni ham qidirishi mumin str.indexOf(' ')

//lastIndexOf() = ushbu metod ham huddi indexOf singari ishlaydi faqat qidirishni stringning oxirirdan boshlaydi
// console.log(str1.lastIndexOf("a")); // 3
// lastIndexOf ham ikkita parametr oladi va ikkinchi parametri qidiruvni qayerdan boshlashni belgilaydi
//index hisoblashni esa string oxiridan emas string boshidan hisoblaydi
// str1 = "bbbabbbbbabbbabbba";
// console.log(str1.lastIndexOf("a", 4)); // 3 yani str1 ning 4-indexidan boshlab orqaga qidirib kelmoqda

//=============================================================================================
//includes() = bu metod parametriga berilgan bo'lak string ichida bor yo'qligini aniqlab beradi va boolean qiymat qaytaradi

// let str = "webbrain";
// console.log(str.includes("in")); // true
