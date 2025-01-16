const faturamentoMes = [
    { estado: 'SP', valor: 67836.43 },
    { estado: 'RJ', valor: 36678.66 },
    { estado: 'MG', valor: 29229.88 },
    { estado: 'ES', valor: 27165.48 },
    { estado: 'Outros', valor: 19849.53 },
];

const totalMes = faturamentoMes.reduce((total, atual) => {
    total += atual.valor;
    return total;
}, 0);

faturamentoMes.forEach(({ estado, valor }) => {
    const percentual = (Math.trunc((valor / totalMes) * 10000)) / 100;
    console.log(`${estado}: ${percentual}%`);
});

process.exit();
