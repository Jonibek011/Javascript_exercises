//DOM - Document Object Model - bu web sahifaning tuzilmasining objectga aylantirilgan modeli bo'lib
// JavaScript orqali HTML va CSS elementlarini o'zgartirish, o'chirish yoki yaratish imkonini beradi
//Yani HTML faylni Javascript tilida boshqarish uchun DOM dan foydalaniladi

//DOM ning asosiy tushunchalari
//1.document object -- domdagi eng yuqori darajadagi object
//document orqali sahifadagi barcha elementlarga kirish mumkin
// console.log(document); // butun HTML faylni beradi

//2.Elementlarni tanlash(Selecting elements)
// getElementById - elementni id orqali oladi
// const title = document.getElementById("title");
// //getElementsByClassName - elementni className orqali tanlab oladi
// const items = document.getElementsByClassName("item");
// //getElementByTagName - tag name orqali tanlab oladi
// const paragraf = document.getElementsByTagName("p");
// //querySelector(birinchi mos kelganini oladi)
// const firstItem = document.querySelector(".item");
// //querySelectorAll (hamma mos kelganlarini oladi)
// const allItems = document.querySelectorAll(".item");

// //3. Element ustida amallar (DOM maipulation)
// // => text yoki html ni o'zgartirish

// title.textContent = "Yangi sarlavha"; //Faqat matn
// title.innerHTML = "<i>Yangi sarlavha</i>"; //HTML bilan

// //=> yangi element yaratish va qo'shish
// const newP = document.createElement("p");
// newP.textContent = "Yangi paragraf";
// document.body.appendChild(newP);

// //=>elementni o'chirish
// const el = document.getElementById("title");
// el.remove(); // HTML dan olib tashlaydi

// //=> class qo'shish va olib tashlash
// el.classList.add("yangi-class");
// el.classList.remove("eski-class");
// el.classList.toggle("theme");

//4.DOM hodisalari (Events)
//Dom xodisalari orqali foydalanuvchi xarakatlariga javob berish mumkin

//=> addEventListener bilan xodisa ulash
// const btn = document.getElementById("myBtn");

// btn.addEventListener("click", () => {
//   alert("Tugma bosildi");
// });

//5.Element attributlari bilan ishlash

// => olish, o'zgartirish
// const link = document.querySelector("a");
// console.log(link.getAttribute("href")); // https://...
// link.setAttribute("href", "https://example.com"); //o'zgartirish

//=============== ADVANCED DOM =====================================
//DOM dagi har bir element Node hisoblanadi va ularning turi bo'ladi (Element, text, comment)
// const ell = document.getElementById('title')
// console.log(ell.nodeType) // 1 => element

//nodeType metodi orqali node ning turini bilish mumkin
//agar u 1 qaytarsa node turi element node bo'ladi
// 3 qaytarsa Text node
// 8 qaytarsa comment node bo'ladi

//2. ChildNodes vs children
// const el = document.getElementById("title");
// console.log(el.childNodes);
// console.log(el.children);

//childNodes barcha node elementlarini qaytaradi (yani text node, element node va comment node)
//children esa faqat elementlarni qaytaradi

// 3.firstChild, firstElementChild, lastChild, lastElementChild, nexSibling, nextElementSibling, previousSibling, previousElementSibling
// const el = document.getElementById("example");
// console.log(el.firstChild); // birinchi node (xatto text bo'lsa ham)
// console.log(el.firstElementChild); // birinchi element node ni qaytaradi
// console.log(el.lastElementChild);
// console.log(el.nextSibling); // keyingi node
// console.log(el.nextElementSibling); // keyingi element

// shu metodlar orqali ham domni manipulyatisiya qilish mumkin

// el.nextElementSibling.textContent = "Yangi content";
// yoki qandaydir event sodir bo'lganda shu elementning qo'shni elementlarida
//o'zgarish qilmoqchi bo'lsa qo'l keladi

//4. closest (selector) metodi
//bu metod orqali DOM daraxti bo'ylab yuqoriga ko'tarilib, mos selector topiladi
// const button = document.querySelector("button");
// const form = button.closest("form"); //eng yaqin <form/> ni topadi

//5. matches(selector) metodi
//Bu metod biror element berilgan selector ga mos keladimi yoqmi shuni tekshiradi
// if (el.matches('.active')){
//     el.classList.remove('.active')
//     el.nextElementSibling.classList.add('.active')
// }

//6.inserAdjacentHTML() - bu usul DOM ga yangi elementlarni aniq positsiyaga joylashtirish uchun foydalidir
// el.insertAdjacentHTML("beforebegin", "<p>Before</p>"); // element boshlanishidan avva p tegini qo'shadi
// el.insertAdjacentHTML(
//   "afterbegin",
//   "<p>Element boshlangandan keyin contentidan oldin </p>"
// );
// el.insertAdjacentHTML(
//   "beforeend",
//   "<p>Element tugatilishidan oldini contentidan keyin  </p>"
// );
// el.insertAdjacentHTML(
//   "afterend",
//   "<p>Element  tugangandan keyin tashqariga </p>"
// );

//Bundan tashqari insertAdjacentElement hamda insertAdjacentText metodlari ham mavjud
//ular ham insertAdjacentHTML kabi ishlaydi lekin faqat DOM elementi va oddiy matn qo'shadi

//insertAdjacentElement - bu metod HTML kodni qo'shmaydi u DOM elementini yani
//createElement metodi orqali yaratilgan elementni qo'shadi

//Misol:
// let p = document.createElement("p");
// p.textContent = "yangi p tegi yaratildi";

// el.insertAdjacentElement("beforeend", p);

// //insertAdjacentText - shunchaki oddiy text qo'shadi (text node)
// el.insertAdjacentText("afterbegin", "qo'shimcha matn qo'shildi");

//7. DocumentFragment - performens uchun
//DOM ga ko'p element qo'shish kerak bo'lsa har bir qo'shish qayta chizishga olib keladi
//DocumentFragment yordamida bir marta chizishga olib kelish mumkin

// document.addEventListener("DOMContentLoaded", () => {
//   const fragment = document.createDocumentFragment();

//   for (let i = 0; i < 10; i++) {
//     const li = document.createElement("li");
//     li.textContent = `item ${i}`;
//     fragment.appendChild(li);
//   }

//   const list = document.querySelector(".list");
//   if (list) {
//     list.appendChild(fragment);
//   } else {
//     console.log("List topilmadi");
//   }

//   console.log(querySelector(".list"));
// });

// 8. Dataset va data-* attribute lari
//data-* attributi nima - HTML da maxsus attribute lar yaratmoqchi bo'lsangiz, data- bilan
//boshlangan attribute lardan foydalanasiz. Ular foydalanuvchiga ko'rinmaydi
//lekin javascript orqali qulay tarzda o'qish va ishlatish mumkin

//Foydalanish
{
  /* <div id="product" data-id="123" data-name="MacBook" data-price="2499"></div> */
}

//Bu yerda:
//data-id="123" - foydalanuvchi identifikatori
//data-name="MacBook" - maxsulot nomi
//data-price="2499" - maxsulot narxi

//dataset orqali o'qish
// HTML code ga kiritilgan data-* attribute larni javascriptda dataset metodi orqali o'qish mumkin
// const element = document.getElementById("product");
// console.log(element.dataset.id);
// console.log(element.dataset.name);
// console.log(element.dataset.price);

//agar data- dan keyingi qism chiziqcha bilan yozilgan bo'lsa dataset ga u camel-case bo'lib keladi
/* <div data-user-id="123"></div> */
// console.log(el.dataset.userId);

//dataset orqali data- attributiga qiymat ham uzatish mumkin
// el.dataset.price = "1999"; // <div data-price="1999">

// Dataset bilan ishlashdagi foydali imkoniyatlar:
//dataset orqali elementdagi barcha data- attributlarini ko'rish mumkin
// console.log(el.dataset); // Output: { id: "123", name: "MacBook", price: "2499" }

//Amaliy qo'llanish xolatlari
//1.Event delegation (malumot tashish uchun)
{
  /* <ul id="menu">
  <li data-action="sava">Saqlash</li>
  <li data-action="load">Yuklash</li>
</ul> */
}

// document.getElementById("menu").onclick = function (e) {
//   if (e.target.dataset.action) {
//     console.log("Action: ".e.target.dataset.action);
//   }
// };

//2.Dinamik komponentlar yaratishda
{
  /* <button data-id="42" onclick="handleClick(this)">Tanla</button> */
}
// function handleClick(btn) {
//   const userId = btn.dataset.id;
//   console.log("Foydalanuvchi ID: ", userId);
// }

//Ehtiyot bo'lish kerak bo'lgan xolatlar
// 1.Faqat string malumotlar saqlanadi data-price="2999". agar kerak bo'lsa Number() bilan aylantirish mumkin
//2.data- atribut nomlarida faqat ichkina xarflar (a-z), raqamlar(0-9), hamda - bo'lishi kerak
//3.HTML da data-user-id="123"  yozilgan bo'lsa dataset bilan o'qilganda el.dataset.userId deb yoziladi (yani camelCase)
// lekin dataset orqali malumot o'rnatilganda el.dataset.userId = "123" bo'lganda HTML da data-userid="123" bo'ladi (camelCase emas)

//=============================================
//MutationObserver nima?
// MutationObserver - bu javascriptdagi maxsus obyect bo'lib, DOM daraxtidagi o'zgarishlarni avtomatik kuzatadi(node qo'shilishi, atribut o'zgarishi, o'chirilishi va b)
//va tanlangan callback funksiyani ishga tushiradi

// Qachon ishlatiladi
// - elemtn qo'shilganda yoki olib tashlanganda
// - Element ichidagi matn o'zgarganda
// - Atributlar (class, id, data-* va b) o'zgarganda
// - DOM tarkibi dinamik bo'lsa (masalan, chat notification, SPA, real-time dasturlar)

//MutationObserver qanday ishlaydi?
//1.observer yaratiladi
//2.Kuzatiladigan element tanlanadi
//3.Kuzatuv boshlanadi
//4.To'xtatish mumkin

//Syntaxis
// const observer = new MutationObserver({callback})
// observer.observe(targetElement, config)

//callback - o'zgarish bo'lganda bajariladigan funksiya
//targetElement - kuzatilayotgan DOM elementi
//config - nimalarni kuzatish kerakligini aytadi

//Real misol: Matn o'zgarishini kuzatish
//<div id="box">Hello</div>
//<button onclick="changeText()">O'zgartir</button>

// const box = document.getElementById("box");
// const observer = new MutationObserver((mutations) => {
//   mutations.forEach((mutation) => {
//     console.log("DOM o'zgardi: ", mutation);
//   });
// });

// observer.observe(box, {
//   childList: true,
//   characterData: true,
//   subtree: true,
// });

// function changeText() {
//   box.textContent = "Yangi matn";
// }

//Config parametrlari
//childList:true -- elementlar qo'shilishi, o'chirilishini kuzatadi
//attributes:true -- attributlar (class, id...) o'zgarishini kuzatadi
//characterData: true -- Matn (textContent, nodeValue) o'zgarishini kuzatadi
//subtree:true -- Ichki nested elementlar o'zgarishini ham kuzatadi

// const box = document.getElementById("box");

// const observer = new MutationObserver((mutations) => {
//   mutations.forEach(mutation => {
//     console.log("Atribut o‘zgardi:", mutation.attributeName);
//   });
// });

// observer.observe(box, {
//   attributes: true
// });

// function changeClass() {
//   box.className = "new";
// }

// ❌ 8. Observerni to‘xtatish
// observer.disconnect(); // barcha kuzatuvni to'xtatadi

//🧠 9. MutationRecord haqida
//Callback funksiyadagi mutation obyektlari MutatuionRecord tipida boladi
//type - attributes, childList, characterData
//target - o'zgargan element
//addedNodes - yangi qo'shilgan nodelar
//removedNodes - o'chirilgan node lar
//attributeName - o'zgargan attribute nomi
//oldValue - eski qiymat(agar attributeOldValue =true bo'lsa)

//⚠️ Eslatma
//MutationObserver asinxron ishlaydi (callback Event Loop orqali chaqiriladi).
//console.log() datxon chiqmasligi mumkin
// har bir o'zgarish uchun MutationRecord qaytariladi (bir nechta bo'lishi mumkin)

//=============================================================================
// Selection va Range
// Selection - bu foydalanuvchi sichqoncha yoki klaviatura bilan tanlagan matn yoki DOM node larning holati (holati = qayerdan qayergacha)
//window.getSelection() bilan olinadi

//Range - bu DOM ichida boshlanish va tugash nuqtalari bo'yicha aniqlangan xatoliklar bo'lmagan matn oralig'i.
//Selection bir yoki bir nechta range dan iborat bo'ladi
//document.createRange() bilan yaratiladi

//Selection bilan ishlash
//matn tanlanganini olish
const selection = window.getSelection();
console.log(selection.toString());

console.log(selection.anchorNode); // qayerdan boshlanganini
console.log(selection.focusNode); //qayerda tugaganini
selection.removeAllRanges(); // tanlovni tozalash

//Range bilan ishlash
const range = document.createRange();
const el = document.getElementById("myText");

// Elementdagi 0-chi dan boshlab matnni belgilaymiz
range.setStart(el.firstChild, 0);
range.setEnd(el.firstChild, 5); // 5 ta belgigacha

console.log(range.toString()); // Tanlangan matnni chiqaradi

//🧠 12. contenteditable, designMode
//contenteditable - foydalanuvchiga element matnini bevosita o'zgartirish imkonini beradi
// <p contenteditable="true">Bu matnni o'zgartirish mumkin</p>

//document.designMode = "on" - butun dahifani taxrirlanadigan rejimga o'tkazadi
