console.time("teste")
const n = 10;
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    console.log("Teste -", i + j);

  }
}
console.timeEnd("teste")

//O(n^2)