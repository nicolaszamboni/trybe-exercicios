// Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.
// Exemplo de palíndromo: arara
// verificaPalindrome('arara')
// Retorno esperado: true
// verificaPalindrome('desenvolvimento')
// Retorno esperado: false

function verificaPalindromo(nome){
    let nomeInvertido = '';
    for (let i = nome.length - 1; i >= 0; i--){
    nomeInvertido += nome[i];
    }
    if (nome === nomeInvertido){
        return true;
    }else{
        return false;
    }
}
console.log(verificaPalindromo('arara'));

// Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
// Array de teste: [2, 3, 6, 7, 10, 1];.
// Valor esperado no retorno da função: 4.

function maiorNumeroInteiro(numeros){
    let maiorNumero = 0;
    for (let indice in numeros){
        if (numeros[maiorNumero] < numeros[indice]){
            maiorNumero = indice;
        }
    }
    return maiorNumero;
}
console.log(maiorNumeroInteiro([2, 3, 6, 40, 30, 1]));

// Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
// Array de teste: [2, 4, 6, 7, 10, 0, -3];.
// Valor esperado no retorno da função: 6.

function menorNumero(numeros){
    let menorNumero = 0;
    for (let indice in numeros){
        if (numeros[menorNumero] > numeros[indice]){
            menorNumero = indice;
        }
    }
    return menorNumero;
}
console.log(menorNumero([2, 4, 6, 7, 10, 0, -3]));

// Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
// Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];.
// Valor esperado no retorno da função: Fernanda.

function maiorPalavra(nomes){
    let maiorNome = nomes[0];
    for (let indice in nomes){
        if (maiorNome.length < nomes[indice].length){
            maiorNome = nomes[indice];
        }
    }
    return maiorNome;
}
console.log(maiorPalavra(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));


// Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
// Array de teste: [2, 3, 2, 5, 8, 2, 3];.
// Valor esperado no retorno da função: 2.

function numerosRepetidos(inteiros){
    let maisRepetidos = 0;
    for (let index in inteiros){
        if (inteiros[index] === inteiros){
            maisRepetidos += 1;
        }
    }
    return maisRepetidos;
}
console.log(numerosRepetidos([2, 3, 2, 5, 8, 2, 3]));

// Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N.
// Valor de teste: N = 5.
// Valor esperado no retorno da função: 1+2+3+4+5 = 15.

function soma(numero){
    let somaTotal = 0;
    for (let index = 1; index <= numero; index++){
        somaTotal += index;
    }
    return somaTotal;
}
console.log(soma(5));

// Crie uma função que receba uma string word e outra string ending. Verifique se a string ending é o final da string word. Considere que a string ending sempre será menor que a string word.
// Valor de teste: 'trybe' e 'be'
// Valor esperado no retorno da função: true
// verificaFimPalavra('trybe', 'be');
// Retorno esperado: true
// verificaFimPalavra('joaofernando', 'fernan');
// Retorno esperado: false

function verificarPalavra (word, ending){
    word = word.split('');
    ending = ending.split('');
    let verificacao = true;
    console.log(word)

    for(let index = 0; index < ending.length; index++){
        if (word[word.length - ending.length + index] != ending[index]){
            verificacao = false;
        }
    }
    return verificacao;
}
console.log(verificarPalavra('trybe', 'be'));
