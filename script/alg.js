console.time();
let numero = 2
function fibonacci(numero) {
    let sequencia = [];
    if (numero == 0) return 0;
    sequencia.push(0);
    if (numero == 1) return sequencia[0];
    sequencia.push(1);
    for (let x = 2; x <= numero; x++) {
        const proximo = sequencia[x - 1] + sequencia[x - 2];
        sequencia.push(proximo);
    }
    console.log(sequencia[numero]);
}

fibonacci(numero);


console.timeEnd();
