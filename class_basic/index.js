//Class - bu obyektlar yaratish uchun shablon. U orqali bir xil husuusiyat va metodlarga ega obyektlar yartamiz

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  fullInfo() {
    console.log(`my name is ${this.name} and I'm ${this.age} years old`);
  }
}

const user = new Person("Jonibek", 28);

// console.log(user); //Person { name: 'Jonibek', age: 28 }
// user.fullInfo(); //my name is Jonibek and I'm 28 years old

//Asosiy componentlar
//A) constrtuctor metodi
// --class yaratilganda birinchi ishga tushadigan metod
//--Objectga hususiyatlar (this.name) berish uchun ishlatiladi

//B) Metodlar
//--class ichida yozilgan funksiyalar avtomatik prototypega qo'shiladi

//========================================================
//Class lar orqali meros olish
//Asosiy tushuncha: extends va super
// extends - bir class boshqa class dan meros olishini bildiradi
// super - parent classga murojaat qilish uchun ishlatiladi

// class Animal {
//   // ota class
//   constructor(name) {
//     this.name = name;
//   }

//   speak() {
//     console.log(`${this.name} makes a noise`);
//   }
// }

// class Dog extends Animal {
//   //bola class
//   speak() {
//     console.log(`${this.name} barks`);
//   }

//   dringk() {
//     console.log(`${this.name} drinks milk`);
//   }
// }

// const rex = new Dog("Rex");

// rex.speak(); // Rex barks
// rex.dringk(); // Rex drinks milk

//super() ota classning constructorini chaqiradi
//odatda constructor ichida birinchi qatorda yoziladi

// class Animal {
//   constructor(name) {
//     this.name = name;
//   }
// }

// class Cat extends Animal {
//   constructor(name, color) {
//     super(name); // ota class ga name uzatyapti
//     this.color = color; // o'zining yangi hususiyati
//   }

//   describe() {
//     console.log(`${this.name} is a ${this.color} cat.`);
//   }
// }

// const cat = new Cat("Mosh", "kulrang");
// cat.describe();

//superni ishlatish qachon foyda beradi
// bizda bir class bor

class Students {
  constructor(name, lastName, age, className) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
    this.className = className;
  }

  //some code
}

// endi bizga huddi shu yuqoridagi classning constructor parametri singari xossali klass kerak lekin bir ikkita qo'shimchalari bor
//misol uchun middleName va hobby kabi

class Talaba extends Students {
  constructor(name, lastName, age, className, middleName, hobby) {
    super(name, lastName, age, className);
    this.middleName = middleName;
    this.hobby = hobby;
  }

  describe() {
    console.log(
      `${this.lastName} ${this.name} ${this.middleName} ${this.age} yoshda. Bo'sh vaqtida ${this.hobby} bilan shug'ullanadi`
    );
  }
}

const talaba = new Talaba(
  "Jonibek",
  "Orifjonov",
  28,
  "highschool",
  "Baxromjon o'g'li",
  "IT"
);

// talaba.describe();

//this kalit so'zi
// this - bu klassdan yaratilgan obyektning o'zini bildiradi

class Book {
  constructor(title) {
    this.title = title;
  }

  showTitle() {
    console.log(this.title);
  }
}

const b = new Book("Javasctipt");
// b.showTitle() //Javascript

// Metodlar
//Class ichidagi funksiyalarni oddiy yozamiz (function kalit so'zisiz)
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} ovoz chiqaryapti`);
  }
}

const dog = new Animal("It");
// dog.speak() // It ovoz chiqaryapti

//ota classdan metod meros olish

//Class expression
//Class ni let yoki const bilan o'zgaruchiga biriktirish mumkin
const User = class {
  constructor(name) {
    this.name = name;
  }
};

const user1 = new User("Ali");
// console.log(user1.name); //Ali

//Static metodlar va xususiyatlar
//static bilan yozilgan metodlar obyectga emas, classning o'ziga tegishli bo'ladi

class MahtHelper {
  static add(a, b) {
    return a + b;
  }
}

console.log(MahtHelper.add(2, 3)); // 5

//yani metod static kalit so'zi bilan chaqirilsa, u parametrlarni o'zi oladi va classning o'ziga tegishli metod bo'ladi

//Private (yashirin ) xususiyatlar va metodlar # bilan
class BankAccount {
  #balance = 0;

  deposit(amount) {
    this.#balance += amount;
  }

  getBalance() {
    return this.#balance;
  }
}

const acc = new BankAccount();
acc.deposit(1000);

// console.log(acc.getBalance()); // 1000
// console.log(acc.#balance); ❌ Xatolik beradi (yashirin)

// Getter va Setterlar
//bu metodlar orqali xususiyatlarni o'qish yoki o'zgartirishni nazorat qilish mumkin

class User1 {
  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name.toUpperCase();
  }

  set name(newName) {
    this._name = newName;
  }
}

const you = new User1("Ali");
console.log(you.name); //ALI

you.name = "vali";
console.log(you.name); //VALI
