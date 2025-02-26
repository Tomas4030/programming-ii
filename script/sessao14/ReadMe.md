# Projeto de Operações Matemáticas com Arrays

Este projeto permite realizar três operações matemáticas básicas em um array de números: **soma**, **média** e **mediana**. O script é implementado em JavaScript e faz uso de módulos para calcular essas operações.

## Como funciona

### Arquivos

- **index.js**: Este arquivo é o ponto de entrada do programa. Ele lê o argumento da linha de comando (caso o usuário deseje realizar uma operação), chama a função correspondente e exibe o resultado.
- **cal.js**: Contém as funções para realizar as operações matemáticas:
  - `soma()`: Soma todos os números de um array.
  - `media()`: Calcula a média dos números no array.
  - `mediana()`: Calcula a mediana dos números no array.

### Fluxo do Programa

1. O programa recebe um argumento de operação na linha de comando (por exemplo: `soma`, `media` ou `mediana`).
2. O array de números é definido no script (`[5, 6, 7, 1, 8, 1, 9]`).
3. Dependendo do argumento recebido, o programa executa a função correspondente:
   - **soma**: Soma todos os números no array.
   - **media**: Calcula a média dos números no array.
   - **mediana**: Calcula a mediana dos números no array.
4. O resultado da operação é exibido no terminal.

## Como usar

1. Primeiro, instale as dependências (se necessário) e certifique-se de que o Node.js está instalado no seu sistema.
2. Execute o programa com o comando desejado, passando a operação como argumento. Por exemplo:

   ```bash
   node index.js soma
   node index.js media
   node index.js mediana
