const API_KEY = '4a1be8a987aa356127c0430822511e9c'; // Replace with a valid key  
const City = ['London', 'Paris', 'Tokyo'];  
const fs = require('fs');

async function fetchCity(City) {
    try {
        const response = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${City}&units=metric&appid=${API_KEY}`);
        if (!response.ok) throw new Error('Failed to fetch');
        const data = await response.json();

        return {
            city: data.name,
            temp: data.main.temp,
            humidity: data.main.humidity

        }
    } catch (error) {
        console.error(error.message);
    }
}

async function fetchCityPromise() {

    const cidades = City;
    const promises = cidades.map(City => fetchCity(City));
    const users = await Promise.all(promises);
    console.log(users);

    fs.writeFileSync('weather.json', JSON.stringify(users, null, 2));

}  

console.log(fetchCity());
console.log(fetchCityPromise());
