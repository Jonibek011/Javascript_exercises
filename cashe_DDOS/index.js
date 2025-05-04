//Cashe - bu vaqtincha saqlash joyi bo'lib, kompyuter, server yoki browser tezkorlik bilan kerakli malumotlarni olsih uchun foydalanadi
//Misol: agar siz bir sahifani ochsangiz, browser CSS va JS fayllarni yuklaydi, Keyingi safar bu fayllarni internetdan emas, o'zidagi chashe dan oladi -- bu juda tez ishlaydi

//Cashe turlari
//Browser cashe -- browser HTML, CSS, JS fayllarni saqlaydi - frontendda ishlatiladi
//Memory cashe - Server tez tez foydalanadigan natijalarni RAM da saqlaydi - backendda ishlatiladi

//Cashe strategiyalari
//cashe-first = Avval keshdan olib, keyin tarmoqqa chiqish (tez)
//network-first - avval tarmoqqa chiqib agar bo'lmasa keshdan foydalanish

//DDoS - (Destributed Denial of Service) - bu minglab kompyuterlar orqali serverga bir vaqtda juda ko'p
//so'rov yuborib, uni ishlamay qolishiga sabab bo'ladigan hujum

//DDoS dan himoya qilish yo'llari
// CDN(Cloutflare, Akamai) - Trafikni geografik taqsimlab, asosiy serverni himoya qiladi
//Web Aplication Firewall (WAF) - soxta so'rovlarni aniqlab bloklaydi
// Rate Limiting - Har bir IP ga limit qo'yadi (100 so'rov/min)
//Bot filtering / Captcha - botlar bilan odamlarni farqlaydi
// Load Balancer - Trafikni bir necha serverga taqsimlaydi
