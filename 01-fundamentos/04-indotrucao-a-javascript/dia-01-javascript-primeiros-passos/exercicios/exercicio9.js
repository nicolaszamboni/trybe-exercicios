// Utilize if/else para fazer um programa que, dado um salário bruto, calcule o líquido a ser recebido.
// Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR.

// A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos, use as seguintes referências:

// INSS (Instituto Nacional do Seguro Social)

// Salário bruto até R$ 1.556,94: alíquota de 8%
// Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
// Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
// Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88

// IR (Imposto de Renda)

// Até R$ 1.903,98: isento de imposto de renda
// De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
// De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
// De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
// Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.

let salarioMinimo = 5000;
let salarioBruto;
let salarioLiquido;

if(salarioMinimo <= 1556.94){
    salarioBruto = salarioMinimo * 0.92;
    salarioLiquido = salarioBruto;
    console.log(salarioLiquido);
}
else if(salarioMinimo <= 2594.92){
    salarioBruto = salarioMinimo * 0.91;
    if (salarioBruto <= 1903,98){
        console.log(salarioBruto);
    } else {
        salarioLiquido = (salarioBruto - ((salarioBruto * 0.075) - 142.80));
        console.log(salarioLiquido);
    };
}
else if(salarioMinimo <= 5189.82){
    salarioBruto = salarioMinimo * 0.89;
    if (salarioBruto <= 2826.65){
        salarioLiquido = (salarioBruto - ((salarioBruto * 0.075) - 142.80));
        console.log(salarioLiquido);
    } else if (salarioBruto <= 3751.05) {
        salarioLiquido = (salarioBruto - ((salarioBruto * 0.15) - 354.80));
        console.log(salarioLiquido);
    } else {
        salarioLiquido = (salarioBruto - ((salarioBruto * 0.225) - 636.13));
        console.log(salarioLiquido);
    };
}
else {
    salarioBruto = salarioMinimo - 570.88;
    if (salarioBruto <= 4664,68){
        salarioLiquido = (salarioBruto - (((salarioBruto * 0.225) - 636.13)));
        console.log(salarioLiquido);
    } else {
        salarioLiquido = (salarioBruto - ((salarioBruto * 0.27) - 869.36));
        console.log(salarioLiquido);
    };
}


// let aliquotINSS;
// let aliquotIR;

// const grossSalary = 2000.00;

// if (grossSalary <= 1556.94) {
//   aliquotINSS = grossSalary * 0.08;
// } else if (grossSalary <= 2594.92) {
//   aliquotINSS = grossSalary * 0.09;
// } else if (grossSalary <= 5189.82) {
//   aliquotINSS = grossSalary * 0.11;
// } else {
//   aliquotINSS = 570.88;
// }

// const baseSalary = grossSalary - aliquotINSS;

// if (baseSalary <= 1903.98) {
//   aliquotIR = 0;
// } else if (baseSalary <= 2826.65) {
//   aliquotIR = (baseSalary * 0.075) - 142.80;
// } else if (baseSalary <= 3751.05) {
//   aliquotIR = (baseSalary * 0.15) - 354.80;
// } else if (baseSalary <= 4664.68) {
//   aliquotIR = (baseSalary * 0.225) - 636.13;
// } else {
//   aliquotIR = (baseSalary * 0.275) - 869.36;
// };

// console.log("Salário: " + (baseSalary - aliquotIR));
