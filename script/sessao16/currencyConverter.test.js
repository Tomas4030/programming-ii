// currencyConverter.test.js
import { convertUSDToEUR, fetchExchangeRate } from './index.js';  // Importando diretamente do 'index.js'

// Mock da função fetchExchangeRate
jest.mock('./index.js', () => ({
  ...jest.requireActual('./index.js'),  // Mantém as implementações reais de outras funções
  fetchExchangeRate: jest.fn(),         // Só mocka a função fetchExchangeRate
}));

describe('convertUSDToEUR', () => {
  it('deve converter USD para EUR com sucesso', async () => {
    fetchExchangeRate.mockResolvedValue(0.9); // Simula a taxa de câmbio

    const result = await convertUSDToEUR(100);  // 100 USD * 0.9 = 90 EUR
    expect(result).toBe(90);
  });

  it('deve lançar erro caso a API falhe', async () => {
    fetchExchangeRate.mockRejectedValue(new Error('API falhou'));  // Simula falha na API

    await expect(convertUSDToEUR(100)).rejects.toThrow('API falhou');
  });
});
