// Generator funksiya - bu javascript funksiyalarining bir turi bo'lib, u bajarilishini istalgan vaqtda  to'xtatib, keyin esa qayta davom ettirish imkonini beradi

//Oddiy funksiyalar boshidan oxirigacha to'liq bajariladi,
//generatorlar esa pauzali ishlaydi: ular yield operatori yordamida bajarilishini to'xtatadi va keyinchalik davom ettiradi

//Sintaksis
function* generatorFunction() {
  yield 1;
  yield 2;
  yield 3;
}

//etibor bering: function * deb yoziladi
//generator funksiyani chaqirish iterator obyektni qaytaradi

const gen = generatorFunction();
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());

//yani funksiya yield operatori bilan 3 qismga bo'lib yozilsa
// funksiya uch marta chaqirilsa har bir yieldga yozilgan qism obyect sifatida qaytadi
//to'rtinchi marta chaqirilganda esa undefined qaytadi.
