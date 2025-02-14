const dados = [
    { id: 1, name: 'Alice', city: 'Paris' },
    { id: 2, name: 'Bob', city: 'London' },
    { id: 3, name: 'Charlie', city: 'Paris' },
    { id: 4, name: 'Charlie', city: 'Paris' }
];

function teste(dados) {
    const Mapa = new Map();

    dados.forEach(user => {

        if (Mapa.has(user.city)) {
            Mapa.get(user.city).push(user);
        }else{
            Mapa.set(user.city, [user]);
        }
    })

    return Mapa;
}

const ola = teste(dados);

console.log(ola);
