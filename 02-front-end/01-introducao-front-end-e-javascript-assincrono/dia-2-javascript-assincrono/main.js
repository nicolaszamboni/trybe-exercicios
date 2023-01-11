// função que gera um número aleatório
const generateRandomNumber = () => Math.round(Math.random() * 10);

// promise resolvida retornando o número aleatório
// const resolvedPromise = () =>
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const randomNumber = generateRandomNumber();
//       resolve(randomNumber);
//     }, 1000);
//   });

//   resolvedPromise().then((response) => {
//     console.log(`O numero gerado é ${response}`)
//   })

//   const rejectedPromise = () =>
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const randomNumber = generateRandomNumber();
//       reject(new Error(`O número ${randomNumber} é inválido.`));
//     }, 1000);
//   });

//   rejectedPromise()
//     .then((response) => {
//     console.log(response)
//      })
//      .catch((error) => {
//         console.log(error.message)
//      })

const randomPromise = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNumber = generateRandomNumber();
      if (randomNumber % 2 === 0) {
        resolve(randomNumber);
      } else {
        reject(new Error(`O número ${randomNumber} é inválido.`));
      }
    });
  });

randomPromise()
  .then((response) => {
    console.log(`Promise resolvida. O número gerado é ${response}`);
  })
  .catch((error) => {
    console.log(`Promise rejeitada: ${error.message}`);
  })
  .finally(() => console.log("Fim da execução da primeira promise."));

console.log(
  `Esse número não foi gerado por um código assíncrono: ${generateRandomNumber()}`
);
