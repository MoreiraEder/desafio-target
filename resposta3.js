var fs = require('fs');

const arquivo = fs.readFileSync('dados.json', 'utf-8');
const dados = JSON.parse(arquivo);

let quantidadePositivos = 0;
let menorValor = 0;
let maiorValor = 0;

const totalMesPositivo = dados.reduce((total, atual) => {
    if (atual.valor > 0) {
        total += atual.valor;
        quantidadePositivos++;

        if (menorValor === 0 || maiorValor === 0) {
            menorValor = atual.valor;
            maiorValor = atual.valor;
        }

        if (menorValor > atual.valor) menorValor = atual.valor;
        if (maiorValor < atual.valor) maiorValor = atual.valor;
    }
    return total;
}, 0);


console.log(`Menor faturamento em um dia do mês R$: ${menorValor}`);
console.log(`Maior faturamento em um dia do mês R$: ${maiorValor}`);

const mediaMes = totalMesPositivo / quantidadePositivos;
let quantidadeAcimaMedia = 0;

dados.forEach(({ valor }) => {
    if (valor > mediaMes) {
        quantidadeAcimaMedia++;
    }
});

console.log(`Número de dias que o faturamento foi superior à média: ${quantidadeAcimaMedia}`);

process.exit();
