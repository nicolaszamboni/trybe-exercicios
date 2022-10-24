// Um número primo é um número inteiro maior do que 1 que possui somente dois divisores, ou seja, é divisível por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 2 e 50.

let maiorNumero = 0;

for (let iPrimo = 2; iPrimo <= 50; iPrimo += 1){
   let primo = true;
  for (let iDivisor = 2; iDivisor < iPrimo; iDivisor += 1){
    if (iPrimo % iDivisor === 0 && iPrimo !== iDivisor){
      primo = false;
    } 
  }
if (primo === true){
    console.log(iPrimo)
    maiorNumero = iPrimo;
}
}
console.log(maiorNumero)

// let primos = [];
// let novoPrimos = [2, 3, 5, 7];
// let maiorNumero = [2];

// for(let i = 50; i >= 2; i--){ 
//     primos.unshift(i);
//   }
//    for(let o = 0; o < primos.length; o++){

//    if (primos[o] % 2 != 0 && primos[o] % 3 !=0 && primos[o] % 5 !=0 && primos[o] % 7 !=0){
//        novoPrimos.push(primos[o]);
//    }
//    for (let index = 0; index < novoPrimos.length; index++){
//     if (novoPrimos[index] > maiorNumero){
//         maiorNumero = novoPrimos[index];
//     }
//  }
// }
// console.log(maiorNumero)
