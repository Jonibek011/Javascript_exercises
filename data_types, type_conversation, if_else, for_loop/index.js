// Javascript 1995 yilda Brendan Each tomonidan yaratilgan. 1997 yildan boshlab o'zining engine ini ishlab chiqqandan keyin
//Ecmascript deb atay boshlangan.
//Javascript codlarni ishlashini terminalda, consoleda, online compilerlarda ko'rish mumkin
// Javascript single thread language hisoblanadi, ya'ni bir vaqtning o'zida bitta amaliyotni bajara oladi. va yuqoridan pastga qarab
// ketma-ketlik bilan o'qiydi.
// o'zgaruvchilar - malumotni o'zida saqlash uchun kerak bo'ladi
// agar biz mavjud bo'lmagan o'zgaruchini chaqirsak text is not defined xatosi chiqadi
//aksincha agar mavjud bo'lgan lekin qiymat berilmagan o'zgaruvchini chaqirsak undifined chiqadi

// let text;

// console.log(text);
// agar o'zgaruvchi elon qilinishidan oldin uni chaqirsak Cannot access initialization chiqadi chiqadi
// console.log(text);
// let text = "text";

// let var const

// let - xotiradan kam joy egallaydi yani, kerak bo'lgan vaqtda ishlaydi va boshqa paytda
// xotiradagi joyini olib tashlaydi

// const - o'zgarmas o'zgaruvchi

//======= Data types ================
// js da 8 ta data typelar bor
// 1.Primitive(string, number, bigInt, null, undefined, simboll, boolean)
// 2.non-primitive - (objects, arrays, functions )
// numberga tegishli eng katta raqam - 9007199254740992, bundan katta raqamlarni bigInt oladi
//bigInt ning belgisi n hisoblanadi
// console.log(9007199254740992n + 1n) - bigInt shu tarzda yaratiladi

// undefined - o'zgaruvchiga qiymat biriktirilmaganligini bildiradi, data turi primitive tipi undefined
// null - o'zgaruvchining ichi bo'sh ekanligini bildiradi, data turi primitive lekin tipi object
// null va undefined larni qiymati tenglansa ture qaytadi
// console.log(null == undefifned) : true
// lekin ularni data typelari tenglansa false qaytadi
// console.log(null === undefined) : false

//null boshlang'ich qiymat uchun ideal varyant xisoblanadi, sababi keyin xoxlagan data type dagi qiymat bilan o'zgartirsa bo'ladi
// console.log(null + 1);  : javob 1
// console.log(undefined + 1); : javob NaN

// console.log(2 ** (2 + 1) / 2);
// console.log(1 !== "0" && true && "hey");
// console.log(1 !== "0" && false && "hey");
// console.log(!(1 !== "0" && true && "hey"));

// FOR

// for (let i = 1; i < 10; i = i + 1) {
//   console.log(i);
// }

// for (i = 1; i < 10; i++) {
//   console.log(i);
// }

// for (i = 0; i < 10; ++i) {
//   console.log(i);
// }

// var sum = 0;
// for (i = 1; i < 10; i++) {
//   console.log((sum += i));
//   if (sum === 10) break;
// }

// for (i = 1; i < 10; i++) {
//   console.log(i);
//   i += i;
// }

// for (i = 1; i < 10; ) {
//   console.log(i);
//   i += i;
// }

// for (i = 1; i < 10; i++) {
//   if (i % 3 === 0) {
//     console.log(i);
//   } else continue;
// }

// for (i = 1; i < 10; i++) {
//   if (i % 3 === 0) continue;
//   console.log(i);
// }

// for (i = 1; i < 10; ) {  //Infinite loop
//   if (i % 3 === 0) continue;
//   console.log(i);
//   i++;
// }

// for (i = 2; i < 10; i++) {
//   console.log(`${i} lik karra jadvali`);
//   for (j = 1; j <= 10; j++) {
//     console.log(`${i} x ${j} = ${i * j}`);
//   }
//   console.log(" ");
// }

//for loopda ichki loop orqali tashqi loopga ham ta'sir o'tkazish uchun
//label lardan foydalaniladi, Yani:

// outer: for (i = 1; i <= 10; i += 3) {
//   //bu yerda outer: label hisoblanadi
//   inner: for (j = 1; j <= 10; j += 3) {
//     //bu yerda inner: label hisoblanadi. inner ni berish ixtiyoriy
//     if (i === 4) break;
//     console.log(j, "j");
//   }
//   console.log(i, "(i)");
// }

//Yuqoridagi misolda ichki loopda agar tashqi loop 4 ga yetganda
//jarayon to'xtashi kerak, lekin ichki loopda ishlatilgan break
//jarayonni bir marta to'xtatadi va ichki loop bir marta aylanani o'tkazib
//yuboradi va jarayon davom etaveradi.
// agar ichki loopda turib tashqi loopni batamom to'xtatmoqchi bo'lsak
//quyidagicha kod yoziladi

// outer: for (i = 1; i <= 10; i += 3) {
//   //bu yerda outer: label hisoblanadi
//   inner: for (j = 1; j <= 10; j += 3) {
//     //bu yerda inner: label hisoblanadi. inner ni berish ixtiyoriy
//     if (i === 4) break outer; //tashqi loopning labeli ko'rsatiladi
//     console.log(j, "j");
//   }
//   console.log(i, "(i)");
// }

// outer: for (i = 1; i <= 10; i += 3) {
//   //bu yerda outer: label hisoblanadi
//   if (i === 4) break;
//   inner: for (j = 1; j <= 10; j += 3) {
//     //bu yerda inner: label hisoblanadi. inner ni berish ixtiyoriy

//     console.log(j, "j");
//   }
//   console.log(i, "(i)");
// }
// let browser = "Safari";
// switch (browser) {
//   case "Edge":
//     console.log("You've got the Edge");
//     break;
//   case "Chrome":
//   case "Firefox":
//   case "Safari":
//   case "Opera":
//     console.log("Ok we support these browser too");
//     break;
//   default:
//     console.log("We hope that this page looks ok!");
// }
