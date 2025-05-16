// Generator funksiya - bu javascript funksiyalarining bir turi bo'lib, u bajarilishini istalgan vaqtda  to'xtatib, keyin esa qayta davom ettirish imkonini beradi

//Oddiy funksiyalar boshidan oxirigacha to'liq bajariladi,
//generatorlar esa pauzali ishlaydi: ular yield operatori yordamida bajarilishini to'xtatadi va keyinchalik davom ettiradi

//Sintaksis
// function* generatorFunction() {
//   yield 1;
//   yield 2;
//   yield 3;
// }

//etibor bering: function * deb yoziladi
//generator funksiyani chaqirish iterator obyektni qaytaradi

// const gen = generatorFunction();
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());

//yani funksiya yield operatori bilan 3 qismga bo'lib yozilsa
// funksiya uch marta chaqirilsa har bir yieldga yozilgan qism obyect sifatida qaytadi
//to'rtinchi marta chaqirilganda esa undefined qaytadi.

//yield nima?
//yield -bu generator funksiyasi ichida ishlatiladigan maxsus operator bo'lib, u qiymatni tashqariga uzatadi va bajarilishni to'xtatadi
// function* fruitGenerator() {
//   yield "Apple";
//   yield "Banana";
//   yield "Cherry";
// }

// const fruits = fruitGenerator();
// console.log(fruits.next()); //{ value: 'Apple', done: false }
// console.log(fruits.next().value); //Apple
// console.log(fruits.next().value); // Banana

//Done nima?
//har bir nex() chaqirig'i quyidagi objectni qaytaradi:
// {value:..., done: true/false}
// value - yield chaqirilgan qiymat
// done - generator tugaganmi yoki yo'qmi (true bolsa -generator oxiriga yetgan)

//Generatorlarni for....of bilan ishlatish
function* countToThree() {
  yield 1;
  yield 2;
  yield 3;
}

for (count of countToThree()) {
  console.log(count);
}

//demak generator funksiyalarni for of bilan loop qilganimizda uni next() metodini chaqirishimiz shart emas

//Generator funksiyasi ichida yield faqat qiymatni tashqariga chiqarmaydi
//balki tashqaridan qiymat ham qabul qilishi mumkin

// function* maGen(){
//   const x = yield 'ber biror son'; //tashqaridan bu yerga qiymat keladi
//   console.log("Qabul qilingan qiymat: ", x)
// }
//bu yerda yield biror o'zgaruvchiga tenglansa python dagi input kabi ishlarkan va next() ga kiritilgan qiymat ana shu o'zgaruvchiga teng bo'larkan
//next() ga qiymat uzatish mumkin. buu qiymat yield ifodasi bo'lib, u avvalgi yield ni bajarib, keyingi qiymatga uzatiladi
// function* quiz() {
//   const answer = yield "2+2=?";
//   console.log("User answered: ", answer);
// }

// const q = quiz();
// console.log(q.next().value); // '2+2=?'
// q.next(4); //user answered: 4

// Generator ichida return
//Agar siz generator ichida return qilsangiz, u generatorni to'xtatadi
function* myGen() {
  yield 1;
  return 2; // generator tugaydi
  yield 3; //bu ishlamaydi
}

const g = myGen();
console.log(g.next()); //{ value: 1, done: false }
console.log(g.next()); //{ value: 2, done: true }
console.log(g.next()); //{ value: undefined, done: true }

//etiborli tomoni agar return berilmasa oxirgi yield ni bajarganda ham done false bo'ladi
//oxirgi yieldni bajargandan keyin yana chaqirilsa keyin done true bo'ladi
// return da esa return qilingan qiymatni o'zida done true bo'larkan
