/* 

Faça um programa que leia um número entre 0 e 10, e escreva este número por extenso. 
Use o comando switch. 
Crie um case default que escreva ‘Número fora do intervalo.’

*/

function numberBetween(number){

    switch(number){
        case 0:
            console.log("Zero")
            break 

        case 1:
            console.log("Um")
            break

        case 2:
            console.log("Dois")
            break

        case 3:
            console.log("Três")
            break

        case 4:
            console.log("Quatro")
            break

        case 5:
            console.log("Cinco")
            break

        case 6:
            console.log("Seis")
            break

        case 7:
            console.log("Sete")
            break

        case 8:
            console.log("oito")
            break

        case 9:
            console.log("Nove")
            break

        default:
            console.log("Número inválido")    
    }
}

numberBetween(0)
numberBetween(1)
numberBetween(2)
numberBetween(3)
numberBetween(4)
numberBetween(5)
numberBetween(6)
numberBetween(7)
numberBetween(8)
numberBetween(9)
numberBetween(10)