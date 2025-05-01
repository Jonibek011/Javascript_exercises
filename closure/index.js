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
console.log(counter1()); //1
console.log(counter1()); //2

//Bu yerda innerCounter makeCounter ning count o'zgaruvchisini o'ziga olyapti
// va har chaqirilganda count ning oldingi qiymatini saqlab qolyapti
