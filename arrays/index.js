let arr = [
  1,
  2,
  3,
  "webbrain",
  function () {},
  true,
  false,
  null,
  undefined,
  "olma",
];

// arrayga access qilish
console.log(arr[0]); //1
console.log(arr[arr.length - 1]); //olma
console.log(arr[-1]); //undefined - arrayga to'g'ridan to'g'ri manfiy son bilan murojat qilish mumkin emas

//====================================================================================
//at() - arrayda ham huddi stringdagi kabi ishlaydi, berilgan indexdagi qiymatni qaytaradi

console.log(arr.at(-1)); //olma

//============================================================================
