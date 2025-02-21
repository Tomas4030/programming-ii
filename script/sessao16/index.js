// index.js
export async function convertUSDToEUR(amount) {
  const rate = await fetchExchangeRate(); // Simula a chamada de uma API
  return amount * rate;  // Converte USD para EUR
}

export async function fetchExchangeRate() {
  return 0.9;  // Simulando uma taxa de 1 USD = 0.9 EUR
}
