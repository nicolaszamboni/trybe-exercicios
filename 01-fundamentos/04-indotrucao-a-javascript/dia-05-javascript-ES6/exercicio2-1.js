// Crie uma função que ligue e desligue um motor de um carro.
// Crie uma variável para armazenar o valor de status do seu motor (lembre-se de armazenar o tipo de variável da forma correta);
// Crie a função ligarDesligar utilizando arrow functions. Ela não receberá nenhum parâmetro;
// Crie  a lógica para ligar e desligar o motor (a lógica deverá utilizar uma condicional para ligar e desligar o motor);
// Imprima no terminal “O motor está ligado“ e “O motor está desligado“ (lembre-se de utilizar o template literals nesse momento).
// Bônus (opcional): tente fazer o mesmo exercício utilizando ternary operator.

let status = 'ligado';
const ligarDesligar = () => (status === 'ligado') ? status = 'desligado' : status = 'ligado';

console.log(`O motor está ${ligarDesligar()}`); // O motor está ligado
console.log(`O motor está ${ligarDesligar()}`); // O motor está desligado
console.log(`O motor está ${ligarDesligar()}`); // O motor está ligado

// let status = 'ligado';
// const ligarDesligar = status => `O motor está ${status}`

// console.log(ligarDesligar(status));