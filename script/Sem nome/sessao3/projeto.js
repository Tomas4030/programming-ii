console.time("teste");

let x = prompt("Diga o valor para calcular a Potencia -");
let n = prompt("Diga o valor para calcular a Potencia -");

function Cal_potencia(x, n) {
    if (isNaN(x) || isNaN(n)) {
        console.log("Por favor, insira valores numéricos válidos.");
        return;
    }

    if (n == 0) {
        return 1;
    } else {
        return x * Cal_potencia(x, n - 1);
    }
}


console.log(Cal_potencia(x, n));
console.timeEnd("teste")