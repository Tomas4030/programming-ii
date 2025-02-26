console.time("teste");
function* list(numOfItems){
    for(let num=0; num<=numOfItems; num++){
        yield num;
    }
}

let totalitems = 2;
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


