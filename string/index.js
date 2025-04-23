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

//===============================================================================================
//startsWith(parametr) = bu metod asosiy string metodning parametriga berilgan bo'lak bilan boshlanadimi yoki yo'qligini qaytaradi
// let str = "Webbrain academy";
// console.log(str.startsWith("Web")); // true
// console.log(str.startsWith("web")); //false

// endsWith(parametr) bu metod asosiy string metodning parametriga berilgan bo'lak bilan tugaganmi yo'qmi shuni qaytaradi
// console.log(str.endsWith("emy")); //true
// console.log(str.endsWith("y")); //true

// ===========================================================================================
//slice() -- array yoki stringdan bir qismini ajratib oladi va asl array yoki string o'zgarmaydi,
// yangi array yoki string qaytaradi
//slice() ikkita index oladi, birinchisi kesib olishni qayerdan boshalshni ko'rsatadi, ikkinchisi qayergacha kesib olishni ko'rsatadi
// let text = "webbrain academy";
// let textSlice = text.slice(1, 5);
// console.log(textSlice); // ebbr

// //slice ning ikkinchi parametri berilmasa, birinchi parametrga berilgan qiymatdan boshlab stringning oxirigacha kesib oladi
// console.log(text.slice(1)); //ebbrain academy

// //parametrga 0 qiymati berilsa stringni to'liq ko'chirib oladi
// console.log(text.slice(0));

// //slice manfiy qiymat ham olishi mumkin
// console.log(text.slice(1, -1)); //bu xolatda 1-indexdagi qiymatdan boshlab oxirgi qiymatgacha bo'lgan
// // stringni kesib olib qaytaradi // ebbrain academ
// console.log(text.slice(1, -5)); // 1-indexdan boshlab orqadan sanalganda 5-elementgacha

// console.log(text.slice(-7, -2)); // bu xolatda string oxiridan sanalganda 7-elementdan 2-elamentgacha qismni kesib olib qaytaradi

// console.log(text.slice()); // agar slice ga hech qanday qiymat berilmasa to'liq stringni qaytaradi

//==============================================================================================================

//substring() - ushbu metod ham slice kabi asosiy stringning malum bir qismini kesib olib
// yangi strin sifatida qaytaradi

// let text = "Jonibek Orifjonov";
// // let res = console.log(text.substring(0, 12)); // Jonibek Orif

// //Lekin substringning slice() dan bir necha farqlari bor

// //1) substingga manfiy qiymat berilsa uni 0 sifatida qabul qiladi, slice() esa manfiy qiymatni string oxiridan xisoblaydi
// console.log(text.substring(-1, 10)); // 0 dan 10 gacha oladi
// console.log(text.substring(1, -10)); // 0 - qiymatni o'zini oladi

// // 2) substringda birinchi qiymat ikkinchisidan katta bo'lsa uni avtomatik o'zgartirib oladi, slice() esan bo'sh string qaytaradi
// console.log(text.substring(6, 2)); // substring buni avtomatik (2,6) sifatida qabul qiladi
// console.log(text.slice(6, 2)); // bo'sh string qaytadi

// ====================================================================================================
// substr() - bu metod ikkita parametr qabul qiladi, birinchi parametr nechinchi indexdan kesib olish boshlanishini belgilaydi,
//ikkinchisi nechta belgini kesib olishni belgilaydi
// let text = "Jonibek Orifjonov";
// console.log(text.substr(2, 5)); // nibek - 2-indexdan boshlab 5 ta xarf kesib oladi

//ESLATMA: substr() metodi deprecated bo'lgan

//======================================================================================
// trim() - bu metod stingning boshida yoki oxirida white space (bo'sh joy) lar bo'lsa tozalab stringni o'zini qaytaradi

// let text = "                      Jonibek Orifjonov";
// console.log(text.trim());

//trimStart() - string boshidagi bo'sh joylarni chiqarib tashlaydi
//trimEnd() - string oxiridagi bo'sh joylarni chiqarib tashlaydi

// ==============================================================================================

//split() - bu metod malumotlarni arrayga o'tkazish uchun ishlatiladi
//stringni arrayga o'tkazishini ko'rib chiqamiz

// let text = "Jonibek Orifjonov";
// console.log(text.split()); // agar split ning parametriga hech narsa bermasak stringdan bitta array yasab beradi
// // yuqoridagi holatda ['Jonibek Orifjonov'] ko'rinishidagi array xosil bo'ladi

// console.log(text.split("")); // agar splitga parametriga bo'sh qo'shtirnoq berilsa stringning har bitta belgisini arrayga o'tkazadi
// // yuqoridagi xolatda ['J', 'o', 'n', 'i', 'b','e', 'k', ' ', 'O', 'r','i', 'f', 'j', 'o', 'n','o', 'v'] mana shunday array xosil bo'ladi

// //agar splitga qo'shtirnoq ichida bo'sh space bersak split(' ') stringda topilgan bo'sh joylardan bo'lib array yozib beradi
// console.log(text.split(" ")); // ['Jonibek', 'Orifjonov']

// // split ikkinchi parametr ham oladi, ikkinchi parametr maximal nechta bo'lakka ajratilishi mumkinligini ko'rsatadi
// console.log(text.split("o", 2)); //limit berilganda oxirgi limit bo'lingan joydan qolgan qismni tashlab yuboradi

// =========================================================================================
// concat() = bu metod bir stringga bir yoki bir nechta stringlarni qo'shib yangi string qaytaradi

// const allString = str.concat(str1, str2, ...str3n); // syntaxis

// MUHIM = xozirda concat o'rniga + ishorasi bilan yoki backtick lar orqali stringlarni qo'shish qulayroq hamda zamonaviyroqdir

// =============================================================================================================

//valueOf() metodi primitive va object type dagi datalar qiymatini qaytaradi

// const obj = { name: "Jonibek", lastName: "Orifjonov" };

// console.log(obj.valueOf()); // { name: "Jonibek", lastName: "Orifjonov" }

// let str = "matn";

// console.log(str.valueOf()); // matn

// // valueOf() metodi oddiy datalarni qiymatini qaytarganda ularda hech qanday o'zgarish bo'lmaydi
// // qaysi xollarda valueOf() ni ishlatish samarali:
// // qachonki biz constructor bilan elon qilingan datalarni qiymatini chiqarmoqchi bo'lsak

// const str1 = new String("Jonibek Orifjonov");
// console.log(str1); // [String: 'Jonibek Orifjonov'] degan qiymat qaytadi
// // agar bizga konstructor bilan elon qilingan datalarni sof value si kerak bo'lsa valueOf() dan foydalanishimiz mumkin

// console.log(str1.valueOf()); // Jonibek Orifjonov

//=============================================================================================
//replace() - ushbu metod o'z nomidan kelib chiqib, string ichidagi biror qiymatni boshqa bir qiymatga almashtirish uchun ishlatiladi
// almashtirish kerak bo'lgan qiymat string da bir nechta uchrasa birinchi topganini almashtiradi
// replace ikkita parametr oladi replace(par1, par2)
//birinchi parametr biz o'zgartirmoqchi bo'lgan string bo'lagi
//ikkichi parametr qaysi qiymatga o'zgarishi kerakligi

// let str = "Jonibek Orijfonov";

// console.log(str.replace("Orijfonov", "Oripov")); //Jonibek Oripov

// //replace metodi eski stringni o'zgartirmaydi yangi string qaytaradi

// //replaceAll() - almashtirishga berilgan qiymatni stringni ichida nechta topsa hammasini almashtiradi

// console.log(str.)

// =================================================================================================

//match(regex) -ushbu metod sting ichidan ma'lum bir bo'lakni topib uni array sifatida qaytaradi
//parametr sifatida oddiy so'zdan yoki regular expressiondan fooydalanish mumkin

// let text = "Men Javascript va Java o'rganyapman";

// console.log(text.match("Java"));
// console.log(text.match(/Java/));

//match da natija sifatida qidirilgan bo'lak, uning indexi, qaysi contextdan qidirilgani, va qaysi guruhga mansub ekanligi haqida
// arrayda ma'lumot qaytaradi, lekin arrayning length i 1 ga teng bo'ladi.
//agar stringda qidirilayotgan bo'lak bir nechtani tashkil etsa match faqat birinchi topganini malumotlari bilan qaytaradi

// regex g flag dan foydalanib stringdagi qidirilayotgan barcha bo'laklarni qaytarish mumkin
// console.log(text.match(/Java/g));
//bunda stringda nechta Java birikmasi ishtirok etgan bo'lsa hammasini array ko'rinishida qaytaradi
//lekin bir nechta bo'lakni aniqlaganda bitta bo'lak aniqlagandagi kabi qo'shimcha ma'lumotlarni chiqarmaydi, faqat qidirilganlardan iborat arrayni qaytaradi
// bunda arrayning lengthi qidiruvda topilganlarga teng bo'ladi yani bu orqali matnni ichida qidiriluvchilar qancha ekanini topish mumkin

//matchAll() - bu metod match() ning akasi hisoblanadi, yani stringda qidiriluvchilarning har birini ma'lumotini to'liq qaytaradi

// Lekin matchAll bir nechta jihatlari bilan matchdan farq qiladi va murakkabroq
// 1) matchAll() parametr sifatida faqat regex qabul qiladi
// 2) parametrdagi regex da g flag bo'lishi shart bo'lmasa hato qaytaradi
// 3) matchAll() array qaytarmaydi. U har bir qidiriluvchi haqida to'liq ma'lumot beruvchi iterator qaytaradi
// 4) matchAll() dan qaytgan datani ko'rish uchun qaytgan datani o'zgaruvchiga yuklab uni iteratsiya qilish kerak
// let result = text.matchAll(/Java/g);

// for (let match of result) {
//   console.log(match);
// }

//Quyidagidan faqat harflarni olib, katta harflar bilan qaytaradigan funksiyani yoz:

// const str = "Hello 123! Welcome_45.";

// const toUpper = (str) => {
//   let result = str.replace(/[^a-zA-Z]/g, "");
//   return result.toUpperCase();
// };

// console.log(toUpper(str));

// let input = "salom";

// const reverseWord = (input) => {
//   return input.split("").reverse().join("");
// };

// console.log(reverseWord(input));

// Foydalanuvchi kiritgan so'zdan (a, e, i, o, u) unli harflarni olib tashlaydigan funksiya yoz.

// let input = "salom";
// const faqatUndosh = (input) => {
//   return input.replace(/[aeiou]/g, "");
// };

// console.log(faqatUndosh(input));

// String palindrom ekanligini tekshiradigan funksiya yoz.
// (Palindrom — teskari o'qilganda ham bir xil bo'lgan so'z. Masalan, "anna", "level", "madam".)

// let text = "level";

// const palindromWords = (text) => {
//   let text1 = text.split("").reverse().join("");
//   if (text == text1) return true;
//   else return false;
// };

// const palindromWords2 = (text) => {
//   return text === text.split("").reverse().join("");
// };

// console.log(palindromWords(text));

//Berilgan jumlada har bir so'zning bosh harfini katta qiladigan funksiya yoz.

// let text = "salom dunyo";

// const upperCase = (text) => {
//   return text
//     .split(" ")
//     .map((word) => {
//       return word[0].toUpperCase() + word.slice(1);
//     })
//     .join(" ");
// };

// console.log(upperCase(text));

//Berilgan stringda necha marta a harfi qatnashganini top.

// let text = "salom alik";

//1-usul
// const countLetter = (text) => {
//   let arr = text.match(/a/g);
//   return arr.length;
// };

// console.log(countLetter(text));

//2-usul

// let count = 0;
// for (let i in text) {
//   if (text[i] === "a") count += 1;
// }

// console.log(count);

//3-usul

// let count = 0;
// let i = 0;

// while (i < text.length) {
//   if (text[i] === "a") count += 1;
//   i++;
// }

// console.log(count);

// Berilgan so'zni 3 marta ketma-ket chiqaradigan funksiya yozish kerak.

// let text = "salom";

// // const threeCopy = (text) => {
// //   return text + text + text
// // }

// // console.log(threeCopy(text));

// //2-usul

// console.log(text.repeat(3));

//Berilgan jumlani qabul qilib, undagi eng uzun so'zni topish va qaytarish kerak. Agar bir nechta eng uzun so'z bo'lsa, ulardan birini qaytarish mumkin.

// const longWord = (text) => {
//   let res = text.split(" ");
//   let i = 0;
//   let result = "";
//   for (let j of res) {
//     if (i < j.length) {
//       i = j.length;
//       result = j;
//     }
//   }
//   console.log(result);
// };

// let text = "a aa aaa aaaa";

// longWord(text);

//replace ni ishlatmasdan uni funksiyasini bajaruvchi funksiya yozish

// const replaceWords = (str, word, rep) => {
//   let arrs = str.split(" ");
//   newArr = [];
//   for (let arr of arrs) {
//     if (arr === word) {
//       arr = rep;
//     }
//     newArr.push(arr);
//   }

//   return newArr.join(" ");
// };

// let string = "web dasturlash web soha";

// console.log(replaceWords(string, "web", "Web"));
