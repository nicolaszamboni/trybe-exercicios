const gameOfThronesCharacters = [
    {
      firstName: 'Daenerys',
      lastName: 'Targaryen',
      fullName: 'Daenerys Targaryen',
      title: 'Mother of Dragons',
      family: 'House Targaryen',
    },
    {
      firstName: 'Brienne',
      lastName: 'Tarth',
      fullName: 'Brienne of Tarth',
      title: 'Lady Brienne',
      family: 'Tarth',
    },
    {
      firstName: 'Jon',
      lastName: 'Snow',
      fullName: 'Jon Snow',
      title: 'King of the North',
      family: 'House Stark',
    },
    {
      firstName: 'Arya',
      lastName: 'Stark',
      fullName: 'Arya Stark',
      title: 'No One',
      family: 'House Stark',
    },
  ];
  
  /*
  
  Exercício 2:
  
  Escreva uma função que recebe por parâmetro o array de objetos com informações de personagens (gameOfThronesCharacters), e deve retornar um objeto no seguinte formato:
  
    {
    'House Targaryen': ['Daenerys Targaryen'],
    'Tarth': ['Brienne of Tarth'],
    'House Stark': ['Jon Snow', 'Arya Stark'],
    }
  
  O objetivo é determinar quem compõe cada família de Westeros.
  */
  
  // Escreva seu código aqui!

//   console.log(gameOfThronesCharacters[0].family)

const charsOfGot = (chars) => {
    const houses = {};
  
    for (let index of chars) {
      if (Object.keys(houses).includes(index.family)) {
        houses[index.family].push(index.fullName);
      } else {
        houses[index.family] = [index.fullName];
      }
    }

    return houses;
  };
  console.log(charsOfGot(gameOfThronesCharacters));
  charsOfGot(gameOfThronesCharacters)

// const charsOfGot () {

// }
