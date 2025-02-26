function main(n) {
    const memo = new Map();
    function fib(n) {
        if (n <= 1) return n;
        if (memo.has(n)) return memo.get(n);
        const result = fib(n - 1) + fib(n - 2);
        memo.set(n, result);
        return result;
    }
    return fib(n);
}
console.time("teste");
console.log(main(1000)); // 55  
console.timeEnd("teste")
console.time("testee");
console.log(main(1200)); // 12586269025 (efficient!)  
console.timeEnd("testee")
