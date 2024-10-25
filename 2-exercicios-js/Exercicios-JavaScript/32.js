/* 

Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros.

*/

// const newArray = Array.from({length: 20}, (_, i) => (parseInt(Math.random() * 20)))


let newArray = 
[
    14,  8,  1,  8,  7,  8,  6,
    12,  4, 17, 14, 16, 11, 10,
     1, 15,  7,  8, 11,  6
]

let sum = 0

for(let i = 0; i < newArray.length; i++){
    sum = sum + newArray[i]
}

let media = sum / newArray.length
console.log(media)

console.log("---------------------------------")

let sum1 = 0
newArray.forEach(num =>{    
    sum1 = sum1 + num
})
let media1 = sum1 / newArray.length
console.log(media1)

console.log("---------------------------------")

let sum2 = 0 
for(let num of newArray){
    sum2 += num
}
console.log(sum2 / newArray.length)

console.log("---------------------------------")

const sum3 = newArray.reduce((acc, num) => {
    acc = acc + num
    return acc
}, 0)

console.log(sum3 / newArray.length)