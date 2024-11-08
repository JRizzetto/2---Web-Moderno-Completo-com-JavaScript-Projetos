/* 
Crie uma função que dado dois valores (passados como parâmetros) 
mostre no console a soma, subtração, multiplicação e divisão desses 
valores.
*/

function soma (a, b){
    return a + b;

}

function subtracao (a, b){
    return a - b 
}

function multiplicacao (a, b){
    return a * b 
}

function divisao (a, b){
    return a / b 
}

console.log(`o resultado é ${soma(10, 3)}`)
console.log(`o resultado é ${subtracao(10, 3)}`)
console.log(`o resultado é ${multiplicacao(10, 3)}`)
console.log(`o resultado é ${divisao(10, 3)}`)

console.log('--------------------------------------')

function calculo(a, b){
    console.log(`O resultado da soma é ${a + b}`)
    console.log(`O resultado da subtracao é ${a - b}`)
    console.log(`O resultado da multiplicacao é ${a * b}`)
    console.log(`O resultado da divisao é ${a / b}`)
}
calculo(20, 4)

console.log('--------------------------------------')


//Usando um único objeto para armazenar as operações
function calcular(a,b){
    const operacoes = {
        soma: a + b,
        subtracao: a - b,
        multiplicacao: a * b,
        divisao: a / b
    }

    for(const [operacao, resultado] of Object.entries(operacoes)) {
        console.log(`O resultado da ${operacao} é ${resultado}`)
    }
}
calcular(20, 4)
