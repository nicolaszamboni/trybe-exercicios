const newEmployees = (names) => {
    const employees = {
      id1: names('Pedro Alves'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: names('Luiz Pereira'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: names('Nicolas Zamboni'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
  };

const newEmail = (completeName) => {
    const email = completeName.toLowerCase().replace(' ', '_')
    return { completeName, email: `${email}@trybe.com` }
}

console.log(newEmployees(newEmail))