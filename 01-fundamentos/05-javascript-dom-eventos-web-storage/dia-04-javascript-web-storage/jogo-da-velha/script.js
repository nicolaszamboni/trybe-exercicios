const combinacoes = [
  [0, 1, 2], // linha 1
  [3, 4, 5], // linha 2
  [6, 7, 8], // linha 3
  [0, 3, 6], // coluna 1
  [1, 4, 7], // coluna 2
  [2, 5, 8], // coluna 3
  [0, 4, 8], // diagonal esqueda direita
  [2, 4, 6], // diagonal direita esquerda
];

const player = document.querySelector("#player");
let turnoPlayerX = true;
let jogador;
let proximoJogador;
let contadorX = 0;
let contadorO = 0;
let contador = 0;

const jogar = (event) => {
  const divClicada = event.target;

  if (turnoPlayerX === true) {
    jogador = "X";
    proximoJogador = "O";
  } else {
    jogador = "O";
    proximoJogador = "X";
  }

  if (divClicada.innerText === "") {
    player.innerText = "Vez do jogador " + proximoJogador;
    divClicada.innerText = jogador;
    turnoPlayerX = !turnoPlayerX;
  }
  verificaWinner();
};

const divGrid = document.querySelector(".grid");

const geraDivs = () => {
  for (let i = 0; i < 9; i += 1) {
    const div = document.createElement("div");

    div.className = "celula";
    div.id = i;
    div.addEventListener("click", jogar);

    divGrid.appendChild(div);
  }
};
geraDivs();

const verificaWinner = () => {
  for (let i = 0; i < combinacoes.length; i += 1) {
    let combinacoesIndex = combinacoes[i];
    for (let o = 0; o < combinacoesIndex.length; o += 1) {
      let idDiv = document.getElementById(`${combinacoesIndex[o]}`).textContent
      console.log(idDiv)
      if (
        "X" == idDiv
      ) {
        contadorX += 1;
      } else if (
        "O" == idDiv
      ) {
        contadorO += 1;
      } else {
        contador += 1;
      }
      if (contadorX === 3) {
        player.innerText = "Jogador X ganhou";
      } else if (contadorO === 3) {
        player.innerText = "Jogador O ganhou";
      // } else if (idDiv[0] != "" && idDiv[1] != "" && idDiv[2] != "" && idDiv[3] != "" && idDiv[4] != "" && idDiv[5] != "" && idDiv[6] != "" && idDiv[7] != "" && idDiv[8] != ""){
      //   player.innerText = "EMPATOU";
      } else {
        player.innerText;
      }
    }
    contadorX = 0;
    contadorO = 0;
    contador = 0;
  }
};
verificaWinner();

const reset = () => {
  const resetar = document.querySelector("#reset");
  const div = document.querySelectorAll(".celula");
  resetar.addEventListener("click", () => {
    for (let i = 0; i < div.length; i += 1) {
      div[i].textContent = "";
    }
    player.innerText = "Vez do jogador " + proximoJogador;
  });
};
reset();
