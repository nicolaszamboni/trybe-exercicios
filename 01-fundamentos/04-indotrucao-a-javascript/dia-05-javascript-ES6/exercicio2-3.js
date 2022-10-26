// 🚀 Crie uma função que receba uma frase como parâmetro e retorne a maior palavra da frase.

const maiorPalavra = (frase) => {

    let fraseSeparada = frase.split(' ');
    let palavra = fraseSeparada[0];

    for (let index of fraseSeparada){
        if (index.length > palavra.length){
            palavra = index;
        }
    }
    return palavra;
}

console.log(maiorPalavra('Antônio foi no banheiro e não sabemos o que aconteceu'));