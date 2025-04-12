// Javascript 1995 yilda Brendan Each tomonidan yaratilgan. 1997 yildan boshlab o'zining engine ini ishlab chiqqandan keyin
//Ecmascript deb atay boshlangan.
//Javascript codlarni ishlashini terminalda, consoleda, online compilerlarda ko'rish mumkin
// Javascript single sread language hisoblanadi, ya'ni bir vaqtning o'zida bitta amaliyotni bajara oladi. va yuqoridan pastga qarab
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

var sum = 0;
for (i = 1; i < 10; i++) {
  console.log((sum += i));
  if (sum === 10) break;
}
