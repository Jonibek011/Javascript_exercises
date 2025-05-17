//DOM - Document Object Model - bu web sahifaning tuzilmasining objectga aylantirilgan modeli bo'lib
// JavaScript orqali HTML va CSS elementlarini o'zgartirish, o'chirish yoki yaratish imkonini beradi
//Yani HTML faylni Javascript tilida boshqarish uchun DOM dan foydalaniladi

//DOM ning asosiy tushunchalari
//1.document object -- domdagi eng yuqori darajadagi object
//document orqali sahifadagi barcha elementlarga kirish mumkin
console.log(document); // butun HTML faylni beradi

//2.Elementlarni tanlash(Selecting elements)
// getElementById - elementni id orqali oladi
const title = document.getElementById("title");
//getElementsByClassName - elementni className orqali tanlab oladi
const items = document.getElementsByClassName("item");
//getElementByTagName - tag name orqali tanlab oladi
const paragraf = document.getElementsByTagName("p");
//querySelector(birinchi mos kelganini oladi)
const firstItem = document.querySelector(".item");
//querySelectorAll (hamma mos kelganlarini oladi)
const allItems = document.querySelectorAll(".item");

//3. Element ustida amallar (DOM maipulation)
// => text yoki html ni o'zgartirish

title.textContent = "Yangi sarlavha"; //Faqat matn
title.innerHTML = "<i>Yangi sarlavha</i>"; //HTML bilan

//=> yangi element yaratish va qo'shish
const newP = document.createElement("p");
newP.textContent = "Yangi paragraf";
document.body.appendChild(newP);

//=>elementni o'chirish
const el = document.getElementById("title");
el.remove(); // HTML dan olib tashlaydi

//=> class qo'shish va olib tashlash
el.classList.add("yangi-class");
el.classList.remove("eski-class");
el.classList.toggle("theme");
