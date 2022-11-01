const createDaysOfTheWeek = () => {
  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const weekDaysList = document.querySelector(".week-days");

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

const decemberDaysList = [
  29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
];

const createDaysOfTheMonth = () => {
  let getDaysList = document.querySelector("#days");
  for (let index = 0; index < decemberDaysList.length; index += 1) {
    let day = decemberDaysList[index];
    let elementLi = document.createElement("li");
    elementLi.innerText = day;
    if (day == 24 || day == 31) {
      elementLi.className = "day holiday";
      getDaysList.appendChild(elementLi);
    } else if (day == 4 || day == 11 || day == 18) {
      elementLi.className = "day friday";
      getDaysList.appendChild(elementLi);
    } else if (day == 25) {
      elementLi.className = "day holiday friday";
      getDaysList.appendChild(elementLi);
    } else {
      elementLi.className = "day";
      getDaysList.appendChild(elementLi);
    }
  }
};
createDaysOfTheMonth();

const feriado = () => {
  let buttonsContainer = document.querySelector(".buttons-container");
  let button = document.createElement("button");
  button.id = "btn-holiday";
  button.innerText = "Feriados";
  buttonsContainer.appendChild(button);
};
feriado();

let button = document.getElementById("btn-holiday");
const buttons = () => {
  const feriados = document.querySelectorAll(".holiday");
  for (let index = 0; index < feriados.length; index += 1) {
    if (!feriados[index].classList.contains("newColor")) {
    feriados[index].classList.add("newColor");
    } else {
        feriados[index].classList.remove("newColor");
    }
  }
};
button.addEventListener("click", buttons);

const sextaFeira = () => {
    let buttonsContainer = document.querySelector(".buttons-container");
    let sextou = document.createElement("button");
    sextou.id = "btn-friday";
    sextou.innerText = "Sexta-Feira";
    buttonsContainer.appendChild(sextou);
  };
  sextaFeira();

  let buttonFriday = document.getElementById("btn-friday");
const buttonsFriday = () => {
  const sextaFeira = document.querySelectorAll(".friday");
  for (let index = 0; index < sextaFeira.length; index += 1) {
    if (!sextaFeira[index].classList.contains("newColorFriday")) {
    sextaFeira[index].classList.add("newColorFriday");
    } else {
        sextaFeira[index].classList.remove("newColorFriday");
    }
  }
};
buttonFriday.addEventListener("click", buttonsFriday);

