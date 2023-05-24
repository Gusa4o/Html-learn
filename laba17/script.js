function getCurrentTime() {
  let currentTime = new Date();

  let hours = currentTime.getHours();
  let minutes = currentTime.getMinutes();
  let seconds = currentTime.getSeconds();

  // Adding leading zeros to single-digit numbers
  hours = (hours < 10 ? "0" : "") + hours;
  minutes = (minutes < 10 ? "0" : "") + minutes;
  seconds = (seconds < 10 ? "0" : "") + seconds;

  let weekdays = ['Понеділок', 'Вівторок', 'Середа', 'Четверг', "П'ятниця", 'Субота', 'Неділя'];
  let dayOfWeek = weekdays[currentTime.getDay()];

  let dayOfMonth = currentTime.getDate();
  let months = ['січень', 'лютий', 'березень', 'квітень', 'травень', 'червень', 'липень', 'серпень', ' вересень', 'жовтень', ' листопад', 'грудень'];
  let month = months[currentTime.getMonth()];

  let year = currentTime.getFullYear();

  let formattedTime = hours + ":" + minutes + ":" + seconds + ", " + dayOfWeek + ", " + month + " " + dayOfMonth + ", " + year;

  console.log(formattedTime);

  return formattedTime;
}

// Function call
getCurrentTime();

function guessNumber() {
  let playing = true;

  while (playing) {
    let randomNumber = Math.floor(Math.random() * 101); // Generate a random number from 0 to 100
    let attempts = 0;

    while (true) {
      attempts++;
      let userGuess = prompt("Назвіть число від 0 до 100:");

      if (userGuess === null) {
        // User clicked "Cancel"
        playing = false;
        break;
      } else {
        let guess = parseInt(userGuess);
        if (isNaN(guess)) {
          alert("Виберіть інше число!");
        } else {
          if (guess === randomNumber) {
            console.log(`${new Date().toLocaleString()} Attempt ${attempts}: Number ${guess} - correct`);
            alert(`НІЧОГО СОБІ! Ти відгадав з ${attempts} спроби! Загадане число: ${randomNumber}`);
            break;
          } else {
            let deviation = Math.abs(guess - randomNumber);
            let response = "";

            if (deviation < 10) {
              response = "Дуже гаряче!";
            } else if (deviation < 20) {
              response = "Гаряче!";
            } else if (deviation < 30) {
              response = "Холодно";
            } else if (deviation < 50) {
              response = "Холоднише";
            } else {
              response = "Дуже холодно";
            }

            console.log(`${new Date().toLocaleString()} Attempt ${attempts}: Number ${guess} - incorrect`);
            alert(`Ви не вгадали. ${response} Спробуйте ще!`);
          }
        }
      }
    }

    if (!playing) {
      break;
    }

    let playAgain = confirm("Граємо Далі?");
    if (!playAgain) {
      break;
    }
  }
}

// Function call
guessNumber();
