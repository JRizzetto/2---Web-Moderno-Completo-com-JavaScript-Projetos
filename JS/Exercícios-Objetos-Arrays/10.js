function repete(num){

    let resultRepete = ''

    for(let i = 0; i < num; i++){
        resultRepete += "+"
    }

    return resultRepete
}

console.log(typeof repete(5))
console.log( repete(5))