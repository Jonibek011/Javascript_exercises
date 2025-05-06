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

class Animal {
  // ota class
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise`);
  }
}

class Dog extends Animal {
  //bola class
  speak() {
    console.log(`${this.name} barks`);
  }

  dringk() {
    console.log(`${this.name} drinks milk`);
  }
}

const rex = new Dog("Rex");

rex.speak(); // Rex barks
rex.dringk(); // Rex drinks milk
