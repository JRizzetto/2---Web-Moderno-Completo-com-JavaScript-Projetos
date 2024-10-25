/* 

Fazer um programa para encontrar todos os pares entre 1 e 100.

*/

function evenNumber(){
    for(let i = 1; i <= 100; i++){
        if(i % 2 == 0){
            console.log(i)
        }
    }
}

evenNumber()

console.log('---------------------------------')

function evenNumber1(){
    for(let i = 0; i <= 100; i+=2){
            console.log(i)
    }
}

evenNumber1()

console.log('---------------------------------')

const evenNumbers3 = Array.from({length: 100}, (_, i) => i + 1).filter(num => num % 2 ===0)
console.log(evenNumbers3)