import { Api } from './Api.js';
import { comandos } from './comandos.js';

const args = process.argv.slice(2);
const title = args.filter(arg => !arg.startsWith("--")).join(" "); 
const { sort } = comandos(); 

if (!title) {
  console.log('Por favor, forneça um título de jogo como argumento. Para mais ajuda, use --help.');
  process.exit(1);
}

async function displayResults() {
  try {
    const games = await Api(title);

    if (games.length === 0) {
      console.log('Nenhum jogo encontrado.');
      return;
    }

    if (sort) {
      games.sort((a, b) => parseFloat(a.salePrice) - parseFloat(b.salePrice));
    }

    console.table(games.map(game => {
      let ValidDesconto;
      let ValidSavings;

      if (game.normalPrice === game.salePrice) {
        ValidDesconto = "Sem desconto";
      } else {
        ValidDesconto = game.salePrice + " €";
      }

      if (game.savings > 0) {
        ValidSavings = parseFloat(game.savings).toFixed(0) + " %";
      } else {
        ValidSavings = "Sem desconto";
      }

      return {
        "🎮 Título": game.title,
        "📉 Preço Desconto": ValidDesconto,
        "💵 Preço Normal": `${game.normalPrice} €`,
        "🔥 Você Economiza": ValidSavings,
        "🎭 Steam Rating": game.steamRatingText
      };
    }));
  } catch (error) {
    console.error('Erro ao buscar os dados:', error.message);
  }
}

displayResults();
