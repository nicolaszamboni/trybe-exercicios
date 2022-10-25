// Acesse as chaves nome, sobrenome, andar e apartamento do último morador do blocoDois e faça um console.log no seguinte formato: “O morador do bloco 2 de nome Zoey Brooks mora no 1° andar, apartamento 101”.

// Utilize o for para imprimir o nome completo de todos os moradores do bloco 1, acessando suas chaves nome e sobrenome. Depois faça o mesmo para os moradores do bloco 2.

let moradores = {
    blocoUm: [
      {
        nome: 'Luiza',
        sobrenome: 'Guimarães',
        andar: 10,
        apartamento: 1005,
      },
      {
        nome: 'William',
        sobrenome: 'Albuquerque',
        andar: 5,
        apartamento: 502,
      },
    ],
    blocoDois: [
      {
        nome: 'Murilo',
        sobrenome: 'Ferraz',
        andar: 8,
        apartamento: 804,
      },
      {
        nome: 'Zoey',
        sobrenome: 'Brooks',
        andar: 1,
        apartamento: 101,
      },
    ],
  };

  console.log('O morador do bloco 2 de nome ' + moradores.blocoDois[1].nome + ' ' + moradores.blocoDois[1].sobrenome + ' mora no ' + moradores.blocoDois[1].andar + ' andar, apartamento ' + moradores.blocoDois[1].apartamento)

  for (let index in moradores.blocoDois){
    console.log(moradores.blocoDois[index].nome + ' ' + moradores.blocoDois[index].sobrenome)
  }
  for (let index2 in moradores.blocoUm){
    console.log(moradores.blocoUm[index2].nome + ' ' + moradores.blocoUm[index2].sobrenome)
  }