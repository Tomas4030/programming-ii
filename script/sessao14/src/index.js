import { soma, media, mediana } from './cal.js';

const [op] = process.argv.slice(2); 
const nums = [5, 6, 7, 1, 8, 1, 9]; //1, 1, 5, 6, 7, 8, 9
let resultado;

switch (op) {
    case 'soma': 
        resultado = soma(nums);
        break;

    case 'media': 
        resultado = media(nums);
        break;

    case 'mediana': 
        resultado = mediana(nums);
        break;

    default:
        resultado = 'Operação inválida. Use soma, media ou mediana.';
}

console.log(resultado);
