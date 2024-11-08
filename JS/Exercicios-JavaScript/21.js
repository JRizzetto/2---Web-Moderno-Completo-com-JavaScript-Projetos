
/* 

Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniado.

Considere que todos paguem R$ 100 mais um adicional conforme a seguinte tabela: 

1) crianças com menos de 10 anos pagam R$80; 
2) conveniados com idade entre 10 e 30 anos pagam R$50; 
3) conveniados com idade acima de 30 e até 60 anos pagam R$ 95;
4) conveniados acima de 60 anos pagam R$130

*/

function idadeConvênio(idade){

    let valorBase = 100;
    let valorAdicional

    if(idade <= 10){
        valorAdicional = 80
    }else if(idade <= 30){
        valorAdicional = 50
    }else if(idade <= 60){
        valorAdicional = 95
    }else{
        valorAdicional = 130
    }
    
    let valorFinal = valorBase + valorAdicional
    return `O valor a ser pago é: R$ ${valorFinal.toFixed(2)}`
}

console.log(idadeConvênio(10))
console.log(idadeConvênio(30))
console.log(idadeConvênio(60))
console.log(idadeConvênio(70))

