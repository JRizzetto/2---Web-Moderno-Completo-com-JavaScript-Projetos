/* 
Crie uma função que irá receber dois valores, o dividendo e o divisor. 
A função deverá imprimir o resultado e o resto da divisão destes dois valores.

*/

function calcDivisor(dividendo, divisor){
    if(dividendo > 0 && divisor > 0){
        console.log(`O resultado é ${Math.floor(dividendo / divisor)} e o resto é ${dividendo % divisor}`)
    }else{
        console.log('Escolha um número positivo e diferente de 0')
    }
    return
}
calcDivisor(10, 3)