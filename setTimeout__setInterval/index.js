//SetTimeout  - bu funksiya belgilangan vaqtdan keyin funksiyani 1 marta chaqiradi

//Syntaxis setTimeout(function, delayInMilliseconds, arg1, arg2...)

setTimeout(() => {
  console.log("3 soniyadan so'ng chiqadi");
}, 3000);

//SetInterval -- bu funksiya belgilangan oraliqda funksiyani takror takror bajaradi
//Syntaxis setInterval(function, intervalInMilliseconds, arg1, arg2)
setInterval(() => {
  console.log("Har 2 soniyada chiqadi");
}, 2000);

//To'xtatish uchun

// clearTimeout(timeoutId) - setTimeout ni bekor qiladi
//clearInterval(intervalId) - setInterval ni bekor qiladi

const id = setInterval(() => {
  console.log("salom");
}, 1000);

setTimeout(() => {
  clearInterval(id); //5 soniyadan keyin to'xtaydi
}, 5000);
