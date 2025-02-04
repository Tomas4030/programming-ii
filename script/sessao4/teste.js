try {
    const fs = require('fs');
    const csvData = fs.readFileSync('teste.csv', 'utf-8');


    const rows = csvData.split('\n');
    const headers = rows[0].split(','); // ["name", "email", "age"]
    const data = rows.slice(1).map(row=> {
        const values = row.split(',');
        return {
            name: values[0], email: values[1], age: parseInt(values[2])
        };
    })
    .filter(row => !isNaN(row.age))


    fs.writeFileSync('Teste.json', JSON.stringify(data, null, 2));

    console.log(csvData)

} catch (error) {
    console.error('Error:', error.message);
}


