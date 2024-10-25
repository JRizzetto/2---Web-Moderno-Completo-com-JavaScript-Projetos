/* 

Faça um algoritmo que calcule o fatorial de um número.

*/

function factorialNumber(number){
    
    let result = 1

    for(let i = number; i > 0; i--){
        result *= i
        console.log(result)
    }

    return result
}

console.log(factorialNumber(5))