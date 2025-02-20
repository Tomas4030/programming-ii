import { createReadStream } from 'node:fs';
import readline from 'node:readline';
import fs from 'node:fs';

export class Transform {
    #filePath;
    constructor(filePath) {
        this.#filePath = filePath;
    }

    start() {
        const contagem = {
            'lunar': 0,
            'data': 0,
            'hello': 0
        };

        const stream = createReadStream(this.#filePath, { encoding: 'utf-8', highWaterMark: 10000 });

        const rl = readline.createInterface({
            input: stream,
            output: process.stdout,
            terminal: false
        });

        rl.on('line', (linha) => {
            const palavras = linha.match(/\b(lunar|data|hello)\b/g);

            if (palavras) {
                palavras.forEach(palavra => {
                    if (contagem[palavra] !== undefined) {
                        contagem[palavra]++;
                    }
                });
            }
        });

        rl.on('close', () => {
            const outputPath = 'output.json';
            fs.writeFileSync(outputPath, JSON.stringify(contagem, null, 2), 'utf-8');
        });
    }
}
