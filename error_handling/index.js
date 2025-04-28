// try ...catch

//try blokida xatolik yuz berishi mumkin bo'lgan kod yoziladi
// catch blokida xatolik ushlanib unga javob qaytariladi

let boolean = true;

// try {
//   if (boolean) {
//     console.log("say hello!");
//   } else {
//     throw new Error();
//   }
// } catch (error) {
//   console.log("smth went wrong");
// }
// trow orqali hatolikni catch blokiga uzatish mumkin

//finally bloki har qanday xolatda ham ishlaydi, yani xatolik yuz berishidan qatiy nazar

// try {
//   if (boolean) {
//     console.log("say hello!");
//   } else {
//     throw new Error();
//   }
// } catch (error) {
//   console.log("smth went wrong");
// } finally {
//   console.log(
//     "xar qanday xolatda ham ishlaydi, xatolik yuz bersa ham yuz bermasa ham"
//   );
// }

// Quyidagi kodni yozing, foydalanuvchi yoshi tekshiriladi. Agar yosh 18 dan kichik bo‘lsa, xatolikni yuzaga keltiring.
function checkUserAge(age) {
  try {
    if (age >= 18) {
      console.log("ruxsat beriladi");
    } else {
      throw new Error("siz 18 ga to'lmagansiz");
    }
  } catch (error) {
    console.log(error.message);
  }
}

// checkUserAge(16); // Xatolik yuzaga kelsin

// Quyidagi kodni yozing, foydalanuvchi kiritgan qiymatni parseInt yordamida raqamga aylantiring. Agar foydalanuvchi raqam kiritmasa,
//  xatolikni tutib uni konsolga chiqarish uchun try...catch ishlating.

function parseUserInput(input) {
  try {
    const result = parseInt(input);
    if (isNaN(result)) {
      throw new Error(`${input} number emas`);
    } else {
      console.log("siz number kiritdingiz");
    }
  } catch (error) {
    console.log(error.message);
  }
}

// parseUserInput("abc"); // Xatolik yuzaga kelsin

//Agar foydalanuvchi to‘g‘ri email formatini kiritmasa, throw yordamida xatolik yarating.

function validateEmail(email) {
  try {
    if (email.endsWith("@email.com")) {
      console.log("to'g'ri email kiritildi");
    } else {
      throw new Error("noto'g'ri email kiritildi");
    }
  } catch (err) {
    console.log(err.message);
  }
}

validateEmail("invalid-email"); // Xatolik yuzaga kelsin
