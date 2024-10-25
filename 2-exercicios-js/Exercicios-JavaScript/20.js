/* 

Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas
para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10, R$ 5 e R$ 1.

Seu programa deve mostrar apenas as notas utilizadas. 
Por exemplo, ao solicitar R$18, o programa deve informar apenas a seguinte informação: 
1 nota(s) de R$ 10. 
1 nota(s) de R$ 5. 
3 nota(s) de R$ 1.

*/

function valorSque(valor){

    let nota100 = Math.floor(valor / 100)
    valor = valor % 100
    
    let nota50 = Math.floor(valor / 50)
    valor = valor % 50

    let nota10 = Math.floor(valor / 10)
    valor = valor % 10
    
    let nota5 = Math.floor(valor / 5)
    valor = valor % 5

    let nota1 = Math.floor(valor / 1)
    valor = valor % 1

if(nota100 > 0){console.log(`${nota100} nota(s) de R$ 100.00`)}
if(nota50 > 0){console.log(`${nota50} nota(s) de R$ 50.00`)}
if(nota10 > 0){console.log(`${nota10} nota(s) de R$ 10.00`)}
if(nota5 > 0){console.log(`${nota5} nota(s) de R$ 5.00`)}
if(nota1 > 0){console.log(`${nota1} nota(s) de R$ 1.00`)}

}

valorSque(101)


