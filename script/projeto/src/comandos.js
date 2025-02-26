export function comandos() {
    const args = process.argv.slice(2);

    if (args.includes("--help")) {
        console.log(`
        Uso: node main.js [opções]
        
        Opções disponíveis:
            [título]            → Pesquisa o nome do jogo
            [título] --sort     → Pesquisa o nome do jogo e ordena pelo menor preço
            --help              → Exibe esta mensagem de ajuda
        `);
        process.exit(0);
    }

    return {
        sort: args.includes("--sort")
    };
}
