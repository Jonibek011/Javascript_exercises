// callback function bu - boshqa bir funksiyaga argument sifatida berilgan funksiya
//callback funksiyalar asosan asinxron dasturlashda xususan callback hell da ishlatiladi

function greet(name) {
  console.log(`Hello ${name}!`);
}

function processUserInput(callback) {
  let name = "Ali";
  callback(name);
}

processUserInput(greet);

//HIgher order function bu - paramrtr sifatida boshqa bir funksiyani qabul qiluvchi funksiya
