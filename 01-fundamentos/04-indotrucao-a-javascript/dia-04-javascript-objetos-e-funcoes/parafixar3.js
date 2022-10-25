// Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b, definidas no começo com os valores que serão operados. Faça programas para:
// Adição (a + b)
// Subtração (a - b)
// Multiplicação (a * b)
// Divisão (a / b)
// Módulo (a % b)

// Faça um programa que retorne o maior de dois números. Defina, no começo do programa, duas constantes com os valores que serão comparados.

// Faça um programa que retorne o maior de três números. Defina, no começo do programa, três constantes com os valores que serão comparados.

// Faça um programa que, dado um valor recebido como parâmetro, retorne “positive” se esse valor for positivo, “negative” se for negativo, e caso não seja nem positivo e nem negativo retorne “zero”.

// Faça um programa que receba três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, o programa deve retornar uma mensagem de erro.

// Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.

// Um ângulo será considerado inválido se não tiver um valor positivo.


function adicao(a, b){
    return a + b;
}
function subtracao(a, b){
    return a - b;
}
function multiplicacao(a, b){
    return a * b;
}
function divisao(a, b){
    return a / b;
}
function modulo(a, b){
    return a % b;
}
console.log(adicao(20, 10));
console.log(subtracao(20, 10));
console.log(multiplicacao(20, 10));
console.log(divisao(20, 10));
console.log(modulo(20, 10));

function maiorMenor(a, b){
    if (a > b){
        return a;
    }else if (b > a){
        return b;
    }else{
        return 'Mesmo valor';
    }
}
console.log(maiorMenor(20, 20));

function maiorMenorTres(a, b, c){
    if (a > b && a > c){
        return a;
    }else if (b > a && b > c){
        return b;
    }else if (c > a && c > b){
        return c;
    }else{
        return 'Mesmo valor';
    }
}
console.log(maiorMenorTres(19, 10, 12));

function value(a){
    if (a > 0){
        return 'positive';
    }else if (0 > a){
        return 'negative';
    }else{
        return 0;
    }
}
console.log(value(0));

function triangulo(angleA, angleB, angleC){
    let sumOfAngles = angleA + angleB + angleC;
    let allAnglesArePositives = angleA > 0 && angleB > 0 && angleC > 0;
    if (sumOfAngles === 180 && allAnglesArePositives){
        return true;
    }else if (sumOfAngles !== 180 && allAnglesArePositives){
        return false;
    }else{
        return 'Erro';
    }
}
console.log(triangulo(60, 60, -70));