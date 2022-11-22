/*
Exercício 3:
Utilizando operadores ternários e arrow functions reescreva a seguinte função:
function isZero(number) {
  if (number === 0) {
    return "Zero";
  }
  return "Not zero";
}
*/

// Escreva seu código aqui!

const isZero = (number) => (number === 0) ? 'Zero' : 'Not zero';

console.log(isZero(1)); // Not zero

console.log(isZero(0)); // Zero