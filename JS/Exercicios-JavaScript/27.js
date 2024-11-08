/* 

Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais de duas crianças e calcule:

Se existe uma criança menor, caso exista, se a criança menor ultrapassará a maior e em quantos anos isso acontecerá. 

Utilize centímetros para as unidades de medida.

*/

// function dadosCriancas(alturaCrianca1, taxa1, alturaCrianca2, taxa2){

//     let count = 0
//     let criancaMaior = '';

//     if(alturaCrianca1 > alturaCrianca2){
 
//         for(let i = 0; alturaCrianca2 <= alturaCrianca1; i++){
//             alturaCrianca1 = alturaCrianca1 + taxa1
//             alturaCrianca2 = alturaCrianca2 + taxa2
//             count++

//             if(count > 20){
//                 console.log("A criança menor não vai ser maior nunca")
//                 break
//             }
//         }

//         if(count < 20){
//             console.log(`A criança será maior em ${count} anos`)
//         }

//     }else if(alturaCrianca2 > alturaCrianca1){

//         for(let i = 0; alturaCrianca1 <= alturaCrianca2; i++){
//             alturaCrianca1 = alturaCrianca1 + taxa1
//             alturaCrianca2 = alturaCrianca2 + taxa2
//             count++

//             if(count > 20){
//                 console.log("A criança menor não vai ser maior nunca")
//                 break
//             }
//         }

//         if(count < 20){
//             console.log(`A criança será maior em ${count} anos`)
//         }


//     }else{
//         console.log(`O tamanho das crianças são iguais`) 
//     }
// }

// dadosCriancas(100, 10, 120, 5)


function dadosCriancas(alturaCrianca1, taxa1, alturaCrianca2, taxa2){

    let menorAltura, maiorAltura, menorTaxa, maiorTaxa
    let count = 0

    if(alturaCrianca1 < alturaCrianca2){
        menorAltura = alturaCrianca1
        menorTaxa = taxa1
        maiorAltura = alturaCrianca2
        maiorTaxa = taxa2
    }else if(alturaCrianca1 > alturaCrianca2){
        menorAltura = alturaCrianca2
        menorTaxa = taxa2
        maiorAltura = alturaCrianca1
        maiorTaxa = taxa1
    }else{
        return "As crianças tem o mesmo tamanho"
    }

    if(menorTaxa > maiorTaxa){
        while(menorAltura <= maiorAltura){
            menorAltura = menorAltura + menorTaxa
            maiorAltura = maiorAltura + maiorTaxa
            count++
        }
        return `A criança será maior em ${count} anos`
    }else{
        return `A criança nunca será maior`
    }

}

console.log(dadosCriancas(130, 10, 100, 15))