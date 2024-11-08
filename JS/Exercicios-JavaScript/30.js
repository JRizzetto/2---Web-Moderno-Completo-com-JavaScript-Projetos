/* 

Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor.

*/

// const newArray = Array.from({length: 20}, (_, i) => (parseInt(Math.random() * 100)))

const newArray = 
[
    37, 67, 75, 37, 1, 50, 75,
    79, 16, 29,  6, 4, 88, 13,
    82, 82, 76, 39, 3, 49
]


let biggerNumber = newArray[0]
let smallerNumber = newArray[0]

for(let i = 0; i <= newArray.length; i++){
    if(newArray[i] > biggerNumber){
        biggerNumber = newArray[i]
    }else if(newArray[i] < smallerNumber){
        smallerNumber = newArray[i]
    }
}

console.log('--------------------------------------------')

const bigNum = Math.max(...newArray)
console.log(bigNum)

const smallNum = Math.min(...newArray)
console.log(smallNum)

console.log('--------------------------------------------')

const numMaiorReduce = newArray.reduce((acc, num) => (num > acc ? num : acc), newArray[0]);
console.log(`O maior número é ${numMaiorReduce}`);

const numMenorReduce = newArray.reduce((acc, num) => (num < acc ? num : acc), newArray[0]);
console.log(`O maior número é ${numMenorReduce}`);