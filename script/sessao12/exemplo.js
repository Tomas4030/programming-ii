console.time("teste");
function* list(numOfItems){
        for(let num=1; num<=numOfItems; num++){
            if(num % 2 == 0)
                yield num;
        }
}

let totalitems = 100000000;
let item = list(totalitems);
let getNext = true;

while(getNext){
    let nextItem = item.next();
    getNext = !nextItem.done
    if(getNext)
        console.log(nextItem.value);
}

console.log("acabou");
console.timeEnd("teste");