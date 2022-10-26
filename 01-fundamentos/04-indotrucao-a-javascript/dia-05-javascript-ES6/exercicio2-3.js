// 🚀 Crie uma função que receba uma frase como parâmetro e retorne a maior palavra da frase.

const maiorPalavra = (frase) => {

    let fraseSeparada = frase.split(' ');
    let palavra = 0;
    let resultado = '';

    for (let index of fraseSeparada){
        if (index.length > palavra){
            palavra = index.length;
            resultado = index;
        }
    }
    return resultado;
}

console.log(maiorPalavra('Antônio foi no banheiro e não sabemos o que aconteceu'));