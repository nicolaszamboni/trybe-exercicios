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

const dayMouseOver = () => {
  const zoom = document.querySelector("#days");
  zoom.addEventListener("mouseover", (event) => {
    event.target.style.fontSize = "30px";
    event.target.style.fontWeight = "600";
  });
};

const dayMouseLeave = () => {
  const zoom = document.querySelector("#days");
  zoom.addEventListener("mouseout", (event) => {
    event.target.style.fontSize = "20px";
    event.target.style.fontWeight = "200";
  });
};

dayMouseOver();
dayMouseLeave();

const newTaskSpan = (task) => {
  let tasksContainer = document.querySelector(".my-tasks");
  let taskName = document.createElement("span");

  taskName.innerHTML = task;
  tasksContainer.appendChild(taskName);
};

newTaskSpan("projeto");

const newTaskCor = (cor) => {
  let taskContainer = document.querySelector(".my-tasks");
  let colorContainer = document.createElement("div");

  colorContainer.className = "task";
  colorContainer.style.backgroundColor = cor;
  taskContainer.appendChild(colorContainer);
};
newTaskCor("red");
newTaskCor("blue");

const taskSelected = () => {
  let colorContainer = document.querySelector(".task");
  let selectedTask = document.getElementsByClassName("task selected");
  colorContainer.addEventListener("click", (event) => {
    if (selectedTask.length === 0) {
      event.target.className = "task selected";
      console.log(selectedTask);
    } else {
      event.target.className = "task";
    }
  });
};
taskSelected();

// Implemente uma função que atribua a cor da tarefa ao dia do calendário;
// Adicione um evento que, ao clicar em um dia do mês no calendário, atribua a esse dia a cor da legenda da sua tarefa selecionada;
// Ao clicar novamente no dia com a cor da legenda, a sua cor deverá voltar à configuração inicial rgb(119,119,119).

// const atribuirCor = () => {
//     let days = document.querySelector("#days");
//     let selectedTask = document.getElementsByClassName("task selected");

//     days.addEventListener('click', (event) => {
//         let targetColor = event.target.style.backgroundColor;
//         if(selectedTask !== targetColor){
//             targetColor = selectedTask;
//             console.log(selectedTask[0].backgroundColor);
//         } else {
//             targetColor = 'rgb(119,119,119)'
//         }
//     })
// }
// atribuirCor();

const setDayColor = () => {
  let selectedTask = document.getElementsByClassName("task selected");
  let days = document.querySelector("#days");
  let taskDiv = document.querySelector(".task");
  let taskColor = taskDiv.style.backgroundColor;

  days.addEventListener("click", (event) => {
    let eventTargetColor = event.target.style.color;
    if (selectedTask.length > 0 && eventTargetColor !== taskColor) {
      let color = selectedTask[0].style.backgroundColor; // Pega a cor de fundo do primeiro elemento salvo na variável "selectedTask" e salva na variável "color"
      event.target.style.color = color; // atribui a cor salva na variável "color" ao evento alvo
    } else if (eventTargetColor === taskColor) {
      event.target.style.color = "rgb(119,119,119)"; // Altera a cor de fundo do evento alvo para "rgb(119, 119, 119)"
    }
  });
};
setDayColor();

//   Vamos adicionar compromissos ao seu calendário? Implemente uma função que, ao digitar um compromisso na caixa de texto “COMPROMISSOS”, adiciona o item à lista “MEUS COMPROMISSOS” ao clicar no botão “ADICIONAR”;
// Se nenhum caractere for inserido no campo input, a função deve retornar um alert com uma mensagem de erro ao clicar em “ADICIONAR”;
// Ao pressionar a tecla “enter” o evento também deverá ser disparado.
const alerta = (inputText) => {
  if (inputText.value.trim().length === 0) {
    alert("ERRO");
  }
};

let inputText = document.querySelector("#task-input");
let inputContainer = document.querySelector(".input-container");
inputText.addEventListener("keypress", (event) => {
  let paragraph = document.createElement("p");
  if (event.key == "Enter") {
    paragraph.innerText = inputText.value;
    inputText.value = "";
    inputContainer.appendChild(paragraph);
  }
  alerta(inputText);
});

let buttonAdd = document.querySelector("#btn-add");
buttonAdd.addEventListener("click", (event) => {
  alerta(inputText);
  let paragraph = document.createElement("p");
  paragraph.innerText = inputText.value;
  inputText.value = "";
  inputContainer.appendChild(paragraph);
});
