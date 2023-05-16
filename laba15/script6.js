let dayNumber = prompt("Введіть число від 1 до 7");
let dayName;

switch (dayNumber) {
  case "1":
    dayName = "Неділя";
    break;
  case "2":
    dayName = "Понеділок";
    break;
  case "3":
    dayName = "Вівторок";
    break;
  case "4":
    dayName = "Середа";
    break;
  case "5":
    dayName = "Четвер";
    break;
  case "6":
    dayName = "П'ятниця";
    break;
  case "7":
    dayName = "Субота";
    break;
  default:
    dayName = "Невірне число";
}

alert("День неділі: " + dayName);
