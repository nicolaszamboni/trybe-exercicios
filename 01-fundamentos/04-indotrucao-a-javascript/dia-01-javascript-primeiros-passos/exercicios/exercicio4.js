// Utilize switch/case para fazer um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.

// Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
// Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case).
// Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.

// Exemplo: bishop (bispo) -> diagonals (diagonais)

let chessPiece = "torre";

switch(chessPiece.toLowerCase()){

  case 'rei':
    console.log("Rei -> Anda apenas uma casa para qualquer lado")
    break

  case 'bispo':
    console.log("Bispo -> Quantas casas quiser na diagonal")
    break

  case 'rainha':
    console.log("Rainha -> Quantas casas quiser para qualquer lado")
    break

  case 'cavalo':
    console.log("Cavalo -> Anda duas casa pra frente e uma para o lado")
    break

  case 'torre':
    console.log("Torre -> Horizontal e vertical quantas casas puder")
    break

  case 'peao':
    console.log("Peão -> Anda uma casa para frente, no primeiro movimento podem ser duas casa")
    break

  default:
    console.log("Erro, peça inválida!")
    break
}    