import { Api } from './Api.js';

const args = process.argv.slice(2);
const title = args.join(" ");

if (!title) {
  console.log('Por favor, forneça um título de jogo como argumento.');
  process.exit(1);
}

async function displayResults() {
  try {
    const games = await Api(title);

    if (games.length === 0) {
      console.log('Nenhum jogo encontrado.');
      return;
    }

    console.table(games.map(game => ({
      "🎮 Título": game.title,
      "📉 Preço Desconto": game.salePrice != game.normalPrice ? `$${game.salePrice}` : "-",
      "💵 Preço Normal": `$${game.normalPrice}`,
      "🔥 Você Economiza": game.savings != 0 ? `${parseFloat(game.savings).toFixed(2)}%` : "-",
      "🎭 Steam Rating": game.steamRatingText
  })));
  } catch (error) {
    console.error('Erro ao buscar os dados:', error.message);
  }
}

displayResults();

