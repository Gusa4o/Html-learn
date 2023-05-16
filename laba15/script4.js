let month = prompt("Введіть число від 1 до 12");
let season;
let monthName;

if (month >= 1 && month <= 12) {
  switch (Math.floor((month + 9) % 12 / 3)) {
    case 0:
      season = "зима";
      break;
    case 1:
      season = "весна";
      break;
    case 2:
      season = "літо";
      break;
    case 3:
      season = "осінь";
      break;
  }

  switch (month) {
    case "1":
      monthName = "січень";
      break;
    case "2":
      monthName = "лютий";
      break;
    case "3":
      monthName = "березень";
      break;
    case "4":
      monthName = "квітень";
      break;
    case "5":
      monthName = "травень";
      break;
    case "6":
      monthName = "червень";
      break;
    case "7":
      monthName = "липень";
      break;
    case "8":
      monthName = "серпень";
      break;
    case "9":
      monthName = "вересень";
      break;
    case "10":
      monthName = "жовтень";
      break;
      case "11":
        monthName = "листопад";
        break;
      case "12":
        monthName = "грудень";
        break;
    }

    alert("Пора року: " + season + "\nНазва місяця: " + monthName);
    } else {
    alert("Введене число не відповідає діапазону від 1 до 12");
    }