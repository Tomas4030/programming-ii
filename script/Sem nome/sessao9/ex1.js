console.time("teste");
const fs = require('fs');

function countWords(filename) {
    let data = fs.readFileSync('poem.txt', 'utf-8');
    data = data.replace(/[^\w\s]/g, '');
    words = data.split(' ');
    console.log(words);
    return words.length;
}
console.log(countWords('poem.txt'));  
console.timeEnd("teste");