//Closure - bu bir funksiyaning ichida boshqa funksiyaning chaqirilishi yoki return qilinishi
//ichkarida chaqirilgan funksiya closure deyiladi

//bunda ichkarida chaqirilgan funksiya tashqi funksiya o'zgaruvchilariga kirish imkoniga ega bo'ladi
// yani tashqi funksiya chaqirib bo'lingan bo'lsa ham ichki funksiya undagi o'zgaruvchi qiymatini saqlab qoladi

function makeCounter() {
  let count = 0;

  return function innerCounter() {
    count++;
    return count;
  };
}

const counter1 = makeCounter();
// console.log(counter1()); //1
// console.log(counter1()); //2

//Bu yerda innerCounter makeCounter ning count o'zgaruvchisini o'ziga olyapti
// va har chaqirilganda count ning oldingi qiymatini saqlab qolyapti

//Quyidagi createSecretHolder(secret) funksiyasi chaqirilganda, quyidagi imkoniyatga ega bo‘lgan obyekt qaytarilsin:

// const obj = createSecretHolder(123);
// obj.getSecret(); // 123
// obj.setSecret(456);
// obj.getSecret(); // 456

const createSecretHolder = (secret) => {
  let _secret = secret;
  return {
    getSecret: function () {
      console.log(_secret);
    },
    setSecret: function (newSecret) {
      _secret = newSecret;
    },
  };
};

// const obj = createSecretHolder(123);
// obj.getSecret(); // 123
// obj.setSecret(456);
// obj.getSecret(); // 456

//Bu funksiya bir sonni argument sifatida qabul qiladi va shu songa ko‘paytiruvchi funksiyani qaytaradi.
const makeMultiplier = (multiplier) => {
  return function (num) {
    return num * multiplier;
  };
};

const multiplyBy3 = makeMultiplier(3);
console.log(multiplyBy3(5));
