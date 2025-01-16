const entrada = 'abcdefghijkl'; // Insira aqui a string que se deseja converter

let resultado = '';

for (let indice = entrada.length - 1; indice >= 0; indice--) {
    resultado = resultado.concat(entrada[indice]);
}

console.log(`String original: ${entrada}`);
console.log(`String convertida: ${resultado}`);

process.exit();
