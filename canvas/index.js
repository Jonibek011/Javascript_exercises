//🧩 1. Canvas nima?
//HTML dagi <canvas> elementi sahifada rasm chizish uchun joy ajratadi. O'zidan o'zi hech narsa chizmaydi - chizish faqat JavaScript orqali amalga oshiriladi
//<canvas id="demo" width="400" height="300"></canvas>
// id="demo" - keyinchalik javascript orqali murojaat qilish uchun
//whidth height - chizish maydoni o'lchami

// 🔧 2. Kontekst olish – JavaScript bilan ishlash
//canvas da chizish uchun birinchi uning kontextini olish kerak

const canvas = document.getElementById("demo");
const cnx = canvas.getContext("2d");
//bu yerda cnx barcha chizish amallarini bajaradigan asosiy obyekt

//✍️ 3. Asosiy chizish metodlari (2D)

//🔸 To‘g‘ri to‘rtburchak (rectangle)
// cnx.fillStyle = "green";
// cnx.fillRect(100, 10, 100, 50);

//chegarasi bor to'rtburchak
cnx.strokeStyle = "blue"; //rang
cnx.strokeRect(10, 100, 100, 50); // (x,y,width, height)

//To'g'ri to'rtburchakni o'chirish
cnx.clearRect(100, 10, 100, 50);

//🔵 4. Aylana (circle)
cnx.beginPath();
cnx.arc(150, 100, 20, 0, Math.PI * 2); //x, y, radius, startAngle, endAngle
cnx.fillStyle = "red";
cnx.fill();

// ✍️ 5. Chiziq (line)
cnx.beginPath();
cnx.moveTo(10, 300); // Boshlanish nuqtasi
cnx.lineTo(150, 300); // Tugash nuqtasi
cnx.strokeStyle = "red";
cnx.stroke();

// 🧠 6. Matn yozish
cnx.font = "20px Arial";
cnx.fillStyle = "purple";
cnx.fillText("Salom, Canvas!", 200, 350); // (text, x, y)
