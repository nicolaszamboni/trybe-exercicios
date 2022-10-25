// Usando o objeto abaixo, faça os exercícios a seguir:
// let info = {
//     personagem: 'Margarida',
//     origem: 'Pato Donald',
//     nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
//   };

// Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome. Use a sintaxe meuObjeto.chave. Valor esperado no console:

let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  recorrente: 'Sim',
};
let info2 = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain, , Dell’s Four Color Comics #178',
    nota: 'O último MacPatinhas',
    recorrente: 'Sim',
}

// console.log('Bem-vinda, '+ info.personagem);
// console.log(info.recorrente);

// for (let key in info){
//     console.log(key);
// }

// for (let key in info){
//     console.log(info[key]);
// }

for (let key in info){
    if (key === 'recorrente' && info2[key] === 'Sim' && info[key] === 'Sim'){
        console.log('Ambos recorrentes')
    } else {
    console.log(info[key] + ' e ' + info2[key]);
    }
}