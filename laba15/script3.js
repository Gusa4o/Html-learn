let numb = 10000;
let result = numb;
let counter = 0;

while (result >= 50) {
  result /= 2;
  counter++;
}

console.log("Результат: " + result);
console.log("Кількість ітерацій: " + counter);