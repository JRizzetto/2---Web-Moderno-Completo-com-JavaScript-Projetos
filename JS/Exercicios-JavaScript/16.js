/* 

Utilizando a estrutura do Switch faça um programa que simule uma calculadora básica.
O programa recebe como parâmetros dois valores numéricos e uma string referente à operação e a realize com os valores
numéricos na ordem que foram inseridos. 

Por exemplo: calculadora (2, ‘+’, 3). A função efetuará a soma de 2 e 3. 

Dica: Os sinais das operações são: ‘+’. ‘-’, ‘*’ e ‘/’. 

Crie um caso default para operações inválidas

*/

function resultCalculadora(num1, operacao, num2){

    let resultado;

    switch(operacao){
        case "+":
            console.log(resultado = num1 + num2)
            break

    case "-":
        console.log(resultado = num1 - num2)
        break

    case "*":
        console.log(resultado = num1 * num2)
        break

    case "/":
        console.log(resultado = num1 / num2)
        break

    default:
        console.log("Operação inválida")
    }
}

resultCalculadora(10, "+", 10)
resultCalculadora(10, "-", 10)
resultCalculadora(10, "*", 10)
resultCalculadora(10, "/", 10)
resultCalculadora(10, "%", 10)