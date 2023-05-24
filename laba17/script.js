function getCurrentTime() {
  let currentTime = new Date();

  let hours = currentTime.getHours();
  let minutes = currentTime.getMinutes();
  let seconds = currentTime.getSeconds();

  // Adding leading zeros to single-digit numbers
  hours = (hours < 10 ? "0" : "") + hours;
  minutes = (minutes < 10 ? "0" : "") + minutes;
  seconds = (seconds < 10 ? "0" : "") + seconds;

  let weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  let dayOfWeek = weekdays[currentTime.getDay()];

  let dayOfMonth = currentTime.getDate();
  let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
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
      let userGuess = prompt("Guess a number from 0 to 100:");

      if (userGuess === null) {
        // User clicked "Cancel"
        playing = false;
        break;
      } else {
        let guess = parseInt(userGuess);
        if (isNaN(guess)) {
          alert("Please enter a numeric value!");
        } else {
          if (guess === randomNumber) {
            console.log(`${new Date().toLocaleString()} Attempt ${attempts}: Number ${guess} - correct`);
            alert(`Congratulations! You guessed the number in ${attempts} attempts! The secret number was: ${randomNumber}`);
            break;
          } else {
            let deviation = Math.abs(guess - randomNumber);
            let response = "";

            if (deviation < 10) {
              response = "Very hot!";
            } else if (deviation < 20) {
              response = "Hot!";
            } else if (deviation < 30) {
              response = "Warm";
            } else if (deviation < 50) {
              response = "Warmer";
            } else {
              response = "Colder";
            }

            console.log(`${new Date().toLocaleString()} Attempt ${attempts}: Number ${guess} - incorrect`);
            alert(`You didn't guess. ${response} Try again!`);
          }
        }
      }
    }

    if (!playing) {
      break;
    }

    let playAgain = confirm("Play again?");
    if (!playAgain) {
      break;
    }
  }
}

// Function call
guessNumber();
