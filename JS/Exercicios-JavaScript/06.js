/* 

Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. 
A primeira função retornará o montante da aplicação financeira sob o regime de juros simples.
A segunda retornará o valor da aplicação sob o regime de juros compostos.

*/

// Juros simples 

function calculoJurosSimples(capital, taxaJuros, tempoAplicado){
    const montanteSimples = capital + (capital *  taxaJuros * tempoAplicado)
    return montanteSimples.toFixed(2)
}
console.log(calculoJurosSimples(1000, 0.02, 12))


console.log('------------------------------')

function calculoJurosComposto(capital1, taxaJuros1, tempoAplicado1){
    const montanteComposto = capital1 * Math.pow((1 + taxaJuros1), tempoAplicado1)
    return montanteComposto.toFixed(2)
}
console.log(calculoJurosComposto(1000, 0.02, 12))