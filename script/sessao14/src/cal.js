/**
 * Soma todos os números em um array.
 *
 * @param {number[]} nums - Um array de números a serem somados.
 * @returns {number} O total da soma dos números no array.
 */

export function soma(nums) {
    let total = 0;

    for (let i = 0; i < nums.length; i++) {
        total += nums[i];
    }

    return total;
}

/**
 * Calcula a média de um array de números.
 *
 * @param {number[]} nums - Um array de números para calcular a média.
 * @returns {number} A média dos números no array.
 */
export function media(nums) {
    let total = 0;
    let media = 0;
    let tamanho = nums.length;

    for (let i = 0; i < nums.length; i++) {
        total += nums[i];
        media = total / tamanho;
    }

    return media;
}

/**
 * Calcula a mediana de um array de números.
 *
 * @param {number[]} nums - Um array de números para calcular a mediana.
 * @returns {number} A mediana dos números no array.
 */
export function mediana(nums) {
    nums.sort((a, b) => a - b);

    const meio = Math.floor(nums.length / 2);

    if (nums.length % 2 !== 0) {
        return nums[meio];
    } else {
        return (nums[meio - 1] + nums[meio]) / 2;
    }
}
