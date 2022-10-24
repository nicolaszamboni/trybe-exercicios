// O fatorial é representado pelo sinal !
// 4! = 4 x 3 x 2 x 1 = 24
// Com base nessas informações, crie um algoritmo que imprima na tela o fatorial de 10.

let num = 10;

for (let index = num - 1; index > 0; index--){
    num *= index;
    console.log(num)
}
console.log("10! = " + num)
