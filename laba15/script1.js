let num = 0;

while (num <= 100) {
  let isPrime = true;

  if (num > 1) {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        isPrime = false;
        break;
      }
    }
  } else {
    isPrime = false;
  }

  if (isPrime) {
    console.log(num);
  }

  num++;
}
