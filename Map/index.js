//Map - bu kalit va qiymat juftliklarini saqlaydigan kolleksiya
//key lar har qanday turdagi malumot bo'lishi mumkin

//========== Mapning yasalishi =========================

// const newMap = new Map() // bu bo'sh map to'plamini yaratadi

//mapga boshlang'ich qiymat ham berilishi mumkin, lekin kalit va qiymatlar array ichida array shaklida beriladi

const newMap = new Map([
  ["name", "Ali"],
  ["age", 3],
  ["isStudend", false],
]);

console.log(newMap);
