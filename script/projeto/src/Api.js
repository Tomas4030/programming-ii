import fetch from 'node-fetch';

/**
 * Função para buscar dados na API CheapShark.
 * @param {string} title - Título do jogo a ser pesquisado.
 * @returns {Promise<Array>} - Lista de jogos encontrados.
 */
export async function Api(title) {
  const url = `https://www.cheapshark.com/api/1.0/deals?storeID=1&title=${title}`;
  const response = await fetch(url);
  
  if (!response.ok) {
    throw new Error('API inválidas, problemas de rede');
  }

  const data = await response.json();
  return data;
}
