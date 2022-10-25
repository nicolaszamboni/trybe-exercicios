// Crie uma função chamada arrayOfNumbers que receberá a variável vector como parâmetro.

// Através de um loop for, percorra essa variável, busque os números pares e os adicione a um novo array, que deverá ser retornado ao final pela função.

let vector = [[1, 2], [3,4,5,6], [7,8,9,10]];

function arrayOfNumbers(vector){
    let pares = [];

    for (let index in vector){
        let numeros = vector[index];

        for (let index2 in numeros){
            let numerosNovo = numeros[index2];
            
            if(numerosNovo % 2 === 0){
                pares.push(numerosNovo);
            }
        }
    }

    return 'Os numeros pares são: ' + pares;
}

console.log(arrayOfNumbers(vector));