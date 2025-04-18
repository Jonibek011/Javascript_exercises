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
// let str1 = "aplle";
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
