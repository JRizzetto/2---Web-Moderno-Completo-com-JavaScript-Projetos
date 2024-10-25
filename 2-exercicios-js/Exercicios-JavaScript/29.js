/* 

Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números
deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos
deles estão fora do intervalo, escrevendo estas informações.

*/

const newArray = 
    [33,  7, 26, 40, 11, 46, 19,
    55, 39, 57, 17, 40, 34, 46,
    44, 20, 34, 18, 55, 19]

function numberBetween(num1, num2){

    let count = 0

    for(let i = 0; i < newArray.length; i++){
        if(newArray[i] >= num1 && newArray[i] <= num2){
            console.log(`O número ${newArray[i]} está incluso no intervalo`)
            count++
        }
    }

    return `Existe ${count} dentro do intervalor e ${newArray.length - count} fora.`
}

// console.log(numberBetween(10, 20))

   
console.log('------------------------------------')

function numberBetween1(num3, num4){
    
    let counter = 0

    newArray.forEach(num =>{
        if(num >= num3 && num <= num4){
            console.log(`O número ${num} está incluso no intervalo`)
            counter++
        }
    })

    return `Existe ${counter} dentro do intervalor e ${newArray.length - counter} fora.`
}

console.log(numberBetween1(10, 20))
