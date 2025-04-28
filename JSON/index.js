//JSON - JavaScript Object Notation

//JSON - malumotlarni matn ko'rinishida saqlash va uzatish formati

//JSON da malumotlar quyidagicha ko'rinadi
// {
//     "name": "Ali",
//     "age":25,
//     "isStudent":true
// }

//JSON da faqat string, boolean, array, object, number va null qiymatlari bo'lishi mumkin
//Funksiya, undefined, symbol tipidagi qiymatlar JSON  ga kirmaydi

//JSON.stringify() - javascript objectni JSON matnga aylantiradi

const user = {
  name: "Ali",
  age: 25,
  isStudend: true,
};

const JSONuser = JSON.stringify(user);
console.log(JSONuser);

//JSON.parse() - JSON matndan yana javascript object yaratadi
const parseUser = JSON.parse(JSONuser);
console.log(parseUser);

//JSON ga o'tkazilishi kerak bo'lgan objectda agar function, undefined symbol bolsa JSON ularni
//shunchaki etiborsiz qoldiradi va qolgan malumotlarni JSON matn ga o'giradi
//Function, Symbol, undefined -> JSON da YO'QOLIB ketadi.

const person = {
  name: "Ali",
  age: 25,
  isStudent: false,
};

const JSONperson = JSON.stringify(person);
console.log(JSONperson);
console.log(JSON.parse(JSONperson));
