/* 

Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.

*/

const arrayNumber = Array.from({length: 20}, (_, i) => i + 1)

let impar = []
let par = []

for(let i = 0; i < arrayNumber.length; i++){
    if(arrayNumber[i] % 2 == 0){
        par.push(arrayNumber[i])
    }else{
        impar.push(arrayNumber[i])
    }
}

console.log(par);
console.log(impar);

console.log('-------------------------------------------')

const arrayNumber1 = Array.from({length: 20}, (_, i) => i + 1)

let par1 = []
let impar1 = []

arrayNumber1.forEach(num =>{
    if(num % 2 == 0){
        par1.push(num)
    }else{
        impar1.push(num)
    }
})
   
console.log(par1)
console.log(impar1)