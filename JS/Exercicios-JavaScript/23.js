/* 

Escreva um algoritmo que leia o código de um aluno e suas três notas. 

Calcule a média ponderada do aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. 

Mostre o código do aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e
"REPROVADO" se a média for menor que 5. 

Repita a operação até que o código lido seja negativo.

*/

function calcularMediaPonderada(nota1, nota2, nota3){
    let maiorNota = Math.max(nota1, nota2, nota3)
    let somaMenoresNotas = nota1 + nota2 + nota3 - maiorNota;

    return `${(maiorNota*4 + somaMenoresNotas*3) / (4+3+3)}`
}

function notaAluno(codigo, nota1, nota2, nota3){
    let media = calcularMediaPonderada(nota1, nota2, nota3)

    console.log(`O código do aluno é: ${codigo}`); 
    console.log(`As notas do aluno é: N1:${nota1}, N2:${nota2}, N3:${nota3}`); 
    console.log(`A Média do aluno é: ${media}`); 

    if(media >= 5){
        console.log(`APROVADO`); 
    }else{
        console.log(`REPROVADO`);
    }
}

function iniciarPrograma(){
    let codigo;

    do{
        codigo = parseInt(prompt("Digite o código do aluno (número negativo para sair)200"));

        if(codigo >= 0){
            let nota1 = parseInt(prompt("Digite a primeira nota: "))
            let nota2 = parseInt(prompt("Digite a segunda nota: "))
            let nota3 = parseInt(prompt("Digite a terceira nota: "))

            notaAluno(codigo, nota1, nota2, nota3);
        }
    }while(codigo >= 0)
    
    console.log("Programa encerrado.");
}

iniciarPrograma()

