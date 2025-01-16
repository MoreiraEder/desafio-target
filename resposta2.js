const entrada = 35; // Insira o valor a ser procurado aqui

let a = 0;
let b = 1;

if (isNaN(entrada) || entrada < 0) {
    console.log("Não pertence.");
} else if (entrada === a) {
    console.log("Pertence.");
} else if (entrada === b) {
    console.log("Pertence.");
} else {
    let atual = a + b;
    let excesso = 0;

    while (excesso < 2) {
        if (entrada === atual) {
            console.log("Pertence.");
            process.exit();
        }
        if (atual > entrada) {
            excesso += 1;
        }
        a = b;
        b = atual;
        atual = a + b;
    }
    console.log("Não pertence.");
    process.exit();
}
