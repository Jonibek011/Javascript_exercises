//Homework: how many prime numbers in 1 to 100
// An integer number greater than 1 is called prime if it cannot be devided
// whithout remainder byanithing exept 1 and itself
var prime = 0;
for (i = 1; i <= 100; i++) {
  if (i % 1 === 0 && i % i === 0) prime += 1;
}

console.log(prime);
