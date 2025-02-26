const items = [
    { weight: 2, value: 10 },
    { weight: 3, value: 15 },
    { weight: 5, value: 40 }
];
const capacity = 10;
let totalValue = 0;
let save_weight = [];
let save_valeu = [];
let i = 0;

function peso(items, capacity) {

    items.sort((a, b) => (b.weight - a.weight));
    
    for (let item of items) {
        if (capacity >= item.weight) {
            save_valeu[i] = item.weight;
            save_weight[i] = item.weight;

            totalValue += item.value;
            capacity -= item.weight;

            i++;
        }
    }
   console.log(`Items ${save_weight[0]} and ${save_weight[1]} -> ${save_valeu[0]} + ${save_valeu[1]} = ${totalValue} with total weight ${capacity}`)
    return totalValue;
}

console.log(peso(items, capacity)); 
