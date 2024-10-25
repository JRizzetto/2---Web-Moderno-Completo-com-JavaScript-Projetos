/* 

Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente.

*/

function numElevado (base, expoente){
    
    let resultReturn = 1
    
    for(let i = 1; i <= expoente; i++){
        resultReturn *= base
    }
    return resultReturn
}
console.log(numElevado(2, 5))

console.log('--------------------------------')

function numElevado1 (base, expoente){
    return Math.pow(base, expoente)
}
console.log(numElevado1(2, 5))

console.log('--------------------------------')

function numElevado2(base, expoente){
    return base ** expoente
}
console.log(numElevado2(2, 5))





