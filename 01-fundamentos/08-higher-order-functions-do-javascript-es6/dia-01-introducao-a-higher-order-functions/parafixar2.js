// Primeiro exercicio
const numbers = [19, 21, 30, 3, 45, 22, 15];

const verifyNumbers = numbers.find((divisivel) => divisivel % 3 === 0 && divisivel % 5 === 0);

console.log(verifyNumbers); // 30


// Segundo exercicio
const names = ['João', 'Irene', 'Fernando', 'Maria'];

const verifyName = names.find((name) => name.length === 5);

console.log(verifyName);

// Terceiro exercicio 
const musicas = [
    { id: '31031685', title: 'Partita in C moll BWV 997' },
    { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
    { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
  ];
  
 const verifyId = musicas.find((id) => id.id === '31031685');

 console.log(verifyId);
