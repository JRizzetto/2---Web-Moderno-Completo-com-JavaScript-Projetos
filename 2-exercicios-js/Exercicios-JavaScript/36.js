/* 

Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número inteiro. 

Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada elemento pelo número passado como parâmetro. 

A segunda função fará o mesmo da primeira se e somente se o valor do elemento for maior que 5.

*/

function multElement(vetorNumbers, numInt){
    let outroVetor = [];
    vetorNumbers.forEach(num => outroVetor.push(numInt * num))
    return outroVetor
}
const resultado1 = multElement([1, 2, 3, 4], 5)
console.log("A primeira função é: ",  resultado1)


function multElement2(vetorNumbers2, numInt2){
    let outroVetor2 = []
    vetorNumbers2.forEach(num=>{
        if(num > 5){
            outroVetor2.push(num * numInt2)
        }
    })
    
    return outroVetor2
}

console.log(multElement2(resultado1, 2))
