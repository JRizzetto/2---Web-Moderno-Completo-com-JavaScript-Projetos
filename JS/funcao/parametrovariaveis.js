function soma(){
    let soma = 0;
    for(i in arguments) {
        soma += arguments[i]
        console.log(`${i} = ${arguments[i]}`)
    }
    return soma
}

console.log(soma(2, 3, 4, 5))