function multiplicacao(num1, num2){
    
    let acumulador = 0

    for(let i = 0; i < num1; i++){
        acumulador += num2
    }

    return acumulador
}

console.log(multiplicacao(10, 30))