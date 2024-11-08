/* 

Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor e imprime a quantidade no console.

*/

// const newArray = Array.from({length: 20}, (_, i) => (parseInt(Math.random() * 50)))

const newArray = 
[
    7, 29,  -3,  4,  4, -36, 26,
   -22, 10,  5, 49, 44, -20, 29,
   -25, 21, 19, -21, 23, 48
 ]

let count = 0

for(let i = 0; i < newArray.length; i++){
    if(newArray[i] < 0){
        console.log(`O ${newArray[i]} é um número negativo`)
        count++
    }
}
console.log(`Existem ${count} negativos`)

console.log('(-----------------------------------)')

let count1 = 0
newArray.forEach(num =>{
    if(num < 0){
        console.log(`O ${num} é um número negativo`)
        count1++
    }
})
console.log(`Existem ${count1} negativos`)

console.log('(-----------------------------------)')

const arrayFilter = newArray.filter(num => num < 0);
console.log(arrayFilter)
console.log(`Existem ${arrayFilter.length} números negativos`)
