/* 

Um funcionário irá receber um aumento de acordo com o seu plano de trabalho, de acordo com a tabela abaixo:

PLANO - AUMENTO
A   -   10%
B   -   15%
C   -   20%

Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu novo salário. 
Use a estrutura switch e faça um caso default que indique que o plano é inválido.

*/


function planoAumento(plano, salario){

    switch(plano){
        case "A":
            console.log(`Seu plano é o ${plano} e seu novo salário é ${salario * 1.1}`)
            break

        case "B":
            console.log(`Seu plano é o ${plano} e seu novo salário é ${salario * 1.15}`)
            break

        case "C":
            console.log(`Seu plano é o ${plano} e seu novo salário é ${salario * 1.20}`)
            break
        
        default:
            console.log(`O plano ${plano} é inválido`)
    }
}

planoAumento("A", 1000)
planoAumento("B", 1000)
planoAumento("C", 1000)
planoAumento("D", 1000)