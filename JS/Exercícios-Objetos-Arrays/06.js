function booleanOrNumber(conversor){
    if(typeof conversor === 'boolean'){
        return !conversor
    }else if(typeof conversor === 'number'){
        return -conversor
    }else{
        return `Essa não é uma entrada válida (boolean ou number)`
    }
}

console.log(booleanOrNumber(false))
console.log(booleanOrNumber(10))
console.log(booleanOrNumber('Jefferson'))