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
