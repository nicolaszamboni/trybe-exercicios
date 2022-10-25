// Faça um programa que receba uma string em algarismos romanos e retorne o número que a string representa.

let roman = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
};

function romanaParaNumero(numero){
    
    let len = numero.length;
    let soma = roman[numero[len - 1]];
    let atual = roman[numero[len - 1]];

    for (let index = 2; index <= len; index++){
        let prox = roman[numero[len -1]];
        if (atual <= prox) {
            soma += prox;
          } else {
            soma -= prox;
          }
      
          atual = prox;
        }
      
        return soma;
}

console.log(romanaParaNumero('VI'))