const emailListInData = [
    'roberta@email.com',
    'paulo@email.com',
    'anaroberta@email.com',
    'fabiano@email.com',
  ];
  
  const enviarEmail = (email) => {
    console.log(`O email ${email} está cadastrado em nosso banco de dados!`)
  }

  emailListInData.forEach((email, position, array) => {
    enviarEmail(email);
    console.log(`Sua posição é a de: ${position}`);
    console.log(`A quantidade de pessoas no processo seletivo é: ${array.length}`)
  })
  // Adicione seu código aqui