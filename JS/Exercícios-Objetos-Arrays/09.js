function repete(num1, num2){

    let arrayResult = []

    for(let i = 0; i < num2; i++){
        arrayResult.push(num1)
    }

    return arrayResult
}

console.log(repete(7, 3))